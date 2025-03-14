import mongoose, { SchemaTypes } from "mongoose";
import projectDetailSchema from "./projectdetailmodel";

const projectCardSchema = new mongoose.Schema({
  name: String,
  cardPic: String,
  routeName: String,
  projectdetails: projectDetailSchema,
});

export default projectCardSchema;
