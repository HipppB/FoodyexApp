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
import MyReservationsScreen from "../screens/AppScreens/Myplates/MyReservationsScreen";
import MyDishesOnMarketScreen from "../screens/AppScreens/Myplates/MyDishesOnMarketScreen";
import NewPlatesScreen from "../screens/AppScreens/Myplates/NewPlatesScreen";
import MyProfileScreen from "../screens/AppScreens/MyAccount/MyProfileScreen";
import HistoryScreen from "../screens/AppScreens/MyAccount/HistoryScreen";
import ListMessageScreen from "../screens/AppScreens/MyAccount/ListMessageScreen";
import PlateDetailsScreen from "../screens/AppScreens/TheMarket/PlateDetailsScreen";
import PublicProfileScreen from "../screens/AppScreens/TheMarket/PublicProfileScreen";
const AppStack = createStackNavigator();
const LoginStack = createStackNavigator();
const MenuStack = createStackNavigator();
const MyPlatestStack = createStackNavigator();
const AccountStack = createStackNavigator();
const MarketStack = createStackNavigator();

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
        name="NavMarket"
        component={NavMarket}
        options={{
          animationEnabled: false,
        }}
      />
      <MenuStack.Screen
        name="NavPlates"
        component={NavPlates}
        options={{
          animationEnabled: false,
        }}
      />
      <MenuStack.Screen
        name="NavAccount"
        component={NavAccount}
        options={{
          animationEnabled: false,
        }}
      />
    </MenuStack.Navigator>
  );
}
function NavMarket() {
  return (
    <MarketStack.Navigator screenOptions={{ headerShown: false }}>
      <MarketStack.Screen
        name="MarketScreen"
        component={MarketScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <MarketStack.Screen
        name="PlateDetailsScreen"
        component={PlateDetailsScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <MarketStack.Screen
        name="PublicProfileScreen"
        component={PublicProfileScreen}
        options={{
          animationEnabled: true,
        }}
      />
    </MarketStack.Navigator>
  );
}
function NavPlates() {
  return (
    <MyPlatestStack.Navigator screenOptions={{ headerShown: false }}>
      <MyPlatestStack.Screen
        name="MyPlatesScreen"
        component={MyPlatesScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <MyPlatestStack.Screen
        name="MyReservationsScreen"
        component={MyReservationsScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <MyPlatestStack.Screen
        name="MyDishesOnMarketScreen"
        component={MyDishesOnMarketScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <MyPlatestStack.Screen
        name="NewPlatesScreen"
        component={NewPlatesScreen}
        options={{
          animationEnabled: true,
        }}
      />
    </MyPlatestStack.Navigator>
  );
}
function NavAccount() {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <AccountStack.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <AccountStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <AccountStack.Screen
        name="ListMessageScreen"
        component={ListMessageScreen}
        options={{
          animationEnabled: true,
        }}
      />
    </AccountStack.Navigator>
  );
}
