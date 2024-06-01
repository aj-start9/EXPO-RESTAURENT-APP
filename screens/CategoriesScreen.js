import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dumy-data";
import GridTile from "../components/CategoryGridTile";


function CategoriesScreen({ navigation }) {

    function renderCategoryItem({ item }) {

        function onPressHandle() {
            navigation.navigate('MealsOverview', { categoryId: item.id, isHideHeader: false })
        }

        return <GridTile title={item.title} color={item.color} onPress={onPressHandle} />
    }
    
    return <FlatList
        data={CATEGORIES} keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        key={'h'}
    ></FlatList>
}

export default CategoriesScreen

