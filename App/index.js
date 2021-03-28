import React, { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Import Des sous navigators
import Loadingscreen from "../screens/LoadingScreen";
import LoginNavigator from "./LoginNavigator";
import MenuNavigator from "./MenuNavigator";

//Import Page de test sur laquelle je travaille actuellement
import PageTest from "../screens/AppScreens/Modales/ReserverModale";

//Global State
import AppContext from "../components/AppContext";

const AppStack = createStackNavigator();
function App() {
  //GlobalState
  const [HeaderBar, setHeaderBarActive] = useState(false);
  const [HeaderBarLogin, setHeaderBarLoginActive] = useState(false);
  const [isLoading, LoadFinished] = useState(true);
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const Parameters = {
    IsStillLoading: isLoading,
    UserLogged: isLoggedIn,
    IsHeaderBar: HeaderBar,
    IsHeaderBarLogin: HeaderBarLogin,
    setHeaderBarActive,
    setHeaderBarLoginActive,
    LoadFinished,
    SetIsLoggedIn,
  };

  return (
    <AppContext.Provider value={Parameters}>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          {isLoading ? (
            <AppStack.Screen
              name="LoadingScreen"
              component={Loadingscreen}
              options={{
                animationEnabled: false,
              }}
            />
          ) : !isLoggedIn ? (
            <AppStack.Screen
              name="LoginNavigator"
              component={LoginNavigator}
              options={{
                animationEnabled: true,
              }}
            />
          ) : (
            <>
              <AppStack.Screen
                name="MenuNavigator"
                component={MenuNavigator}
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
            </>
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
