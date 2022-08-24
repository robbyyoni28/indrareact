import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import { landingPage, loginPage, splashScreen, registerPage,forgotPassword, homePage, kategoriPage, profilPage } from '../pages';
import { HomeActivate, HomeDeactivate } from '../assets/icons';
import { NavigationContainer } from '@react-navigation/native';




const Stack = createNativeStackNavigator();


const mainApp = () => {
  const Tab = createBottomTabNavigator();
  
  return(
    
    <Tab.Navigator screenOptions={{ headerShown: false,tabBarActiveBackgroundColor:'yellow' ,tabBarInactiveBackgroundColor: 'gray',tabBarStyle: { position: 'absolute', borderWidth: 0.5,
    borderBottomWidth: 1,
    height: 65,
    backgroundColor:'orange',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderColor: 'transparent',
    overflow: 'hidden', },  }} 
    tabBarOptions={{
      activeTintColor: 'yellow',
      inactiveTintColor: 'white',
    }}
   
    
    >
    <Tab.Screen
        name="Home"
        component={homePage}
        options={{
            tabBarIcon: () => (<Image source={require("./../assets/icons/homeActivate.png")} style={{width: 40, height: 40}} />)
            
        }} 

         />
         
    <Tab.Screen 
        name="Kategori" 
        component={kategoriPage}
        options={{
            tabBarIcon: () => 
            (<Image source={require("./../assets/icons/kategoriActivate.png")} style={{width: 40, height: 40}} />)
        }}
    />
    <Tab.Screen 
        name="Profil" 
        component={profilPage}
        options={{
            tabBarIcon: () => 
            (<Image source={require("./../assets/icons/profilActivate.png")} style={{width: 40, height: 40}} />)
        }}
    />
</Tab.Navigator>
    
  )

}

const router = () => {
  return (
    
    <Stack.Navigator initialRouteName='splashScreen'>
        <Stack.Screen name='landingPage' component={landingPage} options={{headerShown:false}} />
        <Stack.Screen name='splashScreen' component={splashScreen} options={{headerShown:false}} />
        <Stack.Screen name='loginPage' component={loginPage} options={{headerShown:false}} />
        <Stack.Screen name='registerPage' component={registerPage} options={{headerShown:false}}/>
        <Stack.Screen name='forgotPasswordPage' component={forgotPassword} options={{headerShown:false}}/>
        <Stack.Screen name='mainApp' component={mainApp}  options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default router

const styles = StyleSheet.create({})