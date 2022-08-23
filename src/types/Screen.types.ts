import { StackNavigationProp } from "@react-navigation/stack";
import { type } from "os";

// Login Stack
export type LoginStackParamList = {
  Login: undefined;
  Cadastrar: undefined;
  Tab: undefined;
  Map: undefined;
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

export type ChatStackParamList = {
  Chat: undefined
  EnviarMensagem: undefined
}

type ChatScreenNavigationProp = StackNavigationProp<ChatStackParamList, 'Chat'>
export type ChatTypes = {
  navigation: ChatScreenNavigationProp
}