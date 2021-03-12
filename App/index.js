import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

import ConnexionScreen from "../screens/ConnexionScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ModalConnexion from "../screens/ModalConnexion";
import MarketScreen from "../screens/AppScreens/MarketScreen";
import AccountScreen from "../screens/AppScreens/AccountScreen";
import MyPlatesScreen from "../screens/AppScreens/MyPlatesScreen";

const AppStack = createStackNavigator();
let isSignedIn = true;

export default () => (
  <NavigationContainer>
    {!isSignedIn ? (
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
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
