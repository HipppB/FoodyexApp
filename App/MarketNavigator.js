import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MarketScreen from "../screens/AppScreens/MarketScreen";
import PlateDetailsScreen from "../screens/AppScreens/TheMarket/PlateDetailsScreen";
import PublicProfileScreen from "../screens/AppScreens/TheMarket/PublicProfileScreen";

//For context :
import { useContext } from "react";
import AppContext from "../components/AppContext";

const MarketStack = createStackNavigator();
function NavMarket({ route }) {
  //Global Context:
  const TheContext = useContext(AppContext);
  return (
    <MarketStack.Navigator screenOptions={{ headerShown: false }}>
      <MarketStack.Screen
        name="MarketScreen"
        component={MarketScreen}
        options={{
          animationEnabled: true,
        }}
        screenOptions={{ headerShown: true }}
      />
      <MarketStack.Screen
        name="PlateDetailsScreen"
        component={PlateDetailsScreen}
        options={{
          animationEnabled: true,
          headerShown: false,
        }}
      />
      <MarketStack.Screen
        name="PublicProfileScreen"
        component={PublicProfileScreen}
        options={{
          animationEnabled: true,
        }}
        screenOptions={{ headerShown: false }}
      />
    </MarketStack.Navigator>
  );
}

export default NavMarket;
