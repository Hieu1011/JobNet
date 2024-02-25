import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import Welcome from '../screens/Welcome/Welcome';
import Splash from '../screens/Splash/Splash';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'
    screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animation: 'slide_from_right'
    }}
    >
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>

        <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  )
}

export default RootNavigation

const styles = StyleSheet.create({})