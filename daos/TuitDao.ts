import TuitDaoI from "../interfaces/TuitDaoI"
import Tuit from "../models/Tuit"
import TuitModel from "../mongoose/TuitModel";
import TuitSchema from "../mongoose/TuitSchema";

export default class TuitDao implements TuitDaoI{
    private static TuitDao: TuitDao | null = null;
    public static getInstance = (): TuitDao =>{
        if(TuitDao.TuitDao === null){
            TuitDao.TuitDao = new TuitDao();
        }
        return TuitDao.TuitDao;
    }
    private constructor() {
    }


    async findAllTuits(): Promise<Tuit[]> {
        return TuitModel.find();
    }
    async findTuitById(tid: string): Promise<any> {
        return TuitModel.findById(tid);
    }
    // professor version
    // findTuitById = async (uid: string): Promise<any> =>
    //     TuitModel.findById(uid)
    //         .populate("postedBy")
    //         .exec();
    async findTuitsByUser(uid: string): Promise<Tuit[]>{
        return TuitModel.find({postedBy:uid})
    }
    async createTuit(Tuit: Tuit): Promise<Tuit> {
        return TuitModel.create(Tuit);
    }
    async deleteTuit(uid: string):  Promise<any> {
        return TuitModel.deleteOne({_id: uid});
    }
    async updateTuit(uid: string, tuit: Tuit): Promise<any> {
        return TuitModel.updateOne({_id: uid}, {$set: tuit});
    }


}