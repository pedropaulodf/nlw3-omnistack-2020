import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, View } from 'react-native'

import logoHappyAnimatedGif from '../images/happy_animated_gif.png';

export default function LandingAnimated() {

  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('OrphanagesMap');
  }, 2000)
  
  return (
    <View style={styles.container}>
      <Image source={logoHappyAnimatedGif} style={styles.happyAnimated}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2AB5D1',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  happyAnimated: {
    width: 200,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});