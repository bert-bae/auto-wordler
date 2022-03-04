export const alphabets = "abcdefghijklmnopqrstuvwxyz";

export const positionStatusEnum = {
  none: 0,
  position: 1,
  correct: 2,
};

export const statusEnum = {
  unsolved: "unsolved",
  solved: "solved",
  failed: "failed",
};

export default class Wordler {
  answer = [];
  maxAttempts;
  currentAttempt = 1;
  wordAttempts = [];
  letterAttempts = {};
  status = "";
  grid = [];

  constructor(answer, maxAttempts) {
    this.answer = answer.split("");
    this.maxAttempts = maxAttempts || 6;
  }

  process(word) {
    if (
      this.status === statusEnum.solved ||
      this.status === statusEnum.failed
    ) {
      return;
    }

    if (
      word.length > this.answer.length ||
      word.length < this.answer.length ||
      /[^a-z]/i.test(word)
    ) {
      this.status = statusEnum.unsolved;
      return;
    }

    this.wordAttempts.push(word);
    if (word === this.answer.join("")) {
      this.status = statusEnum.solved;
      return;
    }

    if (this.currentAttempt >= this.maxAttempts) {
      this.status = statusEnum.failed;
      return;
    }

    const split = word.split("");
    const gridRow = [];
    split.forEach((letter, i) => {
      let status = positionStatusEnum.none;

      if (letter === this.answer[i]) {
        // determine if it is the same position as answer letter
        status = positionStatusEnum.correct;
      } else if (this.answer.some((l) => l === letter)) {
        // determine if it exists in the answer letter
        status = positionStatusEnum.position;
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
