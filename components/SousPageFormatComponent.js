import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import Constants from "expo-constants";
//For context :
import { useContext } from "react";
import AppContext from "./AppContext";

function SousPageFormatComponent({
  navigation,
  children,
  params,
  morestyle = {},
  scrollable = false,
}) {
  let ViewArea = View;
  if (scrollable) {
    ViewArea = ScrollView;
  }
  //Global Context:
  const TheContext = useContext(AppContext);
  console.log(Constants.statusBarHeight);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRefreshing(false);
  }, []);
  return (
    <ViewArea
      style={StyleLowerMenu.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SafeAreaView style={StyleLowerMenu.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ marginLeft: 15 }}
            source={require("../assets/Images/chevron-left.png")}
          />
          <Text
            style={{
              position: "absolute",
              alignSelf: "center",
              top: 2,
              fontFamily: "Roboto-Thin",
              fontSize: 18,
            }}
          >
            {params.title}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={morestyle}>{children}</View>
    </ViewArea>
  );
}

const StyleLowerMenu = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F6F6F9",
  },
  containerHeader: { marginTop: Constants.statusBarHeight },
  containerbottom: {
    flex: 2,
    backgroundColor: "red",
  },
  chevron: {},
  title: {},
});
export default SousPageFormatComponent;
