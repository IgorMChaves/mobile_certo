import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import styles from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { LoginTypes } from "../../types/Screen.types";
import Buttonlancamentos from "../../components/Button.lancamentos";
import Buttonvendas from "../../components/Button.venda";
import Buttonvendidos from "../../components/Button.vendidos";


export default function Perfil({ navigation }: LoginTypes) {
  async function handleSignIn() {
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowSearch}>
          <FontAwesome5 name="search" style={styles.icon} />
          <TextInput placeholder="  Pesquisar" />
        </View>
        <Text style={styles.title}>DESCUBRA</Text>
        <View style={styles.button}>
          <Buttonlancamentos  title="LANÇAMENTOS" type="black" onPress={handleSignIn} />
          <Buttonvendas title="PRÉ-VENDA" type="black" onPress={handleSignIn} />
          <Buttonvendidos title="+VENDIDOS" type="black" onPress={handleSignIn} />  
        </View>

    </View>      
    );
}