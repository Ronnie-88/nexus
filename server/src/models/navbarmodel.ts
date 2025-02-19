import mongoose from "mongoose";

const navBarSchema = new mongoose.Schema({
  initials: String,
  buttonContent: {
    about: String,
    home: String,
    projects: String,
  },
});

const navBarModel = mongoose.model("NavBar", navBarSchema, "navbar");
export default navBarModel;
