import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native'
import React, { useEffect } from 'react'
import { Logo } from '../../assets'



const splashScreen = ( {navigation} ) => {
    useEffect(() => {
        setTimeout(() => {
          handleGetToken()
        },2000);
    })


    const handleGetToken = async () =>{
      const dataToken = await AsyncStorage.getItem('AccessToken')
      if (!dataToken) {
        navigation.replace('landingPage') 
      }else{
        navigation.replace('mainApp') 
      }
    }



  return (
   <View style={styles.container}>
        <Image source={Logo} style={styles.logo}/>
        </View>
  )
}

export default splashScreen

const styles = StyleSheet.create({
    container:{
        marginTop: 300,
        marginLeft: 10,
    },
      logo: {
        justifyContent: 'center',
        alignItems: 'center',
        

    },
})