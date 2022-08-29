import { StyleSheet, Text, View, Image, Card } from 'react-native'
import React, {useEffect} from 'react'
import { logoBeonWhite } from '../../assets'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'

const homePage = () => {
  const getInfluencer = async() =>{
  var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://165.22.242.149:8080/influencer',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data.userdata));
})
.catch(function (error) {
  console.log(error);
});
}
useEffect(() => {
  getInfluencer()
},[])

  return (
    <View style={styles.container}>
    <View style={styles.box}>
    <Image source={ logoBeonWhite }  style={ styles.logo } />
    <Text style={ styles.influencer }>Influencer</Text>
    <Text style={ styles.marketing }>Marketing</Text>
    <Text style={ styles.platform }>Platform</Text>
    </View>
    <FlatList numColumns={2} ><Card /></FlatList>
    </View>
  )
}

export default homePage

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
})