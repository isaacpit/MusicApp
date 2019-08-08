import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Text,View, StyleSheet } from "react-native";
import { Header, Left, Right, Icon, Body, Label, Title, Form, Content, Item, Button, Input} from "native-base";
// import { getCurrentLocation } from "./app_functions";

class MapAndroidCurrLoc extends Component  {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.getUserInput = this.getUserInput.bind(this);
    // this.onRegionChange = this.onRegionChange.bind(this);

    this.state = {
      firstLoad: true,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      error: null,
      markers: [
        {
          latlng: 
          {
            latitude:  37.78825,
            longitude: -122.4324
          }, 
          title: "title",
          description: "description"
        }
      ]
    }

  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("wokeeey");
        console.log(position);
        this.setState({
          region: { 
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
  }


  
  
  getUserInput() {
    // console.log(this.state.userLat);
    // console.log(this.state.userLong);
    var nLat = parseFloat(this.state.userLat);
    var nLon = parseFloat(this.state.userLong);
    // console.log("nLat: " + nLat);
    // console.log("nLong: " + nLon);
    if (isNaN(nLat) || isNaN(nLon)) {
      var err_msg = "Latitude and Longitude must be integers"
      console.log(err_msg);
      alert(err_msg); 
      return;
    }

    this.setState({
      region: {
        latitude: nLat,
        longitude: nLon,
        latitudeDelta: this.state.region.latitudeDelta,
        longitudeDelta: this.state.region.longitudeDelta
      }
    })
  }


  render() {
    // if (this.state.firstLoad) {
    //   this.setState({firstLoad: false})
    //   getCurrentLocation(this);
    // }
    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Map View</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.topContainer}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={this.state.region}
            // onRegionChange={this.onRegionChange}

          >
            {this.state.markers.map((marker, idx) => (
              <Marker
                key={idx}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
              />
            ))}
          </MapView>
        </View>
        
        <View style={styles.bottomContainer}>
          <Text> {"lat: " + this.state.region.latitude} </Text>
          <Text> {"lon: " + this.state.region.longitude} </Text>
          <Text> {"error: " + this.state.error} </Text>
          <Content>
        </Content>
          <Button block onPress={this.getCurrentLocation}>
            <Text>
              Load current location
            </Text>
          </Button>
          
          <Button block onPress={() =>
            this.props.navigation.navigate('ListHandoff', {
              data: [ {
                businessName: "business1",
                businessDesc: "desc1",
                businessDeal: "deal1",
                distance: 5,
                duration: "0h 03m"
              },
              {
                businessName: "business2",
                businessDesc: "desc2",
                businessDeal: "deal2",
                distance: 10,
                duration: "0h 04m"
              },
              {
                businessName: "business3",
                businessDesc: "desc3",
                businessDeal: "deal3",
                distance: 10,
                duration: "0h 05m"
              },
              ],
            })}>
            <Text>
              View list
            </Text>
          </Button>
          
        </View>
      
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


export default MapAndroidCurrLoc;