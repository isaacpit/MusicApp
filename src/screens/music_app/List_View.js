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
    businessDesc: "Save 10% on all electronics with an AmEx colleague ID",
    businessDeal: "5% off",
    distance: "0.3 miles",
    duration: "2 minutes"
  }, 
  {
    businessName: "Golfland Sunsplash",
    businessDesc: "Save $30 on any day pass",
    businessDeal: "300% off",
    distance: "0.4 miles",
    duration: "0 minutes"
  }, 
  {
    businessName: "LA Fitness",
    businessDesc: "50% on enrollment fees on select memberships",
    businessDeal: "10% off",
    distance: "0.5 miles",
    duration: "1 minutes"
  }
];

class List_View extends Component {

  render() {
    const { navigation } = this.props;
  //   const dataList = navigation.getParam('data', [ {
  //     businessName: "no business found",
  //     businessDesc: "no description",
  //     businessDeal: "no deals",
  //     distance: 0,
  //     duration: "0h 0m"
  //     }
  //   ]

  // );
  const dataList = navigation.getParam('data', []);

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
            dataArray={dataList}
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