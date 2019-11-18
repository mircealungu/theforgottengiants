import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  img: {
    width: "100%",
    height: 363
  },
  text: {
    textAlign: "justify",
    fontSize: 18
  },
  textContainer: {
    flex: 2,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 25,
    lineHeight: 25
  },
  customBtnText: {
    fontSize: 35,
    fontWeight: "200",
    fontFamily: "amatic-sc",
    color: "black",
    textAlign: "center"
  },
  customBtnBG: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#D48104",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
});

export default styles;