import { StyleSheet, TextStyle, ViewStyle } from "react-native";

type ChatInputStyle = {
    root: ViewStyle
    textInput: TextStyle
}

export default (): ChatInputStyle => {
    return StyleSheet.create({
        root: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 3,
            backgroundColor: '#FFEFD5',
            borderRadius: 20,
        },
        textInput: {
            width: '100%',
            fontSize: 20,
        }
    })
}
