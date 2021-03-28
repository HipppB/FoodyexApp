import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

//For context :
import { useContext } from "react";
import AppContext from "./AppContext";

function SousPageFormatComponent({
  navigation,
  children,
  params,
  morestyle = {},
}) {
  //Global Context:
  const TheContext = useContext(AppContext);

  return (
    <View style={StyleLowerMenu.container}>
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
    </View>
  );
}

const StyleLowerMenu = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F6F6F9",
  },
  containerHeader: {},
  containerbottom: {},
  chevron: {},
  title: {},
});
export default SousPageFormatComponent;
