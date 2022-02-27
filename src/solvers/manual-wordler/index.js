import Wordler from "../../wordler.js";

export const initiate = (answer, rl) => {
  const wordler = new Wordler(answer);

  const askAttempt = () => {
    rl.question(`Attempt #${wordler.currentAttempt}...\n`, (attempt) => {
      const result = wordler.process(attempt);

      if (result === "Success") {
        rl.write(`${attempt} is correct!\n`);
        return rl.close();
      }

      if (result === "Failed") {
        console.log(wordler.wordAttempts);
        rl.write(
          `Sorry, that was your last attempt. You tried the words ${wordler.wordAttempts.join(
            ", "
          )}\n`
        );
        return rl.close();
      }

      if (result === "Invalid") {
        rl.write(`The word "${attempt}" is invalid. Please try again...\n`);
      }

      askAttempt();
    });
  };

  askAttempt();
};
