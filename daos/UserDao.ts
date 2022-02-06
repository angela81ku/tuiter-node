import UserDaoI from "../interfaces/UserDaoI"
import User from "../models/User"
import UserModel from "../mongoose/UserModel";

/**
 * Implements Data Access Object managing data storage
 * of Users
 * @implements {UserDaoI} UserDaoI
 * @property {UserDao} userDao Private single instance of UserDao
 */
export default class UserDao implements UserDaoI {
    private static userDao: UserDao | null = null;
    public static getInstance = (): UserDao => {
        if(UserDao.userDao === null) {
            UserDao.userDao = new UserDao();
        }
        return UserDao.userDao;
    }
    private constructor() {}


    findAllUsers = async (): Promise<User[]> =>
        UserModel.find();
    async findUserById(uid: string): Promise<any> {
        return UserModel.findById(uid);
    }
    async createUser(user: User): Promise<User> {
        return UserModel.create(user);
    }
    async deleteUser(uid: string):  Promise<any> {
        return UserModel.deleteOne({_id: uid});
    }
    async updateUser(uid: string, user: User): Promise<any> {
        return UserModel.updateOne({_id: uid}, {$set: user});
    }


}