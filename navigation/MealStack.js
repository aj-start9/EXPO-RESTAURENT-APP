import { createStackNavigator } from '@react-navigation/stack';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import CategoriesScreen from './../screens/CategoriesScreen'
import MealDetailsScreen from './../screens/MealDetailsScree'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../components/IconButton';


const Stack = createStackNavigator();

export default function MealNavigator() {
    const navigation = useNavigation()
    return (
        <>
            <Stack.Navigator screenOptions={{
                headerTitleAlign: 'center',
            }}>
                <Stack.Screen
                    name="MealCategory"
                    component={CategoriesScreen}
                    options={{
                        title: 'Meal Category',
                        headerLeft: () =>
                            <View style={{ marginLeft: 20 }}>
                                <Pressable onPress={() => navigation.openDrawer()}>
                                    <Ionicons name="menu" size={24} color={'black'} />
                                </Pressable>
                            </View>
                    }}
                />
                <Stack.Screen
                    name="MealsOverview"
                    component={MealsOverviewScreen}
                    options={{
                        title: 'Meal Overview',
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen
                    name="MealsDetailsScreen"
                    component={MealDetailsScreen}
                    options={{
                        title: 'Meal Details',
                        headerTitleAlign: 'center',
                        headerRight: () => <View style={{ marginRight: 10 }}><IconButton /></View>,
                    }}
                />
            </Stack.Navigator>
        </>
    );
}
