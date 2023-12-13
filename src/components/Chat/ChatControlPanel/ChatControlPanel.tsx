import defaultStyles from './styles.ts';
import IconButton from "../../IconButton/IconButton.tsx";
import {View} from "react-native";
import ChatInput from "../ChatInput/ChatInput.tsx";

interface ChatControlPanelProps {
    onAddMessage: (text: string) => void
}

function ChatControlPanel({ onAddMessage }: ChatControlPanelProps) {
    const styles = defaultStyles();

    const handlePressEnter = (text: string): void => {
        onAddMessage(text);
    };

    return (
        <>
            <View style={styles.root}>
                <View>
                    <IconButton
                        name={'photo-camera'}
                        size={25}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <ChatInput onPressEnter={handlePressEnter} />
                </View>
                <View>
                    <IconButton
                        name={'send'}
                        size={25}
                    />
                </View>
            </View>
        </>
    )
}

export default ChatControlPanel
