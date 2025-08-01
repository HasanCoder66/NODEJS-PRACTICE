import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from "./routes/authRoute.js";


const PORT = 5000;
const app = express();
dotenv.config()
// console.log(process.env.MONGOURL)
// console.log(process.env.MONGOURL)

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)

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
