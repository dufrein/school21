import mongoose from "mongoose";

//подключим переменную окружения
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const { MONGO_URL, MONGO_DBNAME } = process.env;

export const mongoStart = () => {
  mongoose.connect(`${MONGO_URL}/${MONGO_DBNAME}`);
  const connection = mongoose.connection;

  connection.on("connected", function () {
    console.log(connected("Mongoose default connection is open to ", MONGO_URL));
  });

  connection.on("error", function (err) {
    console.log(error("Mongoose default connection has occured " + err + " error"));
  });

  connection.on("disconnected", function () {
    console.log(disconnected("Mongoose default connection is disconnected"));
  });
};
