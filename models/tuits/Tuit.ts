/**
 * @file implements the data model to represent tuits in the middle tier
 */
import User from "../users/User";
import Tag from "../Tag";
import Topic from "../Topic";

export default interface Tuit{
    tuit: string,
    postedBy: User,
    postedOn?: Date,
    // tags: Array<Tag>;
    // topics: Array<Topic>;
};