import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ScrollView } from "react-native";
// import {Platform} from "react-native";
import {
  Form,
  Item,
  Label,
  Input,
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  // Text,
  Body,
  // StyleSheet,
  Footer,
  FooterTab,
  Left,
  Right
} from "native-base";
import FusionCharts from "react-native-fusioncharts";

export default class PlainColumn2D extends Component {

  debug(e){
    e.persist();
    console.log(e);// all the properties are retained
  }

  constructor(props) {
    super(props);
    this.handleResponderGrant = this.handleResponderGrant.bind(this);
    this.handleSCROLLResponderGrant = this.handleSCROLLResponderGrant.bind(this);
    this.state = {
      myText: "Press me!!!",
      type: "column2d",
      width: "700",
      height: "400",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Countries With Most Oil Reserves [2017-18]",
          subCaption: "In MMbbl = One Million barrels",
          xAxisName: "Country",
          yAxisName: "Reserves (MMbbl)",
          numberSuffix: "K",
          theme: "fusion"
        },
        data: [
          {
            label: "Venezuela",
            value: "290"
          },
          {
            label: "Saudi",
            value: "260"
          },
          {
            label: "Canada",
            value: "180"
          },
          {
            label: "Iran",
            value: "140"
          },
          {
            label: "Russia",
            value: "115"
          },
          {
            label: "UAE",
            value: "100"
          },
          {
            label: "US",
            value: "30"
          },
          {
            label: "China",
            value: "30"
          }
        ]
      }
    };
    this.libraryPath = Platform.select({
      // Specify fusioncharts.html file location
      android: {
        uri: "file:///android_asset/fusioncharts.html" // FIXME
      },
      ios: require("../../../assets/fusioncharts.html")
    });
  }

   /* Capture handles */
  //the responder system bubbles up from the deepest component, 
  //a parent View wants to prevent the child from becoming responder on a touch start
  handleStartShouldSetResponderCapture(evt){
    return true;
  }
  //the responder system bubbles up from the deepest component, 
  //a parent View wants to prevent the child from becoming responder on a touch move
  handleMoveShouldSetResponderCapture(evt){
    return true;
  }

  /* Lifecycle handles */
  //Does this view want to become responder on the start of a touch?
  handleStartShouldSetResponder(evt){
    return true;
  }
  //Called for every touch move on the View when it is not the responder: 
  //does this view want to "claim" touch responsiveness?
  handleMoveShouldSetResponder(evt){
    return true;
  }
  //The View is now responding for touch events. 
  handleResponderGrant(evt) {
    evt.persist();
    console.log('you are touching me, here is event:');
    console.log(evt);
    
    this.setState({myText: "locationXY: (" + evt.nativeEvent.locationX + ", " + evt.nativeEvent.locationY + ")" +
                  "\npageXY: (" + evt.nativeEvent.pageX + "," + evt.nativeEvent.pageY + ")" });
    
  }
  //Something else is the responder right now and will not release it
  handleResponderReject(evt){
    console.log('please wait in line');
  }

  /* event handles */
  //touch move
  handleResponderMove(evt){
    evt.persist();
    console.log('touch move at:', 'X='+{...evt} , 'Y='+evt.locationY);
    console.log(evt);
  }
  //touch end/up
  handleResponderRelease(evt){
    console.log('touch end');
  }
  //Something else wants to become responder. Should this view release the responder?
  handleResponderTerminationRequest(evt){
    return true;
  }
  //touch cancel
  handleResponderTerminate(evt){
    console.log('touch canceled');
  }

  // for scroll view, not required, just to be explicit in naming of functions 
  handleSCROLLStartShouldSetResponderCapture(evt){
    return true;
  }
  //the responder system bubbles up from the deepest component, 
  //a parent View wants to prevent the child from becoming responder on a touch move
  handleSCROLLMoveShouldSetResponderCapture(evt){
    return true;
  }

  /* Lifecycle handles */
  //Does this view want to become responder on the start of a touch?
  handleSCROLLStartShouldSetResponder(evt){
    return true;
  }
  //Called for every touch move on the View when it is not the responder: 
  //does this view want to "claim" touch responsiveness?
  handleSCROLLMoveShouldSetResponder(evt){
    return true;
  }
  //The View is now responding for touch events. 
  handleSCROLLResponderGrant(evt) {
    evt.persist();
    console.log('you are touching me, here is event:');
    console.log(evt);
    
    this.setState({myText: "locationXY: (" + evt.nativeEvent.locationX + ", " + evt.nativeEvent.locationY + ")" +
                  "\npageXY: (" + evt.nativeEvent.pageX + "," + evt.nativeEvent.pageY + ")" });
    
  }
  //Something else is the responder right now and will not release it
  handleSCROLLResponderReject(evt){
    console.log('please wait in line');
  }

  /* event handles */
  //touch move
  handleSCROLLResponderMove(evt){
    evt.persist();
    console.log('touch move at:', 'X='+{...evt} , 'Y='+evt.locationY);
    console.log(evt);
  }
  //touch end/up
  handleSCROLLResponderRelease(evt){
    console.log('touch end');
  }
  //Something else wants to become responder. Should this view release the responder?
  handleSCROLLResponderTerminationRequest(evt){
    return true;
  }
  //touch cancel
  handleSCROLLResponderTerminate(evt){
    console.log('touch canceled');
  }

  render() {
    return (
    //   <View>
    //   {/*  <View style={styles.container} */}
    //     onStartShouldSetResponderCapture={this.handleStartShouldSetResponderCapture}
    //     onMoveShouldSetResponderCapture={this.handleMoveShouldSetResponderCapture}
    //     onStartShouldSetResponder={this.handleStartShouldSetResponder}
    //     onMoveShouldSetResponder={this.handleMoveShouldSetResponder}
    //     {/* onResponderGrant={this.handleResponderGrant} 
    //     onResponderReject={this.handleResponderReject}
    //     onResponderMove={this.handleResponderMove}
    //     onResponderRelease={this.handleResponderRelease}
    //     onResponderTerminationRequest={this.handleResponderTerminationRequest}
    //     onResponderTerminate={this.handleResponderTerminate}> */}
    //   >

    //   <Text>Press me!</Text>
    //   {/* <Header>
    //     <Left>
    //       <Button transparent onPress={() => this.props.navigation.goBack()}>
    //         <Icon name="arrow-back" />
    //       </Button>
    //     </Left>
    //     <Body>
    //       <Title>Plain Column 2D</Title>
    //     </Body>
    //     <Right />
    //   </Header>



      
    // </View>
    <ScrollView style={styles.container}
        onStartShouldSetResponderCapture={this.handleSCROLLStartShouldSetResponderCapture}
        onMoveShouldSetResponderCapture={this.handleSCROLLMoveShouldSetResponderCapture}
        onStartShouldSetResponder={this.handleSCROLLStartShouldSetResponder}
        onMoveShouldSetResponder={this.handleSCROLLMoveShouldSetResponder}
        onResponderGrant={this.handleSCROLLResponderGrant} 
        // onResponderReject={this.handleSCROLLResponderReject}
        onResponderMove={this.handleSCROLLResponderMove}
        // onResponderRelease={this.handleResponderRelease}
        // onResponderTerminationRequest={this.handleSCROLLResponderTerminationRequest}
        // onResponderTerminate={this.handleSCROLLResponderTerminate}>
      >
          <Text style={{paddingTop: 30, paddingLeft: 10}}>{this.state.myText}</Text>
          <View style={styles.container}>
        <Text style={styles.header}>A Column 2D Chart</Text>
        <View style={styles.chartContainer}
          onStartShouldSetResponderCapture={this.handleStartShouldSetResponderCapture}
          onMoveShouldSetResponderCapture={this.handleMoveShouldSetResponderCapture}
          onStartShouldSetResponder={this.handleStartShouldSetResponder}
          onMoveShouldSetResponder={this.handleMoveShouldSetResponder}
          onResponderGrant={this.handleResponderGrant} 
          // onResponderReject={this.handleResponderReject}
          onResponderMove={this.handleResponderMove}
          >
          <FusionCharts
            type={this.state.type}
            width={this.state.width}
            height={this.state.height}
            dataFormat={this.state.dataFormat}
            dataSource={this.state.dataSource}
            libraryPath={this.libraryPath} // set the libraryPath property
          />
        </View>
      </View> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa"
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 10
  },
  chartContainer: {
    height: 400,
    borderColor: "#000",
    borderWidth: 1
  }
});