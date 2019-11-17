import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    marginTop: 15,
    textAlign: "justify",
    fontFamily: "amatic-sc"
  },
  container: {
    flex: 1,
    backgroundColor: Colors.green,
    alignItems: "center",
    justifyContent: "center"
  },
  h1: {
    fontSize: 50,
    fontFamily: "amatic-sc"
  }
});

export default styles;