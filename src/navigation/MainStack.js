import { StyleSheet, Text, View } from 'react-native'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyTabs } from './ButtomTabNavigation';
import MovieDetailScreen from '../screens/MovieDetailScreen';


const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="TabScreens" component={MyTabs} options={{ headerShown: false, title: 'Movie Detail' }} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} options={{ headerShown: false, title: 'Movie Detail' }} />
    </Stack.Navigator>
  )
}

export default MainStack
