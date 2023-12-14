import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export type AboutUsScreenStyles = {
    root: ViewStyle
    title: TextStyle
    texts: ViewStyle
}

export default (): AboutUsScreenStyles => {
    return StyleSheet.create({
        root: {
            gap: 10,
            padding: 20,
            alignItems: 'center'
        },
        title: {
            fontSize: 20,
            fontWeight: '700',
            textAlign: 'center'
        },
        texts: {
            gap: 20
        }
    })
}
