import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { RFPercentage } from "react-native-responsive-fontsize"
import Colors from "../../constants/colors"
import Fonts from "../../constants/fonts"

const styles = StyleSheet.create({
  rewardBig: {
    width: wp("45%"),
    height: hp("20%"),
    marginTop: "50%",
    marginLeft: "50%",
    resizeMode: "cover",
    borderRadius: 20

  },
  rewardSmall: {
    width: wp("20%"),
    height: hp("10%"),
    marginTop: "3%",
    marginLeft: "73%",
    resizeMode: "cover",
    borderRadius: 20
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.green
  },
  rewardTextStyle: {
    color: Colors.black,
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(5),
    textAlign: "center"
  },
  rewardImage: {
    marginTop: 35,
    marginBottom: 5,
    height: hp("25%"),
    width: wp("60%"),
    resizeMode: "cover",
    borderRadius: 20
  },
  directionColumn: {
    flexDirection: "column"
  }
})

export default styles