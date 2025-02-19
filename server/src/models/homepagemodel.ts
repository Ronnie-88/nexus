import mongoose from "mongoose";

const homePageSchema = new mongoose.Schema({
  heroSection: {
    name: String,
    greeting: String,
    contact: {
      email: String,
      linkedinLink: String,
      linkedinIcon: String,
    },
    location: {
      locationName: String,
      icon: String,
    },
    headShot: String,
  },
  programmingLanguagesSection: {
    cPlusPlusContent: {
      name: String,
      icon: String,
    },
    cSharpContent: {
      name: String,
      icon: String,
    },
    javaContent: {
      name: String,
      icon: String,
    },
    typescriptContent: {
      name: String,
      icon: String,
    },
    javascriptContent: {
      name: String,
      icon: String,
    },
    cssContent: {
      name: String,
      icon: String,
    },
    htmlContent: {
      name: String,
      icon: String,
    },
  },
  TechSection: {
    UEContent: {
      name: String,
      icon: String,
    },
    unityContent: {
      name: String,
      icon: String,
    },
    gitContent: {
      name: String,
      icon: String,
    },
    expressContent: {
      name: String,
      icon: String,
    },
    nodeContent: {
      name: String,
      icon: String,
    },
    reactContent: {
      name: String,
      icon: String,
    },
  }, // projectsbtn is now REMOVED from the schema
});

const homePageModel = mongoose.model(
  "HomePage",
  homePageSchema,
  "HomePageContent"
); //must add name of collection if it already exists

export default homePageModel;
