import mongoose, {Schema} from "mongoose";
import Tuit from "../models/tuits/Tuit";
import User from "../models/users/User";
import Topic from "../models/Topic";
import TuitSchema from "./tuits/TuitSchema";


const TopicSchema = new mongoose.Schema<Topic>({
    topic: {type: String, required: true},
    // tuits: [TuitSchema]

}, {collection: 'topics'});
export default TopicSchema;