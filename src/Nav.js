import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";

import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

import SideBar from "./screens/sidebar";
import Home from "./screens/home";
import MusicApp from "./screens/music_app";

import SimpleQuery from "./screens/music_app/simple_query";
import UI_1 from "./screens/music_app/ui_1";
import MapAndroid1 from "./screens/music_app/map_android_1";



const Drawer = createDrawerNavigator(
  {
    Home: {screen: Home},
    MusicApp: {screen: MusicApp}
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
    SimpleQuery: { screen: SimpleQuery },
    UI_1: { screen: UI_1 },
    MapAndroid1: { screen: MapAndroid1 }

    
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default Nav =>
  <Root>
    <AppContainer />
  </Root>;
