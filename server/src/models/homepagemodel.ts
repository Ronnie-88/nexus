import mongoose from "mongoose";

const homePageSchema = new mongoose.Schema({
  heroSection: {
    name: String,
    greeting: String,
    contact: {
      email: String,
      linkedinLink: String,
      githubLink: String,
      gitlabLink: String,
    },
    location: {
      locationName: String,
      icon: String,
    },
  },
});

const homePageModel = mongoose.model(
  "HomePage",
  homePageSchema,
  "HomePageContent"
); //must add name of collection if it already exists

export default homePageModel;
