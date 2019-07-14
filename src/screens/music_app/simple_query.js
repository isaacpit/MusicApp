import React, { Component } from "react";
import {
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
  Left,
  Right
} from "native-base";
import styles from "../../../styles";
var DB_URL = "http://34.229.242.167";
var DB_PORT = "3000";
var DB_CONN_STR = DB_URL + ":" + DB_PORT;
export default class SimpleQuery extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      users: []
    }
  }

  getDataUsingGet(){
    //GET request 
    fetch(DB_CONN_STR + '/users', {
        method: 'GET'
        //Request Type 
    })
    .then((response) => response.json())
    //If response is in json then in success
    // .then((responseJson) => {
    //     //Success 
    //     alert(JSON.stringify(responseJson));
    //     console.log(responseJson);
    // })
    .then((responseJson) => (this.setState({users: responseJson}),
    alert(JSON.stringify(responseJson))))

    //If response is not in json then in error
    .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error(error);
    });
  }
 
  getDataUsingPost(){
    //POST json 
    // var dataToSend = {title: 'foo', body: 'bar', userId: 1};
    // //making data to send on server
    // var formBody = [];
    // for (var key in dataToSend) {
    //   var encodedKey = encodeURIComponent(key);
    //   var encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");
    //POST request 
    // fetch(DB_CONN_STR + '/post_test', {
    fetch(DB_URL + ":" + DB_PORT + "/post_test", {
      method: "POST",//Request Type 
      body: JSON.stringify({"testkey": "testvalue"}),//post body 
      headers: {//Header Defination 
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.text())
    //If response is in json then in success
    // .then((responseJson) => this.setState({users: responseJson}))

    .then((responseJson) => {
      alert(JSON.stringify(responseJson));
      // this.setState({users = responseJson});
      console.log(responseJson);
  })
    //If response is not in json then in error
    .catch((error) => {
      alert(JSON.stringify(error));
      console.error(error);
    });
  }

  // render() {


  //   return (
  //     <Container>
  //       {userList}
  //     </Container>
  // )
  // }
  


  render() {
    var userList = [];

    this.state.users.forEach(function (tmpUser) {
        userList.push(
          // why keys? https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
          <Content padder key={tmpUser._id}>
            <Button dark key={tmpUser._id}>
              <Text key={tmpUser._id}>{tmpUser.username}</Text>
            </Button>
          </Content>
          
        );
    }.bind(this));

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Bordered CardItem</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
        <Button light style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          
        <Card style={styles.mb}>
        {userList}
        <Content padder>
          
            <Button light title='Get Data Using GET' onPress={() => this.getDataUsingGet()}>
              <Text>Get Data Using GET</Text>
            </Button>
          </Content>
          <Content padder>
            <Button light title='Get Data Using POST' onPress={() => this.getDataUsingPost()}>
              <Text>Get Data Using POST</Text>
            </Button>
          </Content>

            <CardItem header bordered>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase builds a layer on top of React Native that provides
                  you with basic set of components for mobile application
                  development.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Get on the mobile fast track with NativeBase, the
                  fastest-growing platform and tool set for iOS and Android
                  development.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );

    return (
      <View style={styles.MainContainer}>
        {/*Running GET Request*/}
        <Button title='Get Data Using GET' onPress={this.getDataUsingGet}/>
        {/*Running POST Request*/}
        <Button title='Get Data Using POST' onPress={this.getDataUsingPost}/>
      </View>
    );
  }
}