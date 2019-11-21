import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Giant from "../../components/Giant/Giant";
import Styles from "./AllGiantsStyles";
import giants from "../../data/giants";

class AllGiantsScreen extends React.Component {
  static navigationOptions = {
    headerMode: "none",
    header: null
  };

  render() {
    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.container}>
          <Text style={Styles.giantText}>GO FIND A GIANT</Text>

          {giants.map(giant => (
            <TouchableOpacity
              key={giant.id}
              onPress={() =>
                this.props.navigation.navigate("MapScreen", {
                  id: giant.id,
                  name: giant.name,
                  firstname: giant.firstname,
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
                style={Styles.giant}
                name={giant.name}
                firstname={giant.firstname}
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
