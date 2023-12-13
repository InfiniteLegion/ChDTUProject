import { StyleSheet, ViewStyle } from "react-native";

export type ChatBoardStyle = {
    content: ViewStyle
}

export default (): ChatBoardStyle => {
    return StyleSheet.create({
        content: {
            flexGrow: 1,
            gap: 10,
        }
    })
}
