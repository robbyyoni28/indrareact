import { StyleSheet, Text, View, Image, TouchableHighlight, Button, Alert} from 'react-native'
import { logoBeonWhite } from '../../assets'
import React, { useState, useEffect }from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { color } from 'react-native-reanimated';





const profilPage = ({ navigation }) => {
  
  const onpresslogout = () => {
    AsyncStorage.removeItem('AccessToken')
    navigation.replace('loginPage')
  }
  const options={
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    },
  }
 const [profil_user, user_profile] = useState();
 const [nama, namauser] = useState();
 const [no_telpon, no_telponuser] = useState();
 const [tanggal_lahir, lahir_user] = useState();
 const apihandler = async () =>{
  var axios = require('axios');
  const jwt = await AsyncStorage.getItem('AccessToken'); 
  console.log(jwt)
  var config = {
    method: 'get',
    url: 'http://165.22.242.149:8080/user',
    headers: { 
      'Authorization': 'Bearer '+jwt
    }
  };
  axios(config)
  .then(function (response) {
    
    console.log(JSON.stringify(response.data));
    console.log(JSON.stringify(response.data.userdata.profil_user));
    var name_profile = JSON.stringify(response.data.userdata.profil_user)
    user_profile(response.data.userdata.profil_user)
    namauser(response.data.userdata.nama)
    no_telponuser(response.data.userdata.no_telpon)
    lahir_user(response.data.userdata.tanggal_lahir)
    // console.log(user_profile)
  })
 
  }
  useEffect(() => {
    apihandler()
  },[])


  
  // var profil_user =  AsyncStorage.getItem('profil_user')
     
      
  
  // // var profil_user = AsyncStorage.getItem('profil_user'); 
  //   console.log(profil_user)
  
  // var nama_user = nama
  // console.log(nama_user)


  const openGallery=async()=>{
    const images = await launchImageLibrary(options);
    console.log(images.assets[0].uri)
    var axios = require('axios');
      var FormData = require('form-data');
      // var fs = require('fs');
      var data = new FormData();
    data.append('file', {
      uri:images.assets[0].uri,
      type:images.assets[0].type,
      name:images.assets[0].fileName
    });
    const jwt = await AsyncStorage.getItem('AccessToken'); 
    console.log(jwt)
    
    var config = {
      method: 'post',
      url: 'http://165.22.242.149:8080/upload',
      headers: { 
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer '+jwt,
      },
      data : data
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    

  return (
    <View style={styles.container}>
    <View style={styles.box}>
    <Image source={ logoBeonWhite }  style={ styles.logo } />
    <Text style={ styles.influencer }>Influencer</Text>
    <Text style={ styles.marketing }>Marketing</Text>
    <Text style={ styles.platform }>Platform</Text>
    </View>
    
    <View style={styles.profil}>
    <Image  
    style={{width: 150, height: 150, borderRadius: 150 / 2, overflow: "hidden",  borderWidth: 3,borderColor: "#dbb625"}}
        source={{ uri: "http://165.22.242.149:8080/static/uploads/"+profil_user }}
      />
          </View>
          <View style={styles.makss}>
      <Text style={styles.maks}>maks. 500 kb</Text>
      
    </View>
    <View style={styles.buttonupload}>
    <Button title='Upload Image' color="#dbb625" onPress={openGallery} style={styles.upload}></Button>
    </View>
    <View style={styles.nama}>
      <Text style={styles.namauser }>{ nama }</Text>
      
    </View>
    <View style={styles.tanggal}>
    <Text style={styles.tanggal_lahir}>{ tanggal_lahir }</Text>
    </View>
    <View style={styles.notelpon}>
      <Text style={styles.no_telpon}>{ no_telpon }</Text>
    </View>
    <View style={styles.containerbutton}>
    <TouchableHighlight
  style={styles.logoutButton}
  onPress={onpresslogout}
  underlayColor='#fff'>
    <Text style={styles.resetText}>Logout</Text>
</TouchableHighlight>
    </View>
    </View>
    )
}

export default profilPage

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  box: {
    backgroundColor: 'black',
    width: 'auto',
    height: 100,
  },
  Text:{
    color: 'white',
    
  },
  logo:{
    marginLeft: 35,
    marginTop: 35,
  },
  influencer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: 15,
    marginTop: 17,
    paddingRight: 30,


  },
  marketing: {
    position: 'absolute',
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: 15,
    marginTop: 35,
    paddingRight: 29,


  },
  platform: {
    position: 'absolute',
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: 15,
    marginTop: 53,
    paddingRight: 38,


  },
  logoutButton: {
    marginTop: 10,
    paddingTop: 13,
    paddingBottom: 10,
    backgroundColor: '#dbb625',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    
  },
  resetText:{
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  containerbutton: {
    paddingLeft: 100,
    paddingEnd: 100,
  },
  buttonupload: {
    paddingLeft : 120,
    paddingRight: 120,
    paddingTop: 10,
  },
  profil:{
    textAlign: 'center',
    paddingLeft: 120,
    paddingTop: 20,
  },
  nama:{
    borderWidth: 1,
    marginTop: 40,
    margin: 20,
    padding: 10,
    backgroundColor: "white",
    borderColor: 'yellow',
    borderRadius: 20,
  },
  namauser:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textTransform:'uppercase'
  },
  tanggal:{
    borderWidth: 1,
    marginTop: 10,
    margin: 20,
    padding: 10,
    backgroundColor: "white",
    borderColor: 'yellow',
    borderRadius: 20,
  },
  tanggal_lahir:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textTransform:'uppercase'
  },
  notelpon:{
    borderWidth: 1,
    marginTop: 10,
    margin: 20,
    padding: 10,
    backgroundColor: "white",
    borderColor: 'yellow',
    borderRadius: 20,
  },
  no_telpon:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    textTransform:'uppercase'
  },
  maks:{
    textAlign: 'center',
    fontSize: 10,
  },
  makss:{
    
  },


})