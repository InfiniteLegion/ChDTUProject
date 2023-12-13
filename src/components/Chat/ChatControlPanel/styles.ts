import { StyleSheet, ViewStyle } from "react-native";

export interface ChatControlPanelStyles {
    root: ViewStyle
    inputContainer: ViewStyle
}

export default (): ChatControlPanelStyles => {
    return StyleSheet.create({
        root: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopColor: '#808080',
            borderTopWidth: 1,
            paddingTop: 10,
        },
        inputContainer: {
            width: '85%',
        },
    })
}
