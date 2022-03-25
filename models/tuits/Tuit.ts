/**
 * @file implements the data model to represent tuits in the middle tier
 */
import User from "../users/User";
import Tag from "../Tag";
import Topic from "../Topic";
import Stats from "./Stats";

export default interface Tuit {
    tuit: string,
    postedBy: User,
    postedOn?: Date,
    image?: String,
    youtube?: String,
    avatarLogo?: String,
    imageOverlay?: String,
    stats: Stats
};