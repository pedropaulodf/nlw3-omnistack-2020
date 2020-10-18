import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import childrensImg from '../../images/childrens.png';

import { useNavigation } from '@react-navigation/native';

export default function OnboardingTwo() {

  const navigation = useNavigation();

  function handleClickToOrphanagesMap(){
    navigation.navigate('OrphanagesMap');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.heroImage} source={childrensImg}/>

        <Text style={styles.bigText}>Escolha um orfanato no mapa e faça uma visita</Text>

        <View style={styles.bottomSection}>
          <View>
            {/* <Text>--</Text> */}
          </View>
          <RectButton style={styles.nextOnboardingPage} onPress={handleClickToOrphanagesMap}>
            <Feather name="arrow-right" size={22} color="#15B6D6" />
          </RectButton>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F5',
    width: '100%',
    height: '100%',
    padding: 30,
    
    justifyContent: 'center',
  },

  heroImage: {
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
    // marginTop: 60,
    resizeMode: 'contain',
    width: 300,
  },

  bigText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089A5',
    fontSize: 32,
    lineHeight: 32,
    textAlign: 'right',
    paddingTop: 10,
    paddingBottom: 20,
  },

  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  nextOnboardingPage: {

    width: 56,
    height: 56,
    backgroundColor: '#D1EDF2',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});