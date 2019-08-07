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
    route: "PlainColumn2D",
    text: "Plain Column 2D"
  },
  {
    route: "FusionTime",
    text: "Fusion Time"
  },
  {
    route: "SimpleLine",
    text: "Simple Line"
  },
  {
    route: "LineEvents",
    text: "Line Events"
  },
  {
    route: "JustLine",
    text: "Just Line"
  }
  
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
