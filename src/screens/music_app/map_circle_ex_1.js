import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Text,View, StyleSheet } from "react-native";
import { Header, Left, Right, Icon, Body, Label, Title, Form, Content, Item, Button, Input} from "native-base";
// import { getCurrentLocation } from "./app_functions";
import Slider from '@react-native-community/slider';

// RADIUS = 500;

export default class MapCircleEx1 extends Component {

constructor(props) {
    super(props);
        
    this.onValueChange = this.onValueChange.bind(this);

}


state = {
    radius: 1000,
    mapRegion: null,
    currentLatitude: null,
    currentLongitude: null,
    LATLNG: {
        latitude: -35,
        longitude: 120
    },
}

onRegionChangeComplete(region) {
    
}

onRegionChange(region) {
    console.log("moving");
    console.log(region)
    this.setState({ LATLNG: region})
}

onValueChange(val) {
    console.log("on value change event");
    console.log(val);
    // console.log()
    this.setState({radius: val});
}

render() {
    return (
    <View style={styles.container}>
        <MapView 
            style = { styles.map }
            region = { this.state.mapRegion }
            showsUserLocation = { true }
            followUserLocation = { true }
            showsMyLocationButton = {true}
            onRegionChangeComplete = { this.onRegionChangeComplete.bind(this) }
            onRegionChange = { this.onRegionChange.bind(this)}
            // onPanDrag
            // onRegionChangeComplete={e => console.log(e)}
            
        >
        <MapView.Circle
                key = { (this.state.currentLongitude + this.state.currentLongitude).toString() }
                center = { this.state.LATLNG }
                radius = { this.state.radius }
                strokeWidth = { 1 }
                strokeColor = { '#1a66ff' }
                fillColor = { 'rgba(230,238,255,0.5)' }
                onRegionChangeComplete = { this.onRegionChangeComplete.bind(this) }
                onRegionChange = { this.onRegionChange.bind(this.region)}
        />
        </MapView>
        <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={40000}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={this.onValueChange.bind(this)}
        />
        
        {/* <MessageBar />            */}
    </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
  
      justifyContent: 'space-evenly',
      // alignItems: 'stretch',
      // flex: 1,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    topContainer: {
      height: 400,
      width: "100%",
      flex: 1,
      alignItems: "flex-start",
    },
    bottomContainer: {
      padding: 10,
      flex: 1,
      // alignItems: "flex-end",
    }
    
  
   });