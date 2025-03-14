import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/database";
import homePageModel from "./models/homepagemodel";
import HomePage from "./types/homepagetype";
import navBarModel from "./models/navbarmodel";
import NavBar from "./types/navbartype";
import About from "./types/abouttype";
import aboutModel from "./models/aboutmodel";
import Projects from "./types/projectstype";
import projectsModel from "./models/projectsmodel";
import { model } from "mongoose";

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
      res.status(404).json({ message: "No hero section data found" });
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

app.get("/about", async (req, res) => {
  try {
    const aboutDoc: About | null = await aboutModel.findOne();
    if (aboutDoc) {
      res.json(aboutDoc);
    } else {
      res.status(404).json({ message: "No about data found" });
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

app.get("/projects", async (req, res) => {
  try {
    const projectDoc: Projects | null = await projectsModel.findOne();

    if (projectDoc) {
      res.json(projectDoc);
    } else {
      res.status(404).json({ message: "No projects data found" });
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

app.get("/", async (req, res) => {
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
