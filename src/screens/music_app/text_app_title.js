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
  // Text,
  Body,
  StyleSheet,
  Footer,
  FooterTab,
  Left,
  Right,

} from "native-base";
import {
  Text,
  Platform,
  View,
  Image
} from "react-native"
import TextApp from "./text_app"
// import styles from "./styles";
// import styles from "../../../styles";

const data = {
  title: "default title",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}


export default class TextAppTitle extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      
      // <Container style={styles.container}>
      <TextApp style={styles.app_text}> 
        {this.props.children}
      </TextApp>
    
    );
  }
}

const styles = ({ 
  app_text: {
    color: "red",
    fontSize: 40,
    fontFamily: "sans-serif-medium",
    color: "black"

  },
  
  
});