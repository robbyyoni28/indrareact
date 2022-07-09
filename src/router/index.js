import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { landingPage, loginPage, splashScreen, registerPage,forgotPassword } from '../pages';
import homePage from '../pages/homePage';

const Stack = createNativeStackNavigator();

const router = () => {
  return (
    <Stack.Navigator initialRouteName='splashScreen'>
        <Stack.Screen name='landingPage' component={landingPage} options={{headerShown:false}} />
        <Stack.Screen name='splashScreen' component={splashScreen} options={{headerShown:false}} />
        <Stack.Screen name='loginPage' component={loginPage} options={{headerShown:false}} />
        <Stack.Screen name='registerPage' component={registerPage} options={{headerShown:false}}/>
        <Stack.Screen name='forgotPasswordPage' component={forgotPassword} options={{headerShown:false}}/>
        <Stack.Screen name='homePage' component={homePage} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default router

const styles = StyleSheet.create({})