import express, {Request, Response} from 'express';
import TuitController from "./controllers/TuitController";
import UserController from "./controllers/UserController";
import LikeController from "./controllers/LikeController";
import FollowController from "./controllers/FollowController";
import BookmarkController from "./controllers/BookmarkController";
import MessageController from "./controllers/MessageController";
import AuthenticationController from "./controllers/AuthenticationController";
import mongoose from "mongoose";
import DislikeController from "./controllers/DislikeController";
const cors = require('cors');
const session = require("express-session");
// import TuitDao from "./daos/TuitDao";
// import UserDao from "./daos/UserDao";
const mongoUN = 'tuit'
const mongoURL = `mongodb+srv://${mongoUN}:`+process.env.DB_PASSWORD+`@cluster0.g4fpb.mongodb.net/tuiter?retryWrites=true&w=majority`
mongoose.connect(mongoURL);


const app = express();
app.use(cors({
    credentials: true,
    // origin: ["http://localhost:3000","http://localhost:3000$/", "https://sharp-mccarthy-caf2ab.netlify.app/", "https://sharp-mccarthy-caf2ab.netlify.app$/"]
    origin: "https://sharp-mccarthy-caf2ab.netlify.app/"
}));

const SECRET = 'process.env.SECRET';
let sess = {
    secret: SECRET,
    saveUninitialized: true,
    resave: true,
    proxy: true,
    cookie: {
        // the following used in production only
        secure: true,
        sameSite: "none"
        // the following used in development only
        // secure:false
    }
}

if (process.env.ENVIRONMENT === 'PRODUCTION') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))
app.use(express.json());

app.get('/', (req: Request, res: Response) =>
    res.send('app start success'));
app.get('/hello', (req: Request, res: Response) =>
    res.send('Hello World! try!!'));

app.get('/add/:a/:b/:c', (req: Request, res: Response) =>
    res.send(req.params.a + req.params.b));

const tuitController = (TuitController.getInstance(app));
const userController = UserController.getInstance(app);
const likeController = LikeController.getInstance(app);
const dislikeController = DislikeController.getInstance(app);
const followController = FollowController.getInstance(app);
const bookmarkController = BookmarkController.getInstance(app);
const messageController = MessageController.getInstance(app);
const authenticationController = AuthenticationController(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);
// app.listen(process.env.PORT);