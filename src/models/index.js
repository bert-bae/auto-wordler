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

export const WordsModel = sequelize.define(
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

export default sequelize;
