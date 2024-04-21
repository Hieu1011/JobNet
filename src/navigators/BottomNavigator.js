import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../screens/Home/Home'
import Post from '../screens/Post/Post'
import { COLORS } from '../../constants'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
const PostStack = () => {
  return <Stack.Navigator
    initialRouteName="Post"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Post" component={Post} />
  </Stack.Navigator>
}

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      component={HomeStack}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { backgroundColor: COLORS.secondary }
      }}>

      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.black}
            />
          )
        }}
      />

      <Tab.Screen
        name="PostStack"
        component={PostStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={focused ? COLORS.primary : COLORS.black}
            />
          )
        }}
      />
    </Tab.Navigator>

  )
}

export default BottomNavigator
