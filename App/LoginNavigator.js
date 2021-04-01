import React from "react";

import ConnexionScreen from "../screens/ConnexionScreen";
import RegisterScreen from "../screens/RegisterScreen";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const LoginStack = createMaterialTopTabNavigator();
import HeaderLogin from "../components/HeaderLogin";

function LoginNavigator(props) {
  return (
    <LoginStack.Navigator
      screenOptions={{ headerShown: true }}
      tabBar={(props) => (
        <HeaderLogin navigation={props.navigation} active="Connexion" />
      )}
    >
      <LoginStack.Screen
        name="ConnexionScreen"
        component={ConnexionScreen}
        options={{
          animationEnabled: true,
          headerTitle: () => (
            <HeaderLogin navigation={props.navigation} active="NavMarket" />
          ),
        }}
      />
      <LoginStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          animationEnabled: true,
        }}
      />
    </LoginStack.Navigator>
  );
}

export default LoginNavigator;
