import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  about: [String],
  aboutPic: String,
});

const aboutModel = mongoose.model("About", aboutSchema, "about");

export default aboutModel;
