import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";
import User from "../models/User";
import Tag from "../models/Tag";
import Topic from "../models/Topic";
import TuitSchema from "./TuitSchema";


const TagSchema = new mongoose.Schema<Tag>({
    tag: {type: String, required: true},
    // tuits: [TuitSchema]

}, {collection: 'tags'});
export default TagSchema;