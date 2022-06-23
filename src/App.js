import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './router';




const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background:'white'
  },
};

const App = () => {
  return (
   <NavigationContainer theme={MyTheme}>
      <Router />
      
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
 
})