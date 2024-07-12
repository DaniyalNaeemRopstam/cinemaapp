import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CinemaHallListingScreen from './src/screens/CinemaHallListingScreen'
import CinemaHallDetailScreen from './src/screens/CinemaHallDetailScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <>
      {/* <CinemaHallListingScreen /> */}

      <GestureHandlerRootView>
        <CinemaHallDetailScreen />
      </GestureHandlerRootView>
    </>

  )
}

export default App

const styles = StyleSheet.create({

})