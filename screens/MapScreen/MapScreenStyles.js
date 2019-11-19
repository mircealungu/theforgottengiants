import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";
import { RFPercentage } from "react-native-responsive-fontsize";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
    alignItems: "center",
    justifyContent: "center"
  },
  containerScroll: {
    flexDirection: "column"
  },
  bottom: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    flex: 2.8
  },
  distanceText: {
    fontSize: RFPercentage(4),
    fontFamily: "amatic-sc",
    marginTop: 12,
    marginBottom: 12,
    fontWeight: "bold",
    alignItems: "center",
  }
});
