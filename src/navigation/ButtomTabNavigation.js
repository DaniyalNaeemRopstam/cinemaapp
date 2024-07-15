// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import StackNavigator from './StackNavigator'; // Import the StackNavigator
import CinemaHallDetailScreen from '../screens/CinemaHallDetailScreen';
import CinemaHallListingScreen from '../screens/CinemaHallListingScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import colors from '../assets/config/colors';
import { HP } from '../assets/config/space';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
 
      barStyle={{ backgroundColor: '##2E2739' }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2E2739',
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          padding: 10,
        },
        tabBarActiveTintColor:colors.white
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator} // Use the StackNavigator here
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Watch"
        component={CinemaHallListingScreen}
        options={{
          tabBarLabel: 'Watch',
          tabBarIcon: ({ color }) => <Icon name="youtube-play" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Media Library"
        component={CinemaHallDetailScreen}
        options={{
          tabBarLabel: 'Media Library',
          tabBarIcon: ({ color }) => <Icon name="copy" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={CinemaHallDetailScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({ color }) => <Icon name="list-ul" color={color} size={26} />,
        }}
      />


    </Tab.Navigator>
  );
};
