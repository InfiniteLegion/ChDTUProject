import { ImageStyle, StyleSheet } from "react-native";

export type ChatAvatarStyle = {
    image: ImageStyle
}

export default (): ChatAvatarStyle => {
    return StyleSheet.create({
        image: {
            width: 40,
            height: 40,
            borderRadius: 20,
        }
    })
}
