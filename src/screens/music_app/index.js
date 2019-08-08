import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "SimpleQuery",
    text: "Simple Query"
  }, 
  {
    route: "UI_1",
    text: "UI_1"
  },
  {
    route: "ListHandoff",
    text: "List Handoff"
  },
  {
    route: "MapAndroidCurrLoc",
    text: "Map Android Curr Loc"
  },
  {
    route: "MapAndroidCircle",
    text: "Map Android Circle"
  },
  {
    route: "MapCircleEx1",
    text: "Map Circle Ex 1"
  },
  {
    route: "PinchEx1",
    text: "Pinch Ex 1"
  },
  {
    route: "MapPinch",
    text: "Map Pinch"
  },
  {
    route: "List_View",
    text: "List_View"
  },
  {
    route: "MapAndroid1",
    text: "Android Map 1"
  },
  {
    route: "WelcomeScreen",
    text: "Start"
  },
];

class MusicApp extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Buttons</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default MusicApp;
