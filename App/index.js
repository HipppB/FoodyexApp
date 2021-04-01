import React, { useState } from "react";
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
import AccountNavigator from "./AccountNavigor";

//Global State
import AppContext from "../components/AppContext";

const AppStack = createStackNavigator();
function App() {
  //GlobalState
  const [isLoading, LoadFinished] = useState(true);
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const [ModalContactShown, SetModalContactShown] = useState(false);
  const [ModalReserverShown, SetModalReserverShown] = useState(false);

  //Variable Accessible
  const Parameters = {
    IsStillLoading: isLoading,
    LoadFinished,
    UserLogged: isLoggedIn,
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
              //LoginScreen + RegisterScreen
              name="LoginNavigator"
              component={LoginNavigator}
              options={{
                animationEnabled: true,
              }}
            />
          ) : (
            <>
              <AppStack.Screen
                //MarketScreen + MyPlatesScreen + AccountScreen
                name="MenuNavigator"
                component={MenuNavigator}
                options={{
                  animationEnabled: true,
                }}
              />
              <AppStack.Screen
                //All Screens accessible from MyPlatesScreen
                name="PlateNavigator"
                component={NavPlates}
                options={{
                  animationEnabled: true,
                  headerShown: false,
                }}
              />
              <AppStack.Screen
                //All Screen accessible from the MarketScreen
                name="MarketNavigator"
                component={NavMarket}
                options={{
                  animationEnabled: true,
                }}
              />
              <AppStack.Screen
                //All Screen Accessible from the AccountScreen
                name="AccountNavigator"
                component={AccountNavigator}
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
