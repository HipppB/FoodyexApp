import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AppScreens/AccountScreen";
import MyProfileScreen from "../screens/AppScreens/MyAccount/MyProfileScreen";
import HistoryScreen from "../screens/AppScreens/MyAccount/HistoryScreen";
import ListMessageScreen from "../screens/AppScreens/MyAccount/ListMessageScreen";

const AccountStack = createStackNavigator();
export default function NavAccount() {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <AccountStack.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <AccountStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <AccountStack.Screen
        name="ListMessageScreen"
        component={ListMessageScreen}
        options={{
          animationEnabled: true,
        }}
      />
    </AccountStack.Navigator>
  );
}
