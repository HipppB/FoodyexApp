import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Import Des sous navigators
import Loadingscreen from "../screens/LoadingScreen";
import NavLogin from "./LoadingNavigator";
import NavMenu from "./MenuNavigator";

//Import Page de test sur laquelle je travaille actuellement
import PageTest from "../screens/AppScreens/Modales/ReserverModale";

const AppStack = createStackNavigator();
export default function App() {
  const [isLoading, LoadFinished] = useState(true);
  return (
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
        <AppStack.Screen
          name="PageTest"
          component={PageTest}
          options={{
            animationEnabled: true,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
