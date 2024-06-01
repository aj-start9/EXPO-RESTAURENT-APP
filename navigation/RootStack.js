import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator'
import Profile from '../screens/ProfileScree';

const Stack = createNativeStackNavigator()

export default function RootStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="DrawerStack"
                    component={DrawerNavigator}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ProfileStack"
                    component={Profile}
                    options={{
                        headerShown: true
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
