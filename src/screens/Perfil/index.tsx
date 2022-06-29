import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { LoginTypes } from "../../types/Screen.types";
import { useAuth } from "../../hook/auth";


export default function Perfil({ navigation }: LoginTypes) {
  const { user } = useAuth();
  async function handleSignIn() {
    navigation.navigate("Login");
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }
  function handleMap() {
    navigation.navigate("Map");
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: user?.profile_photo_url }} style={styles.img} />
        <Text style={styles.title}>{user?.name}</Text>
      </View>
      <View style={styles.input}>
        <Button  title="MEUS PEDIDOS" type="black" onPress={handleSignIn} />
        <Button title="ENDEREÇO" type="black" onPress={handleMap} />
        <Button title="PAGAMENTO" type="black" onPress={handleSignIn} />
        <Button title="CONFIGURAÇÕES" type="black" onPress={handleSignIn} />
        <Button title="SAIR" type="grey" onPress={handleLogin} />  
      </View>     
    </View>
  );
}


       
    
