/**
 * @file implements the data model to represent bookmarks in the database
 */

import mongoose, {Schema} from "mongoose";
// import User from "../../models/users/User";
import Bookmark from "../../models/bookmarks/Bookmark";

const BookmarkSchema = new mongoose.Schema<Bookmark>({
    user: {type: Schema.Types.ObjectId, ref: "UserModel"},
    tuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
}, {collection: "bookmarks"});
export default BookmarkSchema;