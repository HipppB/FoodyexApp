import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyReservationsScreen from "../screens/AppScreens/Myplates/MyReservationsScreen";
import MyDishesOnMarketScreen from "../screens/AppScreens/Myplates/MyDishesOnMarketScreen";
import NewPlatesScreen from "../screens/AppScreens/Myplates/NewPlatesScreen";
import MyPlatesScreen from "../screens/AppScreens/MyPlatesScreen";

const MyPlatestStack = createStackNavigator();

export default function NavPlates() {
  return (
    <MyPlatestStack.Navigator screenOptions={{ headerShown: false }}>
      <MyPlatestStack.Screen
        name="MyPlatesScreen"
        component={MyPlatesScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <MyPlatestStack.Screen
        name="MyReservationsScreen"
        component={MyReservationsScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <MyPlatestStack.Screen
        name="MyDishesOnMarketScreen"
        component={MyDishesOnMarketScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <MyPlatestStack.Screen
        name="NewPlatesScreen"
        component={NewPlatesScreen}
        options={{
          animationEnabled: true,
        }}
      />
    </MyPlatestStack.Navigator>
  );
}
