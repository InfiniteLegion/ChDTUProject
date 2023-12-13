import defaultStyles from './styles.ts';
import {Image, View} from "react-native";

function Avatar() {
    const styles = defaultStyles();

    return(
        <>
            <View>
                <Image
                    style={styles.image}
                    source={require('../../assets/img/kenobi.jpg')}
                />
            </View>
        </>
    );
}

export default Avatar;
