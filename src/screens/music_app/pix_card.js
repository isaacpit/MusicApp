import React, { Component } from "react";
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
  Text,
  Body,
  StyleSheet,
  Footer,
  FooterTab,
  Left,
  Right,

} from "native-base";
import {
  Platform,
  View,
  Image,
  Dimensions
} from "react-native"
// import styles from "./styles";
// import styles from "../../../styles";

import TextApp from "./text_app";
import TextAppTitle from "./text_app_title";
import PixHome from "./pix_home";

var {height, width} = Dimensions.get('window')
// import {BoxShadow} from 'react-native-shadow';

var adjustedWidth = width - 60;
console.log("pix_card width: ", width);
console.log("pix_card adj_width: ", adjustedWidth);


const data = {
  category: "category",
  title: "default title",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}


export default class PixCard extends Component {
  constructor(props) {
    super(props);

    

    this.state = {
      data
    };
  }

  render() {

    return (
      
      <View style={Object.assign({width: adjustedWidth}, styles.cnt_card)}> 
        <Text style={styles.txt_title}>
          {this.state.data.title}
        </Text>
        <Text style={styles.txt_paragraph}>
          {this.state.data.body}
        </Text>
       </View>
    
    );
  }
}

const styles = ({ 
  container: {
    backgroundColor: "#fff"
  },
  cnt_card: {
    backgroundColor: "#eee",
    borderRadius: 10,


    ...Platform.select({
      ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 20,
      },
      android: {
          elevation: 5

      },
    }),
    // overflow: "hidden",
    

    
  },

  txt_title: { 
    
    padding: 20,
    paddingBottom: 0,
    fontSize: 40,
    fontFamily: "sans-serif-medium"
    // color: "red"
  },
  txt_paragraph: {
    padding: 20,
    fontFamily: "sans-serif-light"
  },
  
  // footer: {
  //   radius: 
  // }
});

// const shadowOpt = {
//   width:160,
//   height:170,
//   color:"#000",
//   border:2,
//   radius:3,
//   opacity:0.2,
//   x:0,
//   y:3,
//   style:{marginVertical:5}
// }