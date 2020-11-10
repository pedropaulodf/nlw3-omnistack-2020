import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import imgFormSuccess from "../../images/success_page.png";

export default function FormSuccessPage() {

  const navigation = useNavigation();

  function handleClickOnButton() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <Image source={imgFormSuccess} style={styles.heroImagePageOne} />
      <Text style={styles.title}>
        Ebaaa!
      </Text>
      <Text style={styles.subtitle}>
        O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)
      </Text>
      <RectButton style={styles.okButton} onPress={handleClickOnButton}>
        <Text style={styles.okButtonText}>Ok</Text>
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#39CC83",
    padding: 30,
    justifyContent: "center",
  },

  heroImagePageOne: {
    width: "70%",
    resizeMode: "contain",
    marginBottom: -30,
    alignSelf: 'center',
  },

  title: {
    fontFamily: 'Nunito_700Bold',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 45,

  },

  subtitle: {
    fontFamily: 'Nunito_600SemiBold',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,

  },

  okButton: {
    backgroundColor: '#19C06D',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
  },

  okButtonText: {
    fontFamily: 'Nunito_700Bold',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
  }
});
