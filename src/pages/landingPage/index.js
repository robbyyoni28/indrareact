import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native'
import React from 'react'
import { Landingpage, Logo, logoLanding } from '../../assets'



const landingPage = ( { navigation } ) => {
  const onPress = () => navigation.navigate('registerPage');
  const onPresslogin = () => navigation.navigate('loginPage');
  const bodyText = "WELCOME";
  return (

<View style={styles.container}>
      <Image source={ logoLanding } style={ styles.logo }/>
      <Text style={styles.bodyText}>
        {bodyText}
      </Text>
      <Image source={ Landingpage } style={ styles.image } />
      
     
    <View style={styles.containerbutton}>
    <TouchableHighlight
  style={styles.signup}
  onPress={onPress}
  underlayColor='#fff'>
    <Text style={styles.signupText}>Sign Up</Text>
</TouchableHighlight>
    </View>
    <View style={styles.containerbutton}>
    <TouchableHighlight
  style={styles.login}
  onPress={onPresslogin}
  underlayColor='#fff'>
    <Text style={styles.loginText}>Log In</Text>
</TouchableHighlight>
    </View>
      
     
    </View>
 
    
 
  )
}

export default landingPage

const styles = StyleSheet.create({
  logo :{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 150,
    marginTop: 60,

  },
  bodyText:{
    paddingTop: 15,
    fontSize: 60,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
  image:{
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 40,
    width: 300,
  },
  container:{
    flex: 1,
    marginHorizontal: 16,
  },
  containerbutton:{
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    
  },
  signup: {
   
    paddingTop: 13,
    paddingBottom: 10,
    backgroundColor: '#dbb625',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    
  },
  signupText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  login: {
    marginTop:10,
    paddingTop: 13,
    paddingBottom: 10,
    backgroundColor: '#c2c3c5',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    
  },
  loginText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  }
  
})