import mongoose from "mongoose";

const projectDetailSchema = new mongoose.Schema({
  projectpic: String,
  overview: String,
  role: String,
  responsibilities: [String],
  projectlink: String,
  videolink: String,
  downloadlink: String,
  githublink: String,
  sitelink: String,
});

export default projectDetailSchema;
