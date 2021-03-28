import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ConnexionScreen from "../screens/ConnexionScreen";
import RegisterScreen from "../screens/RegisterScreen";

const LoginStack = createStackNavigator();

function LoginNavigator(props) {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen
        name="ConnexionScreen"
        component={ConnexionScreen}
        options={{
          animationEnabled: true,
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
