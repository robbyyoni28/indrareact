import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { forgot, logoLanding } from '../../assets'
import { Component } from 'react/cjs/react.production.min';

const forgotPassword = ({ navigation }) => {
    const onPressregister = () => navigation.navigate('loginPage');


  return (
    <View style={styles.container}>
     <Image source={ logoLanding } style={styles.logo} />
     <Text style={ styles.reset }>
     Reset
     </Text>
     <Text style={ styles.password }>
     Password
     </Text>
     <Text style={ styles.send }>
     We just need your registered Email id to 
     </Text>
     <Text style={ styles.send }>
     send you password reset instructions 
     </Text>
     <Image source={ forgot } style={ styles.forgot }/>
     <View style={styles.containerbutton}>
    <TouchableHighlight
  style={styles.resetPassword}
  onPress={onPressregister}
  underlayColor='#fff'>
    <Text style={styles.resetText}>Reset Password</Text>
</TouchableHighlight>
    </View>
     </View>
  )
}


export default forgotPassword

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginHorizontal: 16,
      },
      logo:{
        marginLeft: 5,
        marginTop: 30,
      },
      reset:{
        paddingTop : 70,
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
      },
      password:{
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
      },
      forgot:{
        marginLeft: 20,

      },
      resetPassword: {
        marginTop:40,
        paddingTop: 13,
        paddingBottom: 10,
        backgroundColor: '#dbb625',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#fff',
        height: 50,
        
      },
      resetText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
      },
})