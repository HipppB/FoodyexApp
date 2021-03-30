import React, { useState, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Import Des sous navigators
import Loadingscreen from "../screens/LoadingScreen";
import LoginNavigator from "./LoginNavigator";

//Tab navigator menu
import MenuNavigator from "./MenuNavigator";

//Navigators SousMenu :
import NavMarket from "./MarketNavigator";
import NavPlates from "./MyplatesNavigator";

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
  const [ModalContactShown, SetModalContactShown] = useState(false);
  const [ModalReserverShown, SetModalReserverShown] = useState(false);
  const Parameters = {
    IsStillLoading: isLoading,
    UserLogged: isLoggedIn,
    IsHeaderBar: HeaderBar,
    IsHeaderBarLogin: HeaderBarLogin,
    setHeaderBarActive,
    setHeaderBarLoginActive,
    LoadFinished,
    SetIsLoggedIn,
    IsModalContactShown: ModalContactShown,
    SetModalContactShown,
    IsModalReserverShown: ModalReserverShown,
    SetModalReserverShown,
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
                  animationEnabled: true,
                }}
              />
              <AppStack.Screen
                name="PlateNavigator"
                component={NavPlates}
                options={{
                  animationEnabled: true,
                  headerShown: false,
                }}
              />
              <AppStack.Screen
                name="MarketNavigator"
                component={NavMarket}
                options={{
                  animationEnabled: true,
                }}
              />
              <AppStack.Screen
                name="AccountNavigator"
                component={MenuNavigator}
                options={{
                  animationEnabled: true,
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
