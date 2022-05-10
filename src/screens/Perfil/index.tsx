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
        <Button  title="MEUS PEDIDOS" type="black" onPress={handleSignIn} />
        <Button title="ENDEREÇO" type="black" onPress={handleSignIn} />
        <Button title="PAGAMENTO" type="black" onPress={handleSignIn} />
        <Button title="CONFIGURAÇÕES" type="black" onPress={handleSignIn} />
        <Button title="SAIR" type="grey" onPress={handleLogin} />  
      </View>     
    </View>
  );
}


       
    
