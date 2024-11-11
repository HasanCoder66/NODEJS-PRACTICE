import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

const PORT = 6999;
const app = express();
dotenv.config()
// console.log(process.env.MONGOURL)

app.listen(PORT, () => {
  connectDb();
  console.log(`App Listening on this Port Number ${PORT}`);
});

const connectDb = () => {
  mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
      console.log("Backend Connected");
    })
    .catch((error) => {
      throw error;
    });
};
