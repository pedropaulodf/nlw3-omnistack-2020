import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import earthImg from '../../images/onb-earth.png';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingOne() {

  const navigation = useNavigation();

  function handleClickToNextOnboardingPage(){
    navigation.navigate('OnboardingTwo');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.heroImage} source={earthImg}/>

        <Text style={styles.bigText}>Leve felicidade para o mundo</Text>
        <Text style={styles.smallText}>Visite orfanatos e mude o dia de muitas crianças.</Text>

        <View style={styles.bottomSection}>
          <View>
            {/* <Text>--</Text> */}
          </View>
          <RectButton style={styles.nextOnboardingPage} onPress={handleClickToNextOnboardingPage}>
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
    marginBottom: 0,
    marginBottom: 0,
    // marginTop: 60,
    resizeMode: 'contain',
    width: '80%',
  },

  bigText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089A5',
    fontSize: 45,
    width: '80%',
    lineHeight: 45,
    marginBottom: 10,
  },
  
  smallText: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#5C8599',
    fontSize: 20,
    lineHeight: 20,

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