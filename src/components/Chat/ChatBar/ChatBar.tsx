import defaultStyles from './styles.ts';
import {Text, View} from "react-native";
import BackButton from "../../BackButton/BackButton.tsx";
import IconButton from "../../IconButton/IconButton.tsx";
function ChatBar() {
    const style = defaultStyles();

    return (
        <>
            <View style={style.root}>
                <View>
                    <BackButton
                        iconName={'arrow-left'}
                        label={'back'}
                    />
                </View>
                <View style={style.mainSection}>
                    <Text style={style.title}>
                        Clone Wars
                    </Text>
                </View>
                <View>
                    <IconButton
                        name={'settings'}
                        size={30}
                    />
                </View>
            </View>
        </>
    )
}

export default ChatBar;
