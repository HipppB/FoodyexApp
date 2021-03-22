import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NavMarket from "./MarketNavigator";
import NavAccount from "./AccountNavigor";
import NavPlates from "./MyplatesNavigator";

const MenuStack = createStackNavigator();

export default function NavMenu() {
  return (
    <MenuStack.Navigator
      initialRouteName="NavMarket"
      screenOptions={{ headerShown: false }}
    >
      <MenuStack.Screen
        name="NavMarket"
        component={NavMarket}
        options={{
          animationEnabled: false,
        }}
      />
      <MenuStack.Screen
        name="NavPlates"
        component={NavPlates}
        options={{
          animationEnabled: false,
        }}
      />
      <MenuStack.Screen
        name="NavAccount"
        component={NavAccount}
        options={{
          animationEnabled: false,
        }}
      />
    </MenuStack.Navigator>
  );
}
