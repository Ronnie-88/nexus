import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MG_URI;
    if (!mongoUri) {
      throw new Error("MG_URI is not defined in the environment variables");
    }
    await mongoose.connect(mongoUri);
    console.log("Connected to the database");
  } catch (error) {
    const currentError = error as Error;
    if (currentError) {
      console.error(
        `Error connecting to the database: ${currentError.message as string}`
      );
    } else {
      console.error("An unknown error occurred");
    }
  }
};

export default connectDB;
