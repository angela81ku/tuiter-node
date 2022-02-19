/**
 * @file implements the data model to represent tuits in the database
 */


import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";
import User from "../models/User";
import Tag from "../models/Tag";
import Topic from "../models/Topic";
import TagSchema from "./TagSchema";
import TopicSchema from "./TopicSchema";

const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedOn: {type: Date, default: Date.now},
    postedBy:{type: Schema.Types.ObjectId, ref: "UserModel"},
    // tags:[TagSchema],
    // topics: [TopicSchema],
}, {collection: 'tuits'});
export default TuitSchema;