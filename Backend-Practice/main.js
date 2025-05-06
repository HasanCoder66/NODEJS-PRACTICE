import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;
const MongoUrl = process.env.MONGOURL;
// || 'mongodb://localhost:27017/' ======>

mongoose.connect(MongoUrl).then(() => {
    console.log("Connected to MongoDB")
}).catch((error) =>{
    console.log(error,"Error connecting to MongoDB")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
