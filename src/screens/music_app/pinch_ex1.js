import React, { Component } from "react";
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Text,View, StyleSheet, Animated, AppState } from "react-native";
// import { Header, Left, Right, Icon, Body, Label, Title, Form, Content, Item, Button, Input} from "native-base";
import {PinchGestureHandler, State} from "react-native-gesture-handler";

export default class PinchEx1 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      velocity: 0
    }
  }

  _baseScale = new Animated.Value(1);
  _pinchScale = new Animated.Value(1);
  _scale = Animated.multiply(this._baseScale, this._pinchScale);
  _lastScale = 1;
  // _onPinchGestureEvent = (e) => Animated.event(
  //   [{ nativeEvent: { scale: this._pinchScale } }],
  //   { useNativeDriver: true }
  // );
  _onPinchGestureEvent = (e) => {
    console.log("on pinch gesture event!");
    console.log(e);
    this.setState({velocity: e.nativeEvent.velocity})
  }
  // _onPinchGestureEvent = Anim
  

  _onPinchHandlerStateChange = event => {
    console.log(event);
    // console.log("nativeEvent.velocity: "); console.log(this.nativeEvent.velocity);
    console.log("_lastScale: "); console.log(this._lastScale);
    console.log("_baseScale: "); console.log(this._baseScale);
    console.log("_pinchScale: "); console.log(this._pinchScale);
    
    
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastScale *= event.nativeEvent.scale;
      this._baseScale.setValue(this._lastScale);
      this._pinchScale.setValue(1);
      // this.setState({velocity: event.nativeEvent.velocity} );
    }

  };

  render() {
    return (
      <PinchGestureHandler
        onGestureEvent={this._onPinchGestureEvent}
        onHandlerStateChange={this._onPinchHandlerStateChange}>
        <View style={styles.container} collapsable={false}>
          <Text> 
            {this.state.velocity}
          </Text>
          <Animated.Image
            style={[
              styles.pinchableImage,
              {
                transform: [
                  { perspective: 200 },
                  { scale: this._scale },
                ],
              },
            ]}
          />
        </View>
      </PinchGestureHandler>
    );
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