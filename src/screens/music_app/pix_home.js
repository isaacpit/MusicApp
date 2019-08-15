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
  Row,

} from "native-base";
import {
  Dimensions,
  ScrollView,
  View,
  Image
} from "react-native"
// import styles from "./styles";
// import styles from "../../../styles";
import PixCard from "./pix_card";
// import console = require("console");

var {height, width} = Dimensions.get("window");

var adjustedWidth = width - 40;
console.log("pix_home width: ", width);
console.log("pix_home adj_width: ", adjustedWidth);


export default class PixHome extends Component {
  constructor(props) {
    super(props)

    this.goto = this.goto.bind(this);

    this.state = {
      data: {
        category: "CATEGORY",
      }
    }
  }
 
  // _onScrollEndDrag() {

  // }
  goto() {
    console.log("in goto");
    this.scroll.scrollTo({y: 0, x: adjustedWidth, duration: 10000});
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

          <SideScrollContent/>
            <Image source={require("assets/images/img_640_400.png")} style={{height: 200, width: undefined, flex: 1}}/>

          <SideScrollContent/>
          <SideScrollContent/>
          

        </Content>

      </Container>
      
    );
  }
}

class Spacer extends Component {

  render() {
    return (
      <View style={{width: 20}}>

      </View>
    );
  }
}

class Divider extends Component {
  render() {
    return (
      <View style={styles.line}/>
    );
  }
  
}

class SideScrollContent extends Component {
  render() {
    return (
      <View style={Object.assign({height:375}, styles.cnt_line_top_bot, {margin: 0})}>
        <Divider/>
        <View style={styles.cnt_category}>
          {/* <Button block onPress={this.goto}> */}
            <Text style={styles.txt_category}>
              goto
            </Text>
          {/* </Button> */}
        </View>
        <ScrollView 
        contentInset={{top: 10, left: 10, bottom: 10, right: 10}}
        ref={(c) => {this.scroll = c; console.log("ref attached")}}
        horizontal={true} 
        decelerationRate={0}
        snapToInterval={adjustedWidth}
        contentContainerStyle={styles.contentContainer}
        // snapToAlignment={"center"}
        alignItems={"center"}
        style={styles.cnt_scroll_h}>
          <Spacer/>
          <PixCard/>        
          <Spacer/>
          <PixCard/>
          <Spacer/>
          <PixCard/>
          <Spacer/>
          <PixCard/>
          <Spacer/>
          <PixCard/>

          <Spacer/>
          <Spacer/>
        </ScrollView>
        {/* <Divider/> */}
      </View>
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
    // borderWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    justifyContent: "space-evenly",
    // elevation: 1,
    // borderBottomEndRadius: 3
  },
  txt_category: { 
    
    padding: 20,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 20,
    fontFamily: "sans-serif-medium",
    fontWeight: "bold",
    // color: "red"
  },
  cnt_scroll_h: {
    horizontal: true,
    // flex: 1,
    // alignItems: "center",
    // flexDirection: "row",
    // padding: 20,
    // margin: 20
  },
  contentContainer: {
    paddingVertical: 20
  },
  cnt_category: {
    height: 40, 
    // backgroundColor: "black",
    
  },
  line: {
    margin: 20,
    marginRight: 40,
    // marginTop: 20,
    // marginBot: 0,
    borderRadius: 2,
    borderColor: "#d5d5d5",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  }
  // footer: {
  //   radius: 
  // }
});