import {StyleSheet, TextStyle, ViewStyle} from "react-native";

export type ChatBarStyle = {
    root: ViewStyle
    mainSection: ViewStyle
    title: TextStyle,
}

export default (): ChatBarStyle => {
    return StyleSheet.create({
        root: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomColor: '#808080',
            borderBottomWidth: 1,
        },
        mainSection: {
            width: '50%',
        },
        title: {
            fontSize: 18,
            fontWeight: '700',
        },
    });
};
