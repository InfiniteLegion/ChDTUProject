import { View } from "react-native";

import defaultStyles from './styles';
import ProfileTextContainer, {ProfileTextContainerProps} from "../../components/Profile/ProfileTextContainer/ProfileTextContainer.tsx";
import Avatar from "../../components/Avatar/Avatar.tsx";

function ProfileScreen() {
    const styles = defaultStyles();

    const textContainers: ProfileTextContainerProps[] = [
        { title: 'Освітній ступінь', description: 'Бакалавр' },
        { title: 'Факультет', description: 'Факультет інформаційних технологій і систем' },
        { title: 'Спеціальність', description: '122 - Компютерні науки' },
        { title: 'Освітня програма', description: 'Компютерні науки' },
        { title: 'Хобі', description: 'Відеоігри, програмування, манга, аніме' },
    ];

    const source = require('../../assets/img/me.jpg')

    return (
        <>
            <View style={styles.root}>
                <Avatar source={source} size={100} />
                <View style={styles.textContainers}>
                    {textContainers.map((textContainer, index) => <ProfileTextContainer
                        key={index}
                        title={textContainer.title}
                        description={textContainer.description}
                    />)}
                </View>
            </View>
        </>
    )
}

export default ProfileScreen;
