import {StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { logoBeonWhite } from '../../assets'

const kategoriPage = () => {
  return (
    <View style={styles.container}>
    <View style={styles.box}>
    <Image source={ logoBeonWhite }  style={ styles.logo } />
    <Text style={ styles.influencer }>Influencer</Text>
    <Text style={ styles.marketing }>Marketing</Text>
    <Text style={ styles.platform }>Platform</Text>
    </View>
    </View>
  )
}

export default kategoriPage
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