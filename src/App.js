import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './router';




const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background:'white'
  },
};

const App = () => {
  const getItemInfluencer = () => {
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
    <FlatList numColumns={2} data={profil} renderItem={renderItem}
      // <Image  
      // style={{width: 150, height: 150, borderRadius: 150 / 2, overflow: "hidden",  borderWidth: 3,borderColor: "#dbb625"}}
      //     source={{ uri: "http://165.22.242.149:8080/static/uploads/"+item.profilInfluencer }}
      //   />
      // <Text style={styles.item}>{item.nama}</Text>
    />
   )
  }
  const renderItem = ({item}) => {
    return(
      <View>
        <Text>{item.nama}</Text>
      </View>
    )
  }
 

  return (
    
   <NavigationContainer theme={MyTheme}>
      <Router />
      
    </NavigationContainer>
    
    
  )
}




export default App

const styles = StyleSheet.create({
 
})