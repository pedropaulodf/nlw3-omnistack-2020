import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import cursorHandImg from '../images/cursor-hand.png';
import backgroundMapImg from '../images/background-map.png';

export default function InstructionsClickMap() {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundMapImg} style={styles.backgroundImg}>

        <Image source={cursorHandImg} style={styles.handClick}></Image>
        <Text style={styles.instructionText}>Toque no mapa para adicionar um Orfanato</Text>
        <RectButton style={styles.okButton} onPress={() => navigation.navigate('SelectMapPosition')}>
          <Text style={styles.okButtonText}>Entendi!</Text>
        </RectButton>

      </ImageBackground>
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

  backgroundImg: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: 'center',
    alignItems: 'center',
  },

  handClick: {
    width: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  instructionText: {
    width: '90%',
    fontFamily: 'Nunito_700Bold',
    color: "#ffffff",
    fontSize: 27,
    lineHeight: 37,
    textAlign: 'center',
  },

  okButton: {
    backgroundColor: '#FFD152',
    paddingHorizontal: 26,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 15,
  },

  okButtonText: {
    color: '#ffffff',
    fontSize: 25,
    letterSpacing: 0.4,
  }
});