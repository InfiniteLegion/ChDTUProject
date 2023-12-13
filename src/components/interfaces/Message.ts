import {User} from './User.ts';

export interface Message {
    id: string;
    text: string;
    from: User;
    sourceReply?: Message;
}
