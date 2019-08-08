import React, { Component } from "react";
import {
  Form,
  Item,
  Label,
  Input,
  List, 
  ListItem,
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
  Thumbnail,
  Right
} from "native-base";
// import styles from "./styles";
// import styles from "../../../styles";

const datasheet = [
  {
    businessName: "Best Buy",
    businessDesc: "Buy the best electronics here",
    businessDeal: "5% off",
    distance: "0.3 miles",
    duration: "2 minutes"
  }, 
  {
    businessName: "Rest Buy",
    businessDesc: "Buy the rest electronics here",
    businessDeal: "300% off",
    distance: "0.5 miles",
    duration: "0 minutes"
  }, 
  {
    businessName: "Fest Buy",
    businessDesc: "Buy the Fest electronics here",
    businessDeal: "10% off",
    distance: "0.4 miles",
    duration: "1 minutes"
  }
];

class List_View extends Component {

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
            <Title>Deals List</Title>
          </Body>
          <Right />
        </Header>



        <Content>
          <List
            dataArray={datasheet}
            renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={{ uri: 'Image URL' }} />
                </Left>
                <Body>
                  <Text>{data.businessName}</Text>
                  <Text note>{data.businessDesc}</Text>
                </Body>
                <Right>
                  <Text note>{data.distance}</Text>
                </Right>
              </ListItem>}
          />
        </Content>

      </Container>
      
    );
  }
}

const styles = ({ 
  container: {
    backgroundColor: "#fff"
  }
});

export default List_View;