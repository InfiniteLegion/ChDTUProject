import defaultStyles from './styles.ts';
import {Message} from "../../interfaces/Message.ts";
import {ScrollView} from "react-native";
import ChatMessage from "../ChatMessage/ChatMessage.tsx";

export interface ChatBoardProps {
    messages: Message[],
    userId: string,
}

function ChatBoard({ messages, userId }: ChatBoardProps) {
    const styles = defaultStyles();

    return (
        <>
            <ScrollView contentContainerStyle={styles.content}>
                {messages.map((message) => <ChatMessage
                    key={message.id}
                    id={message.id}
                    text={message.text}
                    from={message.from}
                    sourceReply={message.sourceReply}
                    isMyMessage={userId === message.from.id}
                />)}
            </ScrollView>
        </>
    )
}

export default ChatBoard;
