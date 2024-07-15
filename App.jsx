import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { MyTabs } from './src/navigation/ButtomTabNavigation';

const App = () => {
  return (
    <>
   <GestureHandlerRootView>
    <NavigationContainer>
    <MyTabs/>
    </NavigationContainer>
    </GestureHandlerRootView>
    </>

  )
}

export default App

const styles = StyleSheet.create({

})