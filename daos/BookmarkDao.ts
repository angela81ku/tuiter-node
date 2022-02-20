/**
 * @file Implements DAO managing data storage of bookmarks. Uses mongoose BookmarkModel
 * to integrate with MongoDB
 */
import BookmarkDaoI from "../interfaces/BookmarkDaoI";
import BookmarkModel from "../mongoose/bookmarks/BookmarkModel";
import Bookmark from "../models/bookmarks/Bookmark";
// import User from "../models/users/User";

/**
 * @class BookmarkDao Implements Data Access Object managing data storage
 * of Bookmarks
 * @property {BookmarkDao} bookmarkDao Private single instance of bookmarkDao
 */
export default class BookmarkDao implements BookmarkDaoI {
    /**
     * Creates singleton DAO instance
     * @returns BookmarkDao
     */
    private static bookmarkDao: BookmarkDao | null = null;
    public static getInstance = (): BookmarkDao => {
        if(BookmarkDao.bookmarkDao === null) {
            BookmarkDao.bookmarkDao = new BookmarkDao();
        }
        return BookmarkDao.bookmarkDao;
    }
    private constructor() {}

    /**
     * Given specified userId to find the users bookmarked tuits.
     * @param {string} uid the specified user ID, the primary key of user
     * @returns Promise To be notified when the bookmarks are retrieved from
     * database
     */
    findAllUsersBookmarkers = async (uid: string): Promise<Bookmark[]> =>
        BookmarkModel
            .find({user: uid})
            .populate("tuit")
            .exec();



    /**
     * Specific user bookmark certain user
     * @param {string} uid the specified user ID, the primary key of user
     * @param {string} tid the specified tuit ID, the primary key of tuit
     * @returns Promise To be notified when bookmarks are created in the database
     */
    userBookmarksTuit = async (uid: string, tid: string): Promise<Bookmark> =>
        BookmarkModel.create({user: uid, tuit: tid});


    /**
     * Specific user unbookmark certain tuit
     * @param {string} uid the specified user ID, the primary key of user
     * @param {string} tid the specified tuit ID, the primary key of tuit
     * @returns Promise To be notified when bookmarks are deleted in the database
     */
    userUnbookmarksTuit = async (uid: string, tid: string): Promise<any> =>
        BookmarkModel.deleteOne({user: uid, tuit: tid});
}