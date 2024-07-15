import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from './src/navigation/MainStack';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
   <GestureHandlerRootView>
    <NavigationContainer>
      
      <MainStack/>
    
    </NavigationContainer>
    </GestureHandlerRootView>
    </>

  )
}

export default App

const styles = StyleSheet.create({

})