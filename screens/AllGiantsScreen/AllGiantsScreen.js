import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Giant from "../../components/Giant/Giant";
import styles from "./AllGiantsStyles";
import * as Font from "expo-font";
import giants from "../../data/giants";

class AllGiantsScreen extends React.Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null
  };

  async componentDidMount() {
    await Font.loadAsync({
      "amatic-sc": require("../../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../../assets/fonts/Satisfy-Regular.ttf")
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    return (
      <ScrollView style={styles.containerScroll}>

      <View style={styles.container}>
          <Text style={styles.giantText}>GO FIND A GIANT</Text>

          {giants.map(giant => (
            <TouchableOpacity
              key={giant.id}
              onPress={() =>
                this.props.navigation.navigate("MapScreen", {
                  id: giant.id,
                  name: giant.name,
                  location: giant.location,
                  image: giant.image,
                  desc: giant.desc,
                  address: giant.address,
                  transport: giant.transport,
                  region: giant.region
                })
              }
            >
              <Giant
                style={styles.giant}
                name={giant.name}
                location={giant.location}
                image={giant.image}
                key={giant.id}
              />
            </TouchableOpacity>
          ))}
        
      </View>
      </ScrollView>
    );
  }
}

export default AllGiantsScreen;
