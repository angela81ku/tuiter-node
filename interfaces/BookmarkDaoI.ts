import Like from "../models/likes/Like";
import Bookmark from "../models/bookmarks/Bookmark";
import User from "../models/users/User";

/**
 * @file Declares API for Bookmark related data access object methods
 */
export default interface BookmarkDaoI {
    userBookmarksTuit (uid: string, tid: string): Promise<Bookmark>;
    userUnbookmarksTuit (uid: string, tid: string): Promise<any>;
    findAllUsersBookmarkers (uid: string): Promise<Bookmark[]>;

};