import { StyleSheet, Text, View, Image, TextInput,  TouchableHighlight } from 'react-native'
import React, {useState, useEffect} from 'react'
import { ScreenContainer } from 'react-native-screens'
import { Logo, logoLanding } from '../../assets'
import axios from 'axios'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



const registerPage = ({ navigation } ) => {
  // const onPressregister = () => navigation.navigate('loginPage');
  const [name, setName] = useState("")
  const [birth, setBirth] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    const authenticate = async() => {
      var axios = require('axios');
      var data = JSON.stringify({
        "nama": name,
        "tanggal_lahir": birth,
        "email": email,
        "no_telpon": phone,
        "password": password
      });
      
      var config = {
        method: 'post',
        url: 'http://165.22.242.149:8080/add',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigation.navigate('loginPage');
         
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    if (isSubmit) authenticate()
      
    }, [isSubmit])
    
    const nameHandler = (text) => {
      setName(text)
    }



 

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
        onChangeText={nameHandler} 
      />
      
    
      <TextInput
      
        style={styles.inputDate}
        placeholder="Birth Date (DDMMYY)"
        keyboardType="text"
        onChangeText={(text) => setBirth(text)} 
      />

      <TextInput
      
      style={styles.inputEmail}
      placeholder="Email"
      keyboardType="email-address"
      onChangeText={(text) => setEmail(text)}
    />

    <TextInput
      
      style={styles.inputNumber}
      placeholder="Mobile Number (Optional)"
      keyboardType="text"
      onChangeText={(text) => setPhone(text)} 
      
    />

    <TextInput
      
      style={styles.inputPassword}
      placeholder="Password"
      keyboardType="text"
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)} 
    />
    
     <View style={styles.containerbutton}>
    <TouchableHighlight
  style={styles.register}
  onPress={() => setIsSubmit(true)}
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
    marginTop:20,
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
  },
 
  upload: {
    borderRadius: 20,
    backgroundColor : 'yellow'
  }
  
}
)