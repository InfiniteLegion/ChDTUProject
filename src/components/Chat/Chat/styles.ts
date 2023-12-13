import { StyleSheet, ViewStyle } from "react-native";

export type ChatStyle = {
    root: ViewStyle
    board: ViewStyle
}

export default (): ChatStyle => {
    return StyleSheet.create({
        root: {
            flex: 1,
            gap: 10,
        },
        board: {
            flex: 1,
        }
    })
}
