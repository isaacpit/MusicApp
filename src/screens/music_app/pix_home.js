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
          <Image source={require("assets/images/img_640_400.png")} style={{height: 200, width: undefined, flex: 1}}> 

          </Image>
          <View style={Object.assign({height: 400}, styles.cnt_line_top_bot)} > 
            <PixCard>

            </PixCard>
          </View>
          <View style={Object.assign({height: 400}, styles.cnt_line_top_bot)} > 

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
    justifyContent: "center",
    // elevation: 1,
    // borderBottomEndRadius: 3
  },
  // footer: {
  //   radius: 
  // }
});