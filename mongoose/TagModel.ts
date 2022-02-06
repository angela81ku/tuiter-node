import mongoose from "mongoose";
import TagSchema from "./TagSchema";
const TagModel = mongoose.model('TagModel',TagSchema );
export default TagModel;