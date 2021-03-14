import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConnexionScreen from "../screens/ConnexionScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ModalConnexion from "../screens/ModalConnexion";
import MarketScreen from "../screens/AppScreens/MarketScreen";
import AccountScreen from "../screens/AppScreens/AccountScreen";
import MyPlatesScreen from "../screens/AppScreens/MyPlatesScreen";
import Loadingscreen from "../screens/LoadingScreen";
const AppStack = createStackNavigator();
const LoginStack = createStackNavigator();
const MenuStack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen
        name="LoadingScreen"
        component={Loadingscreen}
        options={{
          animationEnabled: false,
        }}
      />
      <AppStack.Screen
        name="NavLogin"
        component={NavLogin}
        options={{
          animationEnabled: false,
        }}
      />
      <AppStack.Screen
        name="NavMenu"
        component={NavMenu}
        options={{
          animationEnabled: false,
        }}
      />
    </AppStack.Navigator>
  </NavigationContainer>
);

function NavLogin() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen
        name="ConnexionScreen"
        component={ConnexionScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <LoginStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </LoginStack.Navigator>
  );
}

function NavMenu() {
  return (
    <MenuStack.Navigator screenOptions={{ headerShown: false }}>
      <MenuStack.Screen
        name="MarketScreen"
        component={MarketScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <MenuStack.Screen
        name="MyPlatesScreen"
        component={MyPlatesScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <MenuStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </MenuStack.Navigator>
  );
}
