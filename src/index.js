import { Sequelize, DataTypes } from "sequelize";
import readline from "readline";
import Wordler from "./wordler.js";

var rl = readline.createInterface(process.stdin, process.stdout);

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "postgres",
//   }
// );

// const Words = sequelize.define(
//   "words",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       allowNull: false,
//     },
//     word: {
//       type: DataTypes.STRING,
//     },
//     uniqueVowels: {
//       type: DataTypes.INTEGER,
//     },
//     characters: {
//       type: DataTypes.INTEGER,
//     },
//   },
//   {
//     timestamps: false,
//   }
// );

const initiate = (answer) => {
  const wordler = new Wordler(answer);

  const askAttempt = () => {
    rl.question(`Attempt #${wordler.currentAttempt}...\n`, (attempt) => {
      const result = wordler.process(attempt);

      if (result === "Success") {
        rl.write(`${attempt} is correct!`);
        return rl.close();
      }

      if (result === "Failed") {
        console.log(wordler.wordAttempts);
        rl.write(
          `Sorry, that was your last attempt. You tried the words ${wordler.wordAttempts.join(
            ", "
          )}`
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

const start = (callback) => {
  rl.question("What is the answer?\n", (answer) => {
    if (answer.length > 5) {
      rl.write("Word must be 5 letters\n");
      start(callback);
    } else {
      callback(answer);
    }
  });
};

start(initiate);

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");

//   const list = await Words.findAll({
//     where: {
//       uniqueVowels: 4,
//     },
//   });
//   console.log(list);
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }
