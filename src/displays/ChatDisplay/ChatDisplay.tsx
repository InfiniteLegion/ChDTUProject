import {View} from "react-native";
import Chat from "../../components/Chat/Chat/Chat.tsx";

function ChatDisplay() {
    return(
        <>
            <View style={{flex: 1 }}>
                <Chat />
            </View>
        </>
    );
}

export default ChatDisplay;
