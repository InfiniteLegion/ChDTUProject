import defaultStyles from './styles.ts';
import {Image, View} from "react-native";

function ChatAvatar() {
    const styles = defaultStyles();

    return (
        <>
            <View>
                <Image
                    style={styles.image}
                    source={require('../../assets/img/rn-photo.jpg')}
                />
            </View>
        </>
    );
}

export default ChatAvatar;
