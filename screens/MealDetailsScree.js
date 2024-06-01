import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

import { MEALS } from "../data/dumy-data"
import IconButton from "../components/IconButton"

const MealDetailsScreen = () => {

    const route = useRoute()
    const navigation = useNavigation()
    const mealId = route.params.data?.id


    const selelctedMeal = MEALS.find(itm => itm.id === mealId)

    useEffect(() => {
        navigation.setOptions({
            title: route.params.data?.title,
        })
    }, [])

    return (
        <View style={{ flex: 1, width: '100%', padding: 10 }}>
            <Image style={styles.image} source={{ uri: selelctedMeal?.imageUrl }} />
            <Text>
                This is Meal Details Screen
            </Text>
            <Text></Text>
            <View>
                {selelctedMeal?.ingredients?.map(itm => {
                    return <Text>{itm}</Text>
                })}
            </View>
        </View>
    )
}


export default MealDetailsScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    }
})