import { View, Text, Pressable, Image, StyleSheet } from "react-native"

function MealItem({ data = {} }) {

    const { title, imageUrl } = data || {}

    return (
        <View style={{ marginBottom: 30 }}>
            <Pressable>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    title: {
        textAlign: 'center',
        fontSize: 18
    }
})