import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MyReservationsScreen from "../screens/AppScreens/Myplates/MyReservationsScreen";
import MyDishesOnMarketScreen from "../screens/AppScreens/Myplates/MyDishesOnMarketScreen";
import NewPlatesScreen from "../screens/AppScreens/Myplates/NewPlatesScreen";
import DetailReservationScreen from "../screens/AppScreens/Myplates/DetailReservationScreen";
import CameraScreen from "../screens/AppScreens/Myplates/CameraScreen";

const MyPlatestStack = createStackNavigator();

function NavPlates() {
  return (
    <MyPlatestStack.Navigator screenOptions={{ headerShown: false }}>
      <MyPlatestStack.Screen
        name="MyReservationsScreen"
        component={MyReservationsScreen}
      />
      <MyPlatestStack.Screen
        name="MyDishesOnMarketScreen"
        component={MyDishesOnMarketScreen}
      />
      <MyPlatestStack.Screen
        name="NewPlatesScreen"
        component={NewPlatesScreen}
      />
      <MyPlatestStack.Screen
        mode="modal"
        name="DetailReservationScreen"
        component={DetailReservationScreen}
      />
      <MyPlatestStack.Screen
        mode="modal"
        name="CameraScreen"
        component={CameraScreen}
      />
    </MyPlatestStack.Navigator>
  );
}
export default NavPlates;
