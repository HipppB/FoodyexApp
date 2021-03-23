import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function NewPlatesScreen({ navigation }) {
  return (
    <View style={StyleLowerMenu.container}>
      <SafeAreaView style={StyleLowerMenu.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ marginLeft: 15 }}
            source={require("../../../assets/Images/chevron-left.png")}
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
            Page Under Construction
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={StyleLowerMenu.containerbottom}></View>
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
