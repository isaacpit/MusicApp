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
        
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
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

getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("wokeeey");
      console.log(position);
      const newRegion = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      this.setState({
        // LATLNG: { 
        //   latitude: position.coords.latitude,
        //   longitude: position.coords.longitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,

        // },
        LATLNG: newRegion,
        // mapRegion: newRegion,
        error: null,
      });
      this.mapView.animateToRegion(this.state.LATLNG, 2000);
      
      
    },
    (error) => this.setState({ error: error.message }),
    { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
  );
}

render() {
    return (
    <View style={styles.container}>
      {/* <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Map View</Title>
          </Body>
          <Right />
        </Header> */}
        <MapView 
            style = { styles.map }
            ref = {(ref)=>this.mapView=ref}
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
        {/* <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={40000}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={this.onValueChange.bind(this)}
        /> */}
        <View style={styles.bottomContainer}>
          <View style={styles.uiContainer}> 
            <Text style={{fontSize: 17}}>
              Radius:
            </Text>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={40000}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              onValueChange={this.onValueChange.bind(this)}
            />
          
        </View>
        <Button block onPress={this.getCurrentLocation}>
            <Text>
              Load current location
            </Text>
          </Button>
        
      </View>
        
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
      // alignItems: "flex-end"
      // alignItems: "flex-end",
      // justifyContent: "flex-end"
    },
    uiContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end"
      
    }
    
  
   });