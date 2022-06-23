import { StyleSheet, Text, View, Image, TextInput, Button, TouchableHighlight } from 'react-native'
import React, {useState} from 'react'
import { ScreenContainer } from 'react-native-screens'
import { Logo, logoLanding } from '../../assets'


const registerPage = ({ navigation } ) => {
  const onPressregister = () => navigation.navigate('loginPage');

 

  return (
    
    <View style={styles.container}>
     <Image source={ logoLanding } style={styles.logo} />
     <Text style={ styles.signupText }>
     Sign Up
     </Text>
     
     <TextInput
        style={styles.inputName}
        placeholder="Name"
        keyboardType="text"
      />
      
    
      <TextInput
      
        style={styles.inputDate}
        placeholder="Birth Date (DDMMYY)"
        keyboardType="text"
      />

      <TextInput
      
      style={styles.inputEmail}
      placeholder="Email"
      keyboardType="email-address"
    />

    <TextInput
      
      style={styles.inputNumber}
      placeholder="Mobile Number (Optional)"
      keyboardType="text"
      
    />

    <TextInput
      
      style={styles.inputPassword}
      placeholder="Password"
      keyboardType="text"
      secureTextEntry={true} 
    />
     <View style={styles.containerbutton}>
    <TouchableHighlight
  style={styles.register}
  onPress={onPressregister}
  underlayColor='#fff'>
    <Text style={styles.registerText}>Sign Up</Text>
</TouchableHighlight>
    </View>
    </View>
  )
}

export default registerPage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 16,
  },
  logo:{
    marginLeft: 5,
    marginTop: 30,
  },
  signupText:{
    fontSize: 50,
    paddingTop: 70,
    marginLeft:5,
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 20
  },
  inputName: {
    height: 50,
    margin: 12,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: 'gray',
  },
  inputDate: {
    height: 50,
    margin: 12,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: 'gray',
  },
  inputEmail: {
    height: 50,
    margin: 12,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: 'gray',
  },
  inputNumber: {
    height: 50,
    margin: 12,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: 'gray',
  },
  inputPassword: {
    height: 50,
    margin: 12,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: 'gray',
  },
  register: {
    marginTop:40,
    paddingTop: 13,
    paddingBottom: 10,
    backgroundColor: '#dbb625',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    
  },
  registerText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  }
  
}
)