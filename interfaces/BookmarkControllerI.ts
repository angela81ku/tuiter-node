/**
 * @file the interface of the bookmarkController
 */
import {Request, Response} from "express";

export default interface BookmarkControllerI {
    userBookmarksTuit (req: Request, res: Response): void;
    userUnbookmarksTuit (req: Request, res: Response): void;
    findAllUsersBookmarkers (req: Request, res: Response): void;

};