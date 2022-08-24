import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, AsyncStorage} from 'react-native'
import React, { useState } from 'react'
import { logoLanding } from '../../assets'
import { RadioButton } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';


const loginPage = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const forgotPassword = () => navigation.navigate('forgotPasswordPage');
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const onPressLogin = () => {
    var axios = require('axios');
    var data = JSON.stringify({
      "email": email,
      "password": password
    });
    
    var config = {
      method: 'post',
      url: 'http://165.22.242.149:8080/login',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      AsyncStorage.setItem("AccessToken", response.data.access_token)
      AsyncStorage.setItem("profil_user", response.data.userdata.profil_user)
      navigation.replace('mainApp')
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  return (
    <View style={styles.container}>
     <Image source={ logoLanding } style={styles.logo} />
     <Text style={ styles.welcome }>
     Welcome
     </Text>
     <Text style={ styles.back }>
     Back
     </Text>
     <TextInput
        style={styles.inputEmail}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.inputPassword}
        placeholder="Password"
        keyboardType="password"
        secureTextEntry={true} 
        onChangeText={(text) => setPassword(text)} 
      />
     <View style={styles.checkboxContainer}>

     <RadioButton
        onValueChange = {setChecked}
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')}
        style={styles.radioButton}
      />
       <Text style={styles.label}>Remember Me</Text>
      </View>
      <View style={styles.containerbutton}>
    <TouchableHighlight
  style={styles.Login}
  onPress={onPressLogin}
  underlayColor='#fff'>
    <Text style={styles.loginText}>Login In</Text>
</TouchableHighlight>
    </View>
    <TouchableHighlight onPress={forgotPassword} style={styles.forgotPassword}>
      <Text style={styles.forgotPasswordText}>
        Forgot Password ?
      </Text>
    </TouchableHighlight>

    </View>
  )
}

export default loginPage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 16,
  },
  logo:{
    marginLeft: 5,
    marginTop: 30,
  },
  welcome:{
    fontSize: 40,
    paddingTop: 70,
    marginLeft:10,
    color: 'black',
    fontWeight: 'bold',
    
  },
  back:{
    fontSize: 40,
    marginLeft:10,
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 20
  },
  inputEmail: {
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
  checkboxContainer: {
    flexDirection: "row",
    paddingLeft: 5,
  },
  radioButton:{
    alignSelf: "center",
  },
  label:{
    margin: 8
  },
  Login: {
    marginTop:40,
    paddingTop: 13,
    paddingBottom: 10,
    backgroundColor: '#dbb625',
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
  },
  forgotPasswordText:{
    color: 'black',
    textAlign: 'center'
  },
  forgotPassword:{
    paddingTop: 10,
    backgroundColor: 'white'
  }

})