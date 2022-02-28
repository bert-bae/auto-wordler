import { WordsModel } from "../../models/index.js";

export default class RegexWordlerSolver {
  wordler;
  foundLettersRegex = /a-z/gi;
  positionRegex = /[a-z][a-z][a-z][a-z][a-z]/;
  wordList = [];
  foundLetters = new Set();

  constructor(wordler) {
    this.wordler = wordler;
  }

  async loadWords() {
    this.wordList = (await WordsModel.findAll()).map((item) => item.dataValues);
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
    this.constructRegex();
    this.wordList = this.wordList.filter((item) => {
      if (this.wordler.wordAttempts.includes(item.word)) {
        return false;
      }

      if (!this.foundLettersRegex.test(item.word)) {
        return false;
      }

      return this.positionRegex.test(item.word);
    });
    console.log(`Found letters regex: ${this.foundLettersRegex}`);
    console.log(`Position regex: ${this.positionRegex}`);
    console.log(
      `Narrowed down list of possible words to ${this.wordList.length}`
    );
    return this.wordList[0]?.word;
  }

  constructRegex() {
    const letterMap = this.wordler.letterAttempts;
    const excludeSet = new Set();
    const positionExcludeSet = [
      new Set(),
      new Set(),
      new Set(),
      new Set(),
      new Set(),
    ];
    let charRegexList = [null, null, null, null, null];
    Object.values(letterMap).forEach(({ status, position, letter }) => {
      if (status === this.wordler.status.correct) {
        this.addFoundLetter(letter);
        return (charRegexList[position] = letter);
      }

      if (status === this.wordler.status.position) {
        this.addFoundLetter(letter);
        positionExcludeSet[position].add(letter);
        return (charRegexList[position] = this.wordler.status.position);
      }

      if (status === this.wordler.status.none) {
        excludeSet.add(letter);
        return (charRegexList[position] = this.wordler.status.none);
      }
    });

    this.aggregatePositionRegex(charRegexList, positionExcludeSet, excludeSet);
    this.aggregateFoundLetterRegex();
  }

  addFoundLetter(letter) {
    this.foundLetters.add(letter);
  }

  aggregatePositionRegex(regexList, posExclusionSet, excludeSet) {
    const exclusionRegex = regexList.map((reg, i) => {
      const positionRegex =
        posExclusionSet[i].size > 0 ? [...posExclusionSet[i]].join("") : "";
      const noneRegex = [...excludeSet].join("");
      if (
        reg === this.wordler.status.position ||
        reg === this.wordler.status.none
      ) {
        return `([^${positionRegex}${noneRegex}])`;
      }

      return `(${reg})`;
    });

    this.positionRegex = new RegExp(`${exclusionRegex.join("")}`, "i");
  }

  aggregateFoundLetterRegex() {
    this.foundLettersRegex = new RegExp(
      `${[...this.foundLetters].map((l) => `(?=.*${l})`).join("")}.+`,
      "i"
    );
  }
}
