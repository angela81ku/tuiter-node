
import Message from "../models/messages/Message";
import User from "../models/users/User";

/**
 * @file Declares API for Messages related data access object methods
 */
export default interface MessageDaoI {
    userMessagesUser (senderUid: string, receiverUid: string, message: Message): Promise<Message>;
    findAllSentMessages (uid: string): Promise<Message[]>;
    findAllReceivedMessages (uid: string): Promise<Message[]>;
    deleteMessage (senderUid: string, receiverUid: string): Promise<Message[]>;

};