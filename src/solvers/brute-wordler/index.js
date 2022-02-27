import { WordsModel } from "../../models/index.js";

export default class BruteWordlerSolver {
  wordler;
  wordRegex = /[a-z][a-z][a-z][a-z][a-z]/;
  wordList = [];

  constructor(wordler) {
    this.wordler = wordler;
  }

  async loadWords() {
    this.wordList = await (
      await WordsModel.findAll()
    ).map((item) => item.dataValues);
  }

  async solve() {
    const firstAttempt = this.wordler.currentAttempt === 1;
    if (firstAttempt) {
      await this.loadWords();
    }

    const wordToGuess = firstAttempt ? "audio" : this.guess();
    console.log(`Guessing "${wordToGuess}"`);
    if (!wordToGuess) {
      console.log("Failed, could not find word to attempt");
      return false;
    }

    const attempt = this.wordler.process(wordToGuess);
    if (attempt === "Success") {
      console.log(
        `Success. Attempted words were ${this.wordler.wordAttempts.join(
          ", "
        )}\n`
      );
      return true;
    }

    if (attempt === "Failed") {
      console.log(
        `Failed. Attempted words were ${this.wordler.wordAttempts.join(", ")}\n`
      );
      return false;
    }

    if (attempt === "Invalid") {
      return false;
    }

    this.solve();
  }

  guess() {
    this.buildRegexList();
    this.wordList = this.wordList.filter((item) => {
      if (this.wordler.wordAttempts.includes(item.word)) {
        return false;
      }

      return this.wordRegex.test(item.word);
    });
    console.log(
      `Narrowed down list of possible words to ${this.wordList.length}`
    );
    return this.wordList[0]?.word;
  }

  buildRegexList() {
    const letterMap = this.wordler.letterAttempts;
    const noneLetters = new Set();
    const wrongLetters = [
      new Set(),
      new Set(),
      new Set(),
      new Set(),
      new Set(),
    ];
    let charRegexList = [null, null, null, null, null];
    Object.values(letterMap).forEach((group) => {
      if (group.status === this.wordler.status.correct) {
        return (charRegexList[group.position] = group.letter);
      }

      if (group.status === this.wordler.status.position) {
        wrongLetters[group.position].add(group.letter);
        return (charRegexList[group.position] = this.wordler.status.position);
      }

      if (group.status === this.wordler.status.none) {
        noneLetters.add(group.letter);
        return (charRegexList[group.position] = this.wordler.status.none);
      }
    });

    console.log(wrongLetters);
    this.wordRegex = new RegExp(
      this.aggregateRegexList(charRegexList, wrongLetters, noneLetters).join(
        ""
      ),
      "i"
    );
    console.log(this.wordRegex);
  }

  aggregateRegexList(regexList, wrongLetters, noneLetters) {
    return regexList.map((reg, i) => {
      const positionRegex =
        wrongLetters[i].length > 0 ? `[^${[...wrongLetters[i]].join("")}]` : "";
      const noneRegex = `[^${[...noneLetters].join("")}]`;
      if (
        reg === this.wordler.status.position ||
        reg === this.wordler.status.none
      ) {
        return `(${positionRegex}${noneRegex})`;
      }

      return `(${reg})`;
    });
  }
}
