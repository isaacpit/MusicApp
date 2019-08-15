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
  View,
  Image
} from "react-native"
// import styles from "./styles";
// import styles from "../../../styles";
import PixCard from "./pix_card";




export default class PixHome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        category: "CATEGORY",
      }
    }
  }
 

  render() {

    return (
      // <Container style={styles.container}>
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pix</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Image source={require("assets/images/img_640_400.png")} style={{height: 200, width: undefined, flex: 1}}/>
          <View style={Object.assign({height: 325}, styles.cnt_line_top_bot)} > 
            <Text style={styles.txt_category}>  
              {this.state.data.category}
            </Text>
            <PixCard>

            </PixCard>
          </View>
            <Image source={require("assets/images/img_640_400.png")} style={{height: 200, width: undefined, flex: 1}}/>
          <View style={Object.assign({height: 325}, styles.cnt_line_top_bot)} > 
            <Text style={styles.txt_category}>  
              {this.state.data.category}
            </Text>
            <PixCard>
            </PixCard>

          </View>

        </Content>

      </Container>
      
    );
  }
}

const styles = ({ 
  container: {
    backgroundColor: "#fff"
  },
  cnt_line_top_bot: {
    // backgroundColor: "grey",
    margin: 20,
    marginTop: 20,
    marginBot: 0,
    borderRadius: 2,
    borderColor: "#d5d5d5",
    borderWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    justifyContent: "space-evenly",
    // elevation: 1,
    // borderBottomEndRadius: 3
  },
  txt_category: { 
    
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 20,
    fontFamily: "sans-serif-medium",
    fontWeight: "bold",
    // color: "red"
  },
  // footer: {
  //   radius: 
  // }
});