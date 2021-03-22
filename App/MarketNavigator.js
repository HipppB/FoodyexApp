import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MarketScreen from "../screens/AppScreens/MarketScreen";
import PlateDetailsScreen from "../screens/AppScreens/TheMarket/PlateDetailsScreen";
import PublicProfileScreen from "../screens/AppScreens/TheMarket/PublicProfileScreen";

const MarketStack = createStackNavigator();
export default function NavMarket() {
  return (
    <MarketStack.Navigator screenOptions={{ headerShown: false }}>
      <MarketStack.Screen
        name="MarketScreen"
        component={MarketScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <MarketStack.Screen
        name="PlateDetailsScreen"
        component={PlateDetailsScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <MarketStack.Screen
        name="PublicProfileScreen"
        component={PublicProfileScreen}
        options={{
          animationEnabled: true,
        }}
      />
    </MarketStack.Navigator>
  );
}
