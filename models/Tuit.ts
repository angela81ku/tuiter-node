import User from "./User";
import Tag from "./Tag";
import Topic from "./Topic";

export default interface Tuit{
    tuit: string,
    postedBy: User,
    postedOn?: Date,
    tags: Array<Tag>;
    topics: Array<Topic>;
};