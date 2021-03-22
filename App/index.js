import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Import Des sous navigators
import Loadingscreen from "../screens/LoadingScreen";
import NavLogin from "./LogingNavigator";
import NavMenu from "./MenuNavigator";

//Import Page de test sur laquelle je travaille actuellement
import PageTest from "../screens/AppScreens/Modales/ReserverModale";

//Test state
const AppStack = createStackNavigator();
export default function App() {
  const [isLoading, LoadFinished] = useState(true);
  const [isLoggedIn, SetIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <AppStack.Screen
            name="LoadingScreen"
            component={Loadingscreen}
            options={{
              animationEnabled: false,
            }}
            initialParams={{ LoadFinished: LoadFinished }}
          />
        ) : !isLoggedIn ? (
          <AppStack.Screen
            name="NavLogin"
            component={NavLogin}
            options={{
              animationEnabled: false,
            }}
            initialParams={{ SetIsLoggedIn: SetIsLoggedIn }}
          />
        ) : (
          <>
            <AppStack.Screen
              name="NavMenu"
              component={NavMenu}
              options={{
                animationEnabled: false,
              }}
              initialParams={{ SetIsLoggedIn: SetIsLoggedIn }}
            />
            <AppStack.Screen
              name="PageTest"
              component={PageTest}
              options={{
                animationEnabled: true,
              }}
            />
          </>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
