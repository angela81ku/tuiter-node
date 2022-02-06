import {Request, Response, Express} from "express";
import UserDao from "../daos/UserDao";
import UserControllerI from "../interfaces/UserControllerI";

export default class UserController implements UserControllerI{

    private static userDao: UserDao = UserDao.getInstance();
    private static userController: UserController | null = null;
    public static getInstance = (app: Express): UserController => {
        if(UserController.userController === null) {
            UserController.userController = new UserController();

            app.get("/api/users", UserController.userController.findAllUsers);
            app.get("/api/users/:uid", UserController.userController.findUserById);
            app.post("/api/users", UserController.userController.createUser);
            app.put("/api/users/:uid", UserController.userController.updateUser);
            app.delete("/api/users/:uid", UserController.userController.deleteUser);

        }
        return UserController.userController;
    }

    private constructor() {}
    // app: Express;
    // userDao: UserDao;
    //
    // constructor(app: Express, userDao: UserDao) {
    //     this.app = app;
    //     this.userDao = userDao;
    //     this.app.get('/users', this.findAllUsers);
    //     this.app.get('/users/:userId', this.findUserById);
    //     this.app.post('/users', this.createUser);
    //     this.app.delete('/users/:userId', this.deleteUser);
    //     this.app.put('/users/:userId', this.updateUser);
    //
    // }

    findAllUsers(req: Request, res: Response) {
        UserController.userDao.findAllUsers()
            .then(users => res.json(users));
    }

    createUser(req: Request, res: Response): void {
        UserController.userDao.createUser(req.body)
            .then(user=>res.json(user))};


    deleteUser(req: Request, res: Response): void {
        UserController.userDao.deleteUser(req.params.userId)
            .then(status=>res.json(status));
    }

    findUserById(req: Request, res: Response): void {
        UserController.userDao.findUserById(req.params.userId)
            .then(user=>res.json(user));
    }

    updateUser(req: Request, res: Response): void {
        UserController.userDao.updateUser(req.params.userId, req.body)
            .then(status => res.json(status));
    }


}