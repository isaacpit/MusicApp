/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import React, {Component} from 'react';
//import {Platform, StyleSheet, Text, View} from 'react-native';
//
//const instructions = Platform.select({
//  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//  android:
//    'Double tap R on your keyboard to reload,\n' +
//    'Shake or press menu button for dev menu',
//});
//
//type Props = {};
//export default class App extends Component<Props> {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>Welcome to React Native!</Text>
//        <Text style={styles.instructions}>To get started, edit App.js</Text>
//        <Text style={styles.instructions}>{instructions}</Text>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});


// **************************************************************************


//This is an example code to understand HTTP Requests// 
import React, { Component } from 'react';
//import react in our code. 
 
import { StyleSheet, View, Button, Alert} from 'react-native';
//import all the components we are going to use. 

var DB_URL = "http://54.211.88.171";
var DB_PORT = "3000";
var DB_CONN_STR = DB_URL + ":" + DB_PORT;
 
export default class App extends Component {
 
  getDataUsingGet(){
    //GET request 
    fetch(DB_CONN_STR + '/users', {
        method: 'GET'
        //Request Type 
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
        //Success 
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error(error);
    });
  }
 
  getDataUsingPost(){
    //POST json 
    // var dataToSend = {title: 'foo', body: 'bar', userId: 1};
    // //making data to send on server
    // var formBody = [];
    // for (var key in dataToSend) {
    //   var encodedKey = encodeURIComponent(key);
    //   var encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");
    //POST request 
    // fetch(DB_CONN_STR + '/post_test', {
    fetch("http://54.211.88.171:3000/post_test", {
      method: "POST",//Request Type 
      body: JSON.stringify({"testkey": "testvalue"}),//post body 
      headers: {//Header Defination 
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.text())
    //If response is in json then in success
    .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
      alert(JSON.stringify(error));
      console.error(error);
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        {/*Running GET Request*/}
        <Button title='Get Data Using GET' onPress={this.getDataUsingGet}/>
        {/*Running POST Request*/}
        <Button title='Get Data Using POST' onPress={this.getDataUsingPost}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 10
  }
});