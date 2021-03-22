import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ConnexionScreen from "../screens/ConnexionScreen";
import RegisterScreen from "../screens/RegisterScreen";

const LoginStack = createStackNavigator();

export default function NavLogin() {
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
