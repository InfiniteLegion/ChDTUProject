import defaultStyles from './styles.ts';
import {View} from "react-native";
import ChatBar from "../ChatBar/ChatBar.tsx";
import ChatBoard from "../ChatBoard/ChatBoard.tsx";
import ChatControlPanel from "../ChatControlPanel/ChatControlPanel.tsx";
import {Message} from "../../interfaces/Message.ts";
import {useState} from "react";
import {User} from "../../interfaces/User.ts";

function Chat() {
    const styles = defaultStyles();

    const users: User[] = [
        { id: '1', lastName: 'Skywalker', firstName: 'Anakin' },
        { id: '2', lastName: 'Kenobi', firstName: 'Obi-Wan' },
        { id: '3', lastName: 'Tano', firstName: 'Ahsoka'}
    ];

    const messageStart: Message = { id: '1', text: 'Let do this', from: users[0] };
    const twoMessageStart: Message = { id: '2', text: 'Great, just sent out the invite!', from: users[1] };

    const initialMessages: Message[] = [
        { ...messageStart },
        { ...twoMessageStart },
        { id: '3', text: 'Thats actually so cool', from: users[2] },
        { id: '4', text: 'So much excitement', from: users[2], sourceReply: messageStart },
        { id: '5', text: 'Haha, exactly', from: users[0] },
        { id: '6', text: 'Yep, I got It', from: users[0], sourceReply: twoMessageStart  },
    ];

    const [messages, setMessages] = useState<Message[]>(initialMessages);

    const handleAddMessage = (text: string): void => {
        const id = messages.length + 1;
        const user = users[2];

        const message: Message = {
            id: id.toString(),
            text: text,
            from: user,
        };

        const newMessages = [...messages, message];
        setMessages(newMessages);
    };

    return (
        <>
            <View style={styles.root}>
                <ChatBar />
                <View style={styles.board}>
                    <ChatBoard messages={messages} userId={'3'} />
                </View>
                <ChatControlPanel onAddMessage={handleAddMessage} />
            </View>
        </>
    );
}

export default Chat;
