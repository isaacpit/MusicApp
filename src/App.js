import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";

import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import SideBar from "./screens/sidebar";
import Home from "./screens/home";

import MusicApp from "./screens/music_app/";
import SimpleQuery from "./screens/music_app/";


const Drawer = createDrawerNavigator(
  {
    Home: {screen: Home} 
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    MusicApp: { screen: MusicApp },
    SimpleQuery: { screen: SimpleQuery }
    
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
