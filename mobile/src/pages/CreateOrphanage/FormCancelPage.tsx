import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";

import { Feather } from '@expo/vector-icons';

export default function FormCancelPage() {

  const navigation = useNavigation();

  function handleClickNoButton() {
    navigation.goBack();
  }

  function handleClickYesButton() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconBackgorund}>
        <Feather name="x" size={50} color="#FF669D" />
      </View>
      <Text style={styles.title}>
        Cancelar cadastro
      </Text>
      <Text style={styles.subtitle}>
      Tem certeza que quer cancelar esse cadastro?
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton style={styles.yesButton} onPress={handleClickYesButton}>
          <Text style={styles.yesButtonText}>Sim</Text>
        </RectButton>
        <TouchableOpacity style={styles.noButton} onPress={handleClickNoButton}>
          <Text style={styles.noButtonText}>Não</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#FF669D",
    padding: 30,
    justifyContent: "center",
  },

  iconBackgorund: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },

  title: {
    fontFamily: 'Nunito_700Bold',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 35,
    marginBottom: 20,
  },

  subtitle: {
    fontFamily: 'Nunito_600SemiBold',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 20,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  yesButton: {
    backgroundColor: '#D6487B',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    width: 140,
    alignSelf: 'center',
    marginTop: 20,
  },

  yesButtonText: {
    fontFamily: 'Nunito_700Bold',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
  },

  noButton: {
    position: 'relative',
    width: 140,
    borderWidth: 2,
    borderColor: '#D6487B',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
  },

  noButtonText: {
    fontFamily: 'Nunito_700Bold',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
  }
});
