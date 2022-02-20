import express, {Request, Response} from 'express';


import TuitController from "./controllers/TuitController";
import UserController from "./controllers/UserController";
import LikeController from "./controllers/LikeController";
import FollowController from "./controllers/FollowController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";

// import TuitDao from "./daos/TuitDao";
// import UserDao from "./daos/UserDao";

import mongoose from "mongoose";

const app = express();
const mongoUN = 'tuit'
const mongoPW = 'supersecretpassword'
const mongoURL = `mongodb+srv://${mongoUN}:${mongoPW}@cluster0.g4fpb.mongodb.net/tuiter?retryWrites=true&w=majority`
mongoose.connect(mongoURL);

app.use(express.json());

app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World! try'));

app.get('/add/:a/:b/:c', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

const tuitController = (TuitController.getInstance(app));
const userController = UserController.getInstance(app);
const likeController = LikeController.getInstance(app);
const followController = FollowController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const messageController = MessageController.getInstance(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);