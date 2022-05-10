import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";


export default function Buttonvendas({ onPress, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      {...rest}
    >
      <Image source={require("../../assets/Prevenda.png")} />
    </TouchableOpacity>
  );
}