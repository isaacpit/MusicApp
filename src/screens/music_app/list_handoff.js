import React, { Component } from "react";
import { FlatList } from "react-native";
import { Left, Container, Header, Content, Card, CardItem, Text, Body, Right, Button, Icon, Title } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class ListHandoff extends Component {


  render() {
    const { navigation } = this.props;
    // const dataList = navigation.getParam('data', [ {
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
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Map View</Title>
          </Body>
          <Right />
        </Header>
        
        <ScrollView>
        {dataList.map((markerData, idx) => (
              <Card key={idx}>
                <CardItem header bordered>
                  <Text>{markerData.businessName}</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>
                      Deal: {markerData.businessDeal}
                    </Text>
                    <Text>
                      Description: {markerData.businessDesc}
                    </Text>
                    <Text>
                      Index: {idx}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem footer bordered>
                  <Left>
                    <Text>Distance: {markerData.distance}</Text>
                  </Left>
                  <Right>
                    <Text>Duration: {markerData.duration}</Text>
                  </Right>
                  
                </CardItem>
              </Card>
            ))}
            
        </ScrollView>
      </Container>
    );
  }
}