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
import ListHandoff from "./screens/music_app/list_handoff";
import MapAndroidCurrLoc from "./screens/music_app/map_android_curr_loc";
import MapAndroidCircle from "./screens/music_app/map_android_circle";
import MapCircleEx1 from "./screens/music_app/map_circle_ex_1";
import PinchEx1 from "./screens/music_app/pinch_ex1";
import MapPinch from "./screens/music_app/map_pinch";
import List_View from "./screens/music_app/List_View";
import WelcomeScreen from "./screens/music_app/WelcomeScreen";


const Drawer = createDrawerNavigator(
  {
    WelcomeScreen: {screen: WelcomeScreen},
    Home: {screen: Home},
    MusicApp: {screen: MusicApp}
  },
  {
    initialRouteName: "WelcomeScreen",
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
    MapAndroid1: { screen: MapAndroid1 },
    ListHandoff: { screen: ListHandoff },
    MapAndroidCurrLoc: { screen: MapAndroidCurrLoc },
    MapAndroidCircle: { screen: MapAndroidCircle },
    MapCircleEx1: { screen: MapCircleEx1 },
    PinchEx1: { screen: PinchEx1 },
    MapPinch: { screen: MapPinch },
    List_View: { screen: List_View },
    WelcomeScreen: { screen: WelcomeScreen },

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
