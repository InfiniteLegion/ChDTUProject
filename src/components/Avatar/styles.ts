import {ImageStyle, StyleSheet} from "react-native";

export type AvatarStyle = {
    image: ImageStyle
}

export default (): AvatarStyle => {
    return StyleSheet.create({
        image: {
            width: 40,
            height: 40,
            borderRadius: 20
        }
    })
}
