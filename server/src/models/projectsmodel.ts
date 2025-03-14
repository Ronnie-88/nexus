import mongoose from "mongoose";
import projectCardSchema from "./projectcardmodel";

const projectsSchema = new mongoose.Schema({
  proProjectList: [projectCardSchema],
  sideProjectList: [projectCardSchema],
});

const projectsModel = mongoose.model("Projects", projectsSchema, "projects");

export default projectsModel;
