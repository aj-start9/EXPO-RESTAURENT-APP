import { Image, StyleSheet, Platform } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

export default function HomeScreen() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#351401',
            elevation: 0,
          },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: 'white'
          }
        }}>
          <Stack.Screen
            name="MealCategory"
            component={CategoriesScreen}
            options={{ title: 'Meal Category',
            headerTitleAlign: 'center'
             }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{
              title: 'Meal Overview',
              headerTitleAlign: 'center'
            }}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
