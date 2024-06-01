import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { Pressable } from "react-native"

const IconButton = () => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate('ProfileStack')}>
                <Ionicons name="star" size={24} color={'red'}/>
        </Pressable>
    )
}

export default IconButton