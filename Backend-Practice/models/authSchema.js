import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      Min: 3,
      Max: 10,
    },
  },
  { timestamp: true }
);

export default mongoose.model("User", userSchema);
