import express, {Request, Response, Express} from "express";
import TuitDao from "../daos/TuitDao";
import TuitControllerI from "../interfaces/TuitControllerI";

export default class TuitController implements TuitControllerI{
    private static tuitDao = TuitDao.getInstance();
    private static tuitController : TuitController | null = null;
    public static getInstance = (app: Express) : TuitController =>{
        if (TuitController.tuitController === null){
            TuitController.tuitController = new TuitController();

            app.get("/api/tuits", TuitController.tuitController.findAllTuits);
            app.get("/api/users/:uid/tuits", TuitController.tuitController.findTuitsByUser);
            app.get("/api/tuits/:tid", TuitController.tuitController.findTuitById);
            app.post("/api/tuits", TuitController.tuitController.createTuit);
            app.put("/api/tuits/:tid", TuitController.tuitController.updateTuit);
            app.delete("/api/tuits/:tid", TuitController.tuitController.deleteTuit);
        }
        return TuitController.tuitController;
    }

    // constructor(app: Express, tuitDao: TuitDao) {
    //     this.app = app;
    //     this.tuitDao = tuitDao;
    //     this.app.get('/tuits', this.findAllTuits);
    //     this.app.get('/tuits/:tuitId', this.findTuitById);
    //     this.app.get('/users/:userId/tuits', this.findTuitsByUser)
    //     this.app.post('/tuits', this.createTuit);
    //     this.app.delete('/tuits/:tuitId', this.deleteTuit);
    //     this.app.put('/tuits/:tuitId', this.updateTuit);
    //
    // }

    findAllTuits(req: Request, res: Response) {
        TuitController.tuitDao.findAllTuits()
            .then(tuits => res.json(tuits));
    }

    createTuit(req: Request, res: Response): void {
        TuitController.tuitDao.createTuit(req.body)
            .then(tuit=>res.json(tuit))};


    deleteTuit(req: Request, res: Response): void {
        TuitController.tuitDao.deleteTuit(req.params.tid)
            .then(status=>res.json(status));
    }

    findTuitById(req: Request, res: Response): void {
        TuitController.tuitDao.findTuitById(req.params.tid)
            .then(tuit=>res.json(tuit));
    }

    updateTuit(req: Request, res: Response): void {
        TuitController.tuitDao.updateTuit(req.params.tid, req.body)
            .then(status => res.json(status));
    }

    findTuitsByUser(req: Request, res: Response): void {
        TuitController.tuitDao.findTuitsByUser(req.params.uid)
            .then(tuits=>res.json(tuits))
    }


}