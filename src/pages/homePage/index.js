import { StyleSheet, Text, View, Image, Card,AsyncStorage, ScrollView, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { logoBeonWhite } from '../../assets'
import axios from 'axios'



const homePage = () => {
  const [nama, namaInfluencer] = useState();
  const [kategori, namaKategori] = useState();
  const [profil, profilInfluencer] = useState();
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
  // console.log(JSON.stringify(response.data.userdata.profil_influencer))

  profilInfluencer(response.data.userdata)
  
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
    
    <FlatList numColumns={2} data={profil} renderItem={({item})=> (
      // <Image  
      // style={{width: 150, height: 150, borderRadius: 150 / 2, overflow: "hidden",  borderWidth: 3,borderColor: "#dbb625"}}
      //     source={{ uri: "http://165.22.242.149:8080/static/uploads/"+item.profilInfluencer }}
      //   />
      <View>
        <Image  
      style={{width: 100, height: 100, overflow: "hidden",  borderWidth: 3,borderColor: "#dbb625"}}
          source={{ uri: "http://165.22.242.149:8080/static/uploads/"+item.profil_influencer }}
        />
        <Text style={styles.item}>{item.nama}</Text>
        {/* <Text style={styles.item}>{item.profil_influencer}</Text> */}

      </View>
    )}/>
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
  item:{
      fontSize: 20,
      textAlign: 'center',
      marginTop: '35%',
      padding: 16,
  },
})