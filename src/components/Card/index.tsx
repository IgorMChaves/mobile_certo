import React from "react";
import { Text, View, Image } from "react-native";
import { CardProps } from "../../interfaces/Card.interface";
import styles from "./styles";

export default function Card({ data }: CardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.image}>
        <Image source={require("../../assets/Lancamentos.png")} />
        <Image source={require("../../assets/Prevenda.png")} />
        <Image source={require("../../assets/Vendidos.png")} />
      </View>
    </View>
  );
}
