import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import NavMarket from "./MarketNavigator";
import AccountNavigator from "./AccountNavigor";
import HeaderMenu from "../components/headerMenu";
const MenuTab = createMaterialTopTabNavigator();
import MarketScreen from "../screens/AppScreens/MarketScreen";
//Nav Plates
import MyPlatesScreen from "../screens/AppScreens/MyPlatesScreen";

//Custom Tabnav :
import { View, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

//For context :
import { useContext } from "react";
import AppContext from "../components/AppContext";

function MenuNavigator(props) {
  //Global Context:
  const TheContext = useContext(AppContext);
  return (
    <MenuTab.Navigator
      initialRouteName="MarketScreen"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => (
        <HeaderMenu navigation={props.navigation} active="NavMarket" />
      )}
      style={headerStyles.headerStyle}
    >
      <MenuTab.Screen
        name="MyPlatesScreen"
        component={MyPlatesScreen}
        options={{
          animationEnabled: true,
          headerLeft: null,
          headerStyle: headerStyles.headerStyle,
          headerShown: true,
          headerTitle: () => (
            <HeaderMenu navigation={props.navigation} active="NavMarket" />
          ),
        }}
      />
      <MenuTab.Screen
        name="MarketScreen"
        component={MarketScreen}
        options={{
          animationEnabled: true,
          headerLeft: null,
          headerStyle: headerStyles.headerStyle,
          headerShown: true,
          headerTitle: () => (
            <HeaderMenu navigation={props.navigation} active="NavMarket" />
          ),
        }}
      />

      <MenuTab.Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{
          headerStyle: headerStyles.headerStyle,
          animationEnabled: true,
          headerShown: true,
          headerLeft: null,
          headerTitle: () => (
            <HeaderMenu
              navigation={props.navigation}
              active="AccountNavigator"
            />
          ),
        }}
      />
    </MenuTab.Navigator>
  );
}

const headerStyles = new StyleSheet.create({
  headerStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6.27,
  },
});
export default MenuNavigator;
