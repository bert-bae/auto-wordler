import { WordsModel } from "../../models/index.js";
import { positionStatusEnum, statusEnum } from "../../wordler.js";

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

    this.wordler.process(wordToGuess);
    if (this.wordler.status === statusEnum.solved) {
      console.log(
        `Success. Attempted words were ${this.wordler.wordAttempts.join(
          ", "
        )}\n`
      );
      return true;
    }

    if (this.wordler.status === statusEnum.failed) {
      console.log(
        `Failed. Attempted words were ${this.wordler.wordAttempts.join(", ")}\n`
      );
      return false;
    }

    if (this.wordler.status === statusEnum.unsolved) {
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
    console.log("----------------------------------");
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
      if (status === positionStatusEnum.correct) {
        this.addFoundLetter(letter);
        return (charRegexList[position] = letter);
      }

      if (status === positionStatusEnum.position) {
        this.addFoundLetter(letter);
        positionExcludeSet[position].add(letter);
        return (charRegexList[position] = positionStatusEnum.position);
      }

      if (status === positionStatusEnum.none) {
        excludeSet.add(letter);
        return (charRegexList[position] = positionStatusEnum.none);
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
        reg === positionStatusEnum.position ||
        reg === positionStatusEnum.none
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
