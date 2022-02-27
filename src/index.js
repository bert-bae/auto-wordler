import readline from "readline";
import sequelize from "./models/index.js";
import Wordler from "./wordler.js";
import * as ManualWordler from "./solvers/manual-wordler/index.js";
import BruteWordlerSolver from "./solvers/brute-wordler/index.js";

const rl = readline.createInterface(process.stdin, process.stdout);

export const start = (callback) => {
  rl.question("What is the answer?\n", (answer) => {
    if (answer.length > 5) {
      rl.write("Word must be 5 letters\n");
      start(callback);
    } else {
      return callback(answer);
    }
  });
};

const exit = async () => {
  await sequelize.close();
  rl.close();
};

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");

  // start(initiate);
  // start((answer) => ManualWordler.initiate(answer, rl));
  start(async (answer) => {
    const bruteSolver = new BruteWordlerSolver(new Wordler(answer, 10));
    await bruteSolver.solve();
    await exit();
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
  await exit();
}
