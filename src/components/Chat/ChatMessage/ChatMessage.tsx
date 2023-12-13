import defaultStyles from './styles.ts';
import {Text, View} from "react-native";
import Avatar from "../../Avatar/Avatar.tsx";
import Icon from "react-native-vector-icons/MaterialIcons";
import {Message} from "../../interfaces/Message.ts";
import {User} from "../../interfaces/User.ts";

export interface ChatMessageProps {
    id: string,
    text: string,
    from: User,
    sourceReply?: Message
    isMyMessage: boolean
}

function ChatMessage({ id, text, from, sourceReply, isMyMessage }: ChatMessageProps) {
    const styles = defaultStyles({ isMyMessage });

    return (
        <>
            <View style={styles.root}>
                <View style={styles.content}>
                    <View>
                        <Avatar />
                    </View>
                    <View style={styles.contentContainer}>
                        {sourceReply && <>
                            <View style={styles.iconContainer}>
                                <Icon name={'reply'} />
                                <Text style={styles.iconText}>
                                    You replied to {from.firstName}
                                </Text>
                            </View>
                            <View style={styles.replyContainer}>
                                <Text style={styles.replyText}>
                                    {sourceReply?.text}
                                </Text>
                            </View>
                        </>}
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                {text}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ChatMessage;
