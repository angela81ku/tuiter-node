/**
 * @file Implements DAO managing data storage of follows. Uses mongoose FollowModel
 * to integrate with MongoDB
 */
import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/follows/FollowModel";
import Follow from "../models/follows/Follow";
import User from "../models/users/User";

/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of Follows
 * @property {FollowDao} followDao Private single instance of followDao
 */
export default class FollowDao implements FollowDaoI {
    /**
     * Creates singleton DAO instance
     * @returns FollowDao
     */
    private static followDao: FollowDao | null = null;
    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}

    /**
     * Given specified userId to find the users followers.
     * @param {string} uid the specified user ID, the primary key of user
     * @returns Promise To be notified when the follows are retrieved from
     * database
     */
    findAllUsersFollowers = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({follower: uid})
            .populate("followee")
            .exec();

    /**
     * Given specified userId to find the users followers.
     * @param {string} uid the specified user ID, the primary key of user
     * @returns Promise To be notified when the follows are retrieved from
     * database
     */
    findAllUsersFollowees = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({followee: uid})
            .populate("follower")
            .exec();

    /**
     * Specific user follow certain user
     * @param {string} followerUid the specified user ID, the primary key of user
     * @param {string} followeeUid the specified user ID, the primary key of user
     * @returns Promise To be notified when follows are created in the database
     */
    userFollowsUser = async (followerUid: string, followeeUid: string): Promise<Follow> =>
        FollowModel.create({follower: followerUid, followee: followeeUid});


    /**
     * Specific user unfollow certain tuit
     * @param {string} uid the specified user ID, the primary key of user
     * @param {string} tid the specified tuit ID, the primary key of tuit
     * @returns Promise To be notified when follows are deleted in the database
     */
    userUnfollowsUser = async (followerUid: string, followeeUid: string): Promise<any> =>
        FollowModel.deleteOne({follower: followerUid, followee: followeeUid});
}