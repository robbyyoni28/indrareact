import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Logo } from '../../assets'



const splashScreen = ( {navigation} ) => {
    useEffect(() => {
        setTimeout(() => {
           navigation.replace('landingPage') 
        },2000);
    })


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