import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import NavMarket from "./MarketNavigator";
import AccountNavigator from "./AccountNavigor";
import NavPlates from "./MyplatesNavigator";
import HeaderMenu from "../components/headerMenu";
const MenuStack = createStackNavigator();

//For context :
import { useContext } from "react";
import AppContext from "../components/AppContext";

function MenuNavigator(props) {
  //Global Context:
  const TheContext = useContext(AppContext);
  return (
    <MenuStack.Navigator
      initialRouteName="NavMarket"
      screenOptions={{ headerShown: false }}
    >
      <MenuStack.Screen
        name="NavMarket"
        component={NavMarket}
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
      <MenuStack.Screen
        name="NavPlates"
        component={NavPlates}
        options={{
          backgroundColor: "red",
          headerStyle: headerStyles.headerStyle,
          animationEnabled: true,
          headerShown: true,
          headerLeft: null,
          headerTitle: () => (
            <HeaderMenu navigation={props.navigation} active="Plates" />
          ),
        }}
      />
      <MenuStack.Screen
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
    </MenuStack.Navigator>
  );
}

const headerStyles = new StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
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
