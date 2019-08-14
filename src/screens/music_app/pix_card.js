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
  Image
} from "react-native"
// import styles from "./styles";
// import styles from "../../../styles";

const data = {
  title: "default title",

}


export default class PixCard extends Component {
  constructor(props) {
    super(props);

    
  }

  render() {

    return (

      // <Container style={styles.container}>
      <View style={Object.assign({height: 200}, styles.cnt_card)}> 

      </View>
    
    );
  }
}

const styles = ({ 
  container: {
    backgroundColor: "#fff"
  },
  cnt_card: {
    backgroundColor: "grey",
    borderRadius: 10,


    ...Platform.select({
      ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 20,
      },
      android: {
          elevation: 20

      },
    }),

    
    // margin: 20,
    // marginTop: 20,
    // marginBot: 0,
    // borderRadius: 2,
    // borderColor: "#d5d5d5",
    // borderWidth: 2,
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
    // elevation: 1,
    // borderBottomEndRadius: 3
  },
  // footer: {
  //   radius: 
  // }
});