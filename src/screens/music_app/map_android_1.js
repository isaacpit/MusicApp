import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet, Button } from "react-native";
import List_View from "./List_View";

const datasheet = [
  {
    businessName: "Best Buy",
    businessDesc: "Buy the best electronics here",
    businessDeal: "5% off",
    distance: "0.3 miles",
    duration: "2 minutes"
  }, 
  {
    businessName: "Rest Buy",
    businessDesc: "Buy the rest electronics here",
    businessDeal: "300% off",
    distance: "0.5 miles",
    duration: "0 minutes"
  }, 
  {
    businessName: "Fest Buy",
    businessDesc: "Buy the Fest electronics here",
    businessDeal: "10% off",
    distance: "0.4 miles",
    duration: "1 minutes"
  }
];

class MapAndroid1 extends Component  {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
      <Button 
        onPress={() => this.props.navigation.navigate("List_View")}
        title="List View"
      >
        List View
      </Button>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });


export default MapAndroid1;