import {StyleSheet, TextStyle, ViewStyle} from "react-native";

export type ChatMessageStyle = {
    root: ViewStyle
    content: ViewStyle
    contentContainer: ViewStyle,
    iconContainer: ViewStyle
    iconText: TextStyle
    replyContainer: ViewStyle
    replyText: TextStyle
    textContainer: ViewStyle
    text: TextStyle
}

export default ({ isMyMessage }: { isMyMessage: boolean}): ChatMessageStyle => {
    return StyleSheet.create({
        root: {
            maxWidth: '100%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: isMyMessage ? 'flex-end' : 'flex-start',
        },
        content: {
            flexDirection: isMyMessage ? 'row-reverse' : 'row',
            alignItems: 'flex-end',
            maxWidth: '75%',
            width: '100%',
            gap: 10,
        },
        contentContainer: {
            alignItems: isMyMessage ? 'flex-end' : 'flex-start',
        },
        iconContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            paddingBottom: 5,
        },
        iconText: {
            color: '#FF4500'
        },
        replyContainer: {
            padding: 10,
            backgroundColor: '#FFDAB9',
            borderRadius: 15,
            paddingBottom: 30,
            marginBottom: -20,
            marginLeft: isMyMessage ? 0 : -10,
            marginRight: isMyMessage ? -10 : 0,
        },
        replyText: {
            color: '#808080',
            fontSize: 16,
        },
        textContainer: {
            padding: 10,
            backgroundColor: '#FF7F50',
            borderRadius: 15,
        },
        text: {
            color: '#000000',
            fontSize: 18,
        },
    });
}
