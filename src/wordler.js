export const alphabets = "abcdefghijklmnopqrstuvwxyz";

export default class Wordler {
  answer = [];
  maxAttempts;
  currentAttempt = 1;
  wordAttempts = [];
  letterAttempts = {};
  status = {
    none: 0,
    position: 1,
    correct: 2,
  };
  grid = [];

  constructor(answer, maxAttempts) {
    this.answer = answer.split("");
    this.maxAttempts = maxAttempts || 6;
  }

  process(word) {
    if (
      word.length > this.answer.length ||
      word.length < this.answer.length ||
      /[^a-z]/i.test(word)
    ) {
      return "Invalid";
    }

    if (word === this.answer.join("")) {
      return "Success";
    }

    this.wordAttempts.push(word);
    if (this.currentAttempt >= this.maxAttempts) {
      return "Failed";
    }

    const split = word.split("");
    const gridRow = [];
    split.forEach((letter, i) => {
      let status = this.status.none;

      if (letter === this.answer[i]) {
        // determine if it is the same position as answer letter
        status = this.status.correct;
      } else if (this.answer.some((l) => l === letter)) {
        // determine if it exists in the answer letter
        status = this.status.position;
        // if there are too many letters in the attempt than in the letter, should grey out one of them
      }

      // determine if it does not exist in the answer letter
      const review = { letter, status, position: i };
      gridRow.push(review);

      this.letterAttempts[`${letter}:${i}`] = review;
    });

    this.grid.push(gridRow);
    this.currentAttempt += 1;
  }
}
