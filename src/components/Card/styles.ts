import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.grey,
    borderRadius: 10,
    margin: 10,
    width: "90%",
    alignItems: "center",
  },
  msg: {
    textAlign: "left",
  },
  topicos: {
    flexDirection: "row",
  },
  topic: {
    backgroundColor: colors.black,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  }
})

export default styles;