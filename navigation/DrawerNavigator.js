import { createDrawerNavigator } from '@react-navigation/drawer';
import MealNavigator from './MealStack';
import { useNavigationState, useRoute } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

    return (
        <>
            <Drawer.Navigator screenOptions={{
                headerShown: false
            }}>
                <Drawer.Screen
                    name="DrawerStack"
                    component={MealNavigator}
                    options={{
                        title: 'Meals',
                        headerTitleAlign: 'center',
                    }}
                />
            </Drawer.Navigator>
        </>
    );
}
