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
let isSignedIn = false;

export default () => (
  <NavigationContainer>
    {!isSignedIn ? (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="LoadingScreen" component={Loadingscreen} />
        <AppStack.Screen
          name="ConnexionScreen"
          component={ConnexionScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <AppStack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <AppStack.Screen name="ModalConnexion" component={ModalConnexion} />
      </AppStack.Navigator>
    ) : (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen
          name="MarketScreen"
          component={MarketScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <AppStack.Screen
          name="MyPlatesScreen"
          component={MyPlatesScreen}
          options={{
            animationEnabled: false,
          }}
        />
        <AppStack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            animationEnabled: false,
          }}
        />
      </AppStack.Navigator>
    )}
  </NavigationContainer>
);
