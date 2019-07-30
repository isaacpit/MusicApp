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
  Picker,
  ActionSheet
} from "native-base";


var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const PickItem = Picker.Item;


export default class SearchRestaurant extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: null,
      latitude: 37.0,
      longitude: -122.0,
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      selectedItem: undefined,
      selected1: 'key1',
      results: {
          items: []
      }
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true
    });
  }

  onValueChange (value: String) {
    this.setState({
        selected1 : value
    });
}

  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);
        this.setState({ location });
        
        if (position !== null 
          && position.coords !== null 
          && position.coords.longitude !== null
          && position.coords.latitude !== null) {
            this.setState({
              longitude: position.coords.longitude,
              latitude: position.coords.latitude
            });
        }
        

      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

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
            <Title>Search Page</Title>
          </Body>
          <Right />
        </Header>



        <Content>
          <Form>
            <Icon name ="pizza" style={{fontSize: 200, margin: 0, textAlign: "center", color: styles.colors.mainColor}}> 
            
            </Icon>
            <Card noBorder noShadow alignItems={"stretch"} justifyContent={"space-between"}>
              <CardItem style={styles.cardSpace}>
              <Content style={styles.contentShadow}>
                  <Item stackedLabel> 
                    <Label>
                      Latitutude
                    </Label>
                    <Input value={this.state.latitude.toString()}/>
                  </Item>
                </Content>

                <Content style={styles.contentShadow}>
                  <Item stackedLabel> 
                    <Label>
                      Longitude
                    </Label>
                    <Input value={this.state.longitude.toString()}/>
                  </Item>
                </Content>
                
              </CardItem>
              
            </Card>
            
            <Card noBorder noShadow>
              <CardItem style={styles.cardSpace}>
                <Content style={styles.contentShadow}>
                  <Item stackedLabel> 
                    <Label>
                      Here
                    </Label>
                    <Input/>
                  </Item>
                </Content>

                <Content style={styles.contentShadow}>
                  <Item stackedLabel> 
                    <Label>
                      Here
                    </Label>
                    <Input style={styles.input}/>
                  </Item>
                </Content>

                <Content style={styles.contentShadow}>
                  <Item stackedLabel> 
                    <Label>
                      Here
                    </Label>
                    <Input/>
                  </Item>
                </Content>
                
              </CardItem>
              
            </Card>
            <Card noBorder noShadow >
              <CardItem style={styles.cardSpace}>
                {/* <Content style={styles.contentShadow} padding={8} alignItems={"center"} justifyContent={"center"}> */}
                <Content style={styles.contentShadow} padding={8} >
                    <Button block style={[{backgroundColor: styles.colors.mainColor}, styles.blockButtons]}
                      onPress={() =>
                        ActionSheet.show(
                          {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            destructiveButtonIndex: DESTRUCTIVE_INDEX,
                            title: "Select an option"
                          },
                          buttonIndex => {
                            this.setState({ clicked: BUTTONS[buttonIndex] });
                          }
                        )}
                    >
                      <Text>Actionsheet</Text>
                    </Button>
                    <Button block style={[{backgroundColor: styles.colors.mainColor}, styles.blockButtons]}
                      onPress={this.findCoordinates}>
                      <Text style={styles.welcome}>Find My Coords?</Text>
                      
                    </Button>
                    
                  </Content>
              </CardItem>
              
            </Card>
            <Card noBorder noShadow>
              <CardItem style={styles.cardSpace}>
                <Content style={styles.contentShadow} padding={8} >
                  <Text>Location: {this.state.location}</Text>
                </Content>
              </CardItem>
              
            </Card>
            
          </Form>
          <Button block style={[{backgroundColor: styles.colors.mainColor, marginTop: 50}, styles.blockButtons]}>
            <Text>Search</Text>
          </Button>
        </Content>


        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} name="apps" />
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="camera" />
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} name="search" />
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} name="contact" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      
    );
  }
}

const styles = ({ 
  container: {
    backgroundColor: "#fff"
  },
  colors: {
    mainColor: "#ff9944"
  }, 
  blockButtons: {
    margin: 5, 
    // marginTop: 50, 
  },
  cardSpace: {
    padding: 0,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
  },
  containerShadow: {
    // alignItems: "center",
    // justifyContent: "center"
  },
  contentShadow: {
    // border: 10,
    margin: 3,
    
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    // borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,

  },

});