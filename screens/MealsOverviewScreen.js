import { MEALS } from "../data/dumy-data"
import { View, Text, StyleSheet, FlatList } from "react-native"
import MealItem from './../components/mealItem';
import { useNavigation } from "@react-navigation/native";

function MealsOverviewScreen({ route }) {

    const catId = route.params.categoryId


    const navigation = useNavigation()

    const dispalyMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })
    
    navigation.setOptions({
        headerTitleStyle: { alignSelf: 'center' }
    })

    function renderMealItem(mealItem) {
        return (
            <MealItem data = {mealItem.item}/>
        )
    }

    return <View style={styles.container}>
        <FlatList data={dispalyMeals} keyExtractor={(item) => item.id}
            renderItem={renderMealItem}>
        </FlatList>
    </View>
}

export default MealsOverviewScreen


const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1
    }
})