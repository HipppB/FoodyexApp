import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PlateDetailsScreen from "../screens/AppScreens/TheMarket/PlateDetailsScreen";
import PublicProfileScreen from "../screens/AppScreens/TheMarket/PublicProfileScreen";

//For context :
import { useContext } from "react";
import AppContext from "../components/AppContext";

const MarketStack = createStackNavigator();
function NavMarket(props) {
  //Global Context:
  const TheContext = useContext(AppContext);
  return (
    <MarketStack.Navigator params={props}>
      <MarketStack.Screen
        name="PlateDetailsScreen"
        initialParams={{ parameters: props.route.params }}
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
          headerShown: false,
        }}
        screenOptions={{ headerShown: false }}
      />
    </MarketStack.Navigator>
  );
}

export default NavMarket;
