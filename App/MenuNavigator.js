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
//NavAccount
import AccountScreen from "../screens/AppScreens/AccountScreen";

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
      screenOptions={{ headerShown: true, headerLeft: null }}
      tabBar={(props) => (
        <HeaderMenu navigation={props.navigation} active="NavMarket" />
      )}
      style={headerStyles.headerStyle}
    >
      <MenuTab.Screen
        name="MyPlatesScreen"
        component={MyPlatesScreen}
        options={{
          headerTitle: () => (
            <HeaderMenu navigation={props.navigation} active="NavMarket" />
          ),
        }}
      />
      <MenuTab.Screen
        name="MarketScreen"
        component={MarketScreen}
        options={{
          headerTitle: () => (
            <HeaderMenu navigation={props.navigation} active="MarketScreen" />
          ),
        }}
      />

      <MenuTab.Screen
        name="AccountMenuScreen"
        component={AccountScreen}
        options={{
          headerTitle: () => (
            <HeaderMenu
              navigation={props.navigation}
              active="AccountMenuScreen"
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
