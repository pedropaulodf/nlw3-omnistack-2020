import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import earthImg from '../images/onb-earth.png';
import childrensImg from '../images/childrens.png';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';

// const completeOnboarding = async () => {
//   const navigation = useNavigation();
//   await AsyncStorage.setItem('hasOnboarded', JSON.stringify({
//     hasOnboarded: true,
//   }));
//   navigation.navigate('OrphanagesMap');
// }
    
const Dot = ({ selected }: any) => (
  <View
      style={selected ? [styles.dot, styles.dotSelected] : [styles.dot, styles.dotUnselected]}
    />
);
 
const Done = ({ ...props }) => (
  <RectButton style={styles.nextOnboardingPage} {...props}>
    <Feather name="arrow-right" size={22} color="#15B6D6" />
  </RectButton>
);

const Next = ({ ...props }) => (
  <RectButton style={styles.nextOnboardingPage} {...props}>
    <Feather name="arrow-right" size={22} color="#15B6D6" />
  </RectButton>
);

const Simple = ({navigation}: any) => (
  <Onboarding
    DoneButtonComponent={Done}
    NextButtonComponent={Next}
    DotComponent={Dot}
    controlStatusBar={false} 
    bottomBarColor=""
    bottomBarHighlight={0}
    onDone={() => navigation.navigate('OrphanagesMap')}
    onSkip={() => navigation.navigate('OrphanagesMap')}
    nextLabel="Próximo"
    skipLabel="Pular"
    bottomBarHeight={50}
    containerStyles={styles.container}
    imageContainerStyles={styles.heroImagePageOne}
    showDone={true}
    showSkip={false}
    pages={[
      {
        backgroundColor: '#F2F3F5',
        image: <Image source={earthImg} style={styles.heroImagePageOne}/>,
        title: 'Leve felicidade para o mundo',
        subtitle: 'Visite orfanatos e mude o dia de muitas crianças.',
        titleStyles: {
          fontFamily: 'Nunito_700Bold',
          color: '#0089A5',
          textAlign: 'left',
          fontSize: 45,
          lineHeight: 45,
          marginBottom: 0,
        },
        subTitleStyles: {
          fontFamily: 'Nunito_600SemiBold',
          color: '#5C8599',
          textAlign: 'left',
          fontSize: 20,
          lineHeight: 20,
          marginTop: -10,
        }
      },
      {
        backgroundColor: '#F2F3F5',
        image: <Image source={childrensImg}  style={styles.heroImagePageTwo}/>,
        title: 'Escolha um orfanato no mapa e faça uma visita',
        subtitle: '',
        titleStyles: {
          fontFamily: 'Nunito_700Bold',
          color: '#0089A5',
          textAlign: 'right',
          fontSize: 30,
          lineHeight: 30,
          marginBottom: -30,
          marginTop: 10,
        }
      },
    ]}
  />
); 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F5',
    padding: 30,
    justifyContent: 'center',
  },
  
  heroImagePageOne: {
    width: '80%',
    resizeMode: 'contain',
    marginTop: -20,
    marginBottom: -30,
  },

  heroImagePageTwo: {
    width: '100%',
    height: '100%',
    marginLeft: -50,
    marginTop: 0,
    marginBottom: -200,
    resizeMode: 'contain',
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
    right: 20,
    bottom: 20,
  },
  
  dot:{
    height: 6,
    marginHorizontal: 3,
    borderRadius: 20,
    left: -122,
  },

  dotSelected:{
    backgroundColor: '#FFD152',
    width: 16,
  },

  dotUnselected:{
    backgroundColor: '#BECFD8',
    width: 12,
  },

});


export default Simple;