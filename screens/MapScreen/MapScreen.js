import React from "react";
import { View, Text, ScrollView } from "react-native";
import MapView from "react-native-maps";
import { YellowButton } from "../../components/Buttons/YellowButton";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { getDistance } from "geolib";
import styles from "./MapScreenStyles";
import Colors from "../../constants/colors";
import monthNames from "../../constants/monthNames";

export default class MapScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.green
      }
    };
  };

  constructor(props) {
    super(props);
    const interval = null;
    const region = this.props.navigation.getParam("region");
    this.getUserPosition = this.getUserPosition.bind(this);
    this.getTime = this.getTime.bind(this);
    this.getOrdinalNum = this.getOrdinalNum.bind(this);
    this.state = {
      distance: 0,
      userLatitude: 0,
      userLongitude: 0,
      giantLatitude: region.latitude,
      giantLongitude: region.longitude,
      giantName: this.props.navigation.getParam("name"),
      giantDesc: this.props.navigation.getParam("desc"),
      giantId: this.props.navigation.getParam("id"),
      date: ""
    };
  }

  componentDidMount() {
    this.getUserPosition();
    interval = setInterval(() => this.getUserPosition(), 3000);
  }

  getUserPosition() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        this.setState({ userLatitude, userLongitude });
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    let dis = getDistance(
      {
        latitude: this.state.giantLatitude,
        longitude: this.state.giantLongitude
      },
      {
        latitude: this.state.userLatitude,
        longitude: this.state.userLongitude
      }
    );
    this.setState({ distance: dis });

    if (this.state.distance < 200 && this.state.distance !== 0) {
      this.getTime();
      this.props.navigation.navigate("RewardScreen", {
        name: this.state.giantName,
        desc: this.state.giantDesc,
        giantId: this.state.giantId,
        date: this.state.date
      });
      clearInterval(interval);
    }
  }

  getTime() {
    const now =
      this.getOrdinalNum(new Date().getDate()) +
      " OF " +
      monthNames[new Date().getMonth()] +
      " at " +
      new Date().getHours() +
      ":" +
      new Date().getMinutes();

    this.setState({
      date: now
    });
  }

  getOrdinalNum(n) {
    return (
      n +
      (n > 0
        ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
        : "")
    );
  }
  render() {
    const { navigation } = this.props;
    const { distance } = this.state;
    const name = navigation.getParam("name");
    const km = distance / 1000;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={this.state.region}
          showsUserLocation={true}
          followUserLocation={true}
          initialRegion={navigation.getParam("region")}
          showsUserLocation={true}
        >
          <MapView.Circle
            center={navigation.getParam("region")}
            showUserLocation={true}
            radius={275}
            strokeWidth={4}
            strokeColor={Colors.strokeColorCircle}
            fillColor={Colors.fillColorCircle}
          />
        </MapView>
        <View style={styles.bottom}>
          <ScrollView style={styles.containerScroll}>
            <Text style={styles.distanceText}>
              You are{" "}
              {distance > 1000 ? km.toFixed(1) + " km " : distance + "m "}away
              from {name}
            </Text>
            <YellowButton
              btnText="How to get there?"
              onPress={() => this.props.navigation.navigate("PracticalInfo")}
            ></YellowButton>
          </ScrollView>
        </View>
      </View>
    );
  }
}
