import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { LoginTypes } from "../../types/Screen.types";

export default function Perfil({ navigation }: LoginTypes) {
  async function handleSignIn() {
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../../assets/Igor.png")} />
      </View>
      <Text style={styles.title}>N O M E</Text>
      <View style={styles.input}>
        <Button title="LOCALIZAÇÃO" type="black" onPress={handleSignIn} />
        <Button title="DADOS" type="black" onPress={handleSignIn} />
        <Button title="PUBLICAR" type="black" onPress={handleSignIn} />
        <Button title="VOLTAR" type="grey" onPress={handleLogin} />  
      </View>     
    </View>
  );
}


       
    
