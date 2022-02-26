import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const Words = sequelize.define(
  "words",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    word: {
      type: DataTypes.STRING,
    },
    uniqueVowels: {
      type: DataTypes.INTEGER,
    },
    characters: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");

  const list = await Words.findAll({
    where: {
      uniqueVowels: 4,
    },
  });
  console.log(list);
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
