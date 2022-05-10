import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";

export default function Buttonlancamentos({ onPress, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      {...rest}
    >
      <Image source={require("../../assets/Lancamentos.png")} />
    </TouchableOpacity>
  );
}