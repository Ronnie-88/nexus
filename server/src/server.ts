import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/database";
import mongoose from "mongoose";
import homePageModel from "./models/homepagemodel";
import HomePage from "./types/homepagetype";
import navBarModel from "./models/navbarmodel";
import NavBar from "./types/navbartype";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get("/navbar", async (req, res) => {
  try {
    const navBarDoc: NavBar | null = await navBarModel.findOne();
    if (navBarDoc) {
      res.json(navBarDoc);
    } else {
      res.status(404).json({ message: "No navbar data found" });
    }
  } catch (error) {
    const currentError = error as Error;
    if (currentError) {
      res.status(500).json({ message: currentError.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
});

app.get("/herosection", async (req, res) => {
  try {
    const homePageDoc: HomePage | null = await homePageModel.findOne();
    if (homePageDoc) {
      res.json(homePageDoc.heroSection);
    } else {
      res.status(404).json({ message: "No home page data found" });
    }
  } catch (error) {
    const currentError = error as Error;
    if (currentError) {
      res.status(500).json({ message: currentError.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
});
app.get("/home", async (req, res) => {
  try {
    const homePageDoc: HomePage | null = await homePageModel.findOne();
    if (homePageDoc) {
      res.json(homePageDoc);
    } else {
      res.status(404).json({ message: "No home page data found" });
    }
  } catch (error) {
    const currentError = error as Error;
    if (currentError) {
      res.status(500).json({ message: currentError.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
