import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";
import User from "../models/User";
import Topic from "../models/Topic";
import TuitSchema from "./TuitSchema";


const TopicSchema = new mongoose.Schema<Topic>({
    topic: {type: String, required: true},
    // tuits: [TuitSchema]

}, {collection: 'topics'});
export default TopicSchema;