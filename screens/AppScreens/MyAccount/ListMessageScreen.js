import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Directions } from "react-native-gesture-handler";

export default function ListMessageScreen({ navigation }) {
  return (
    <View style={StyleLowerMenu.container}>
      <SafeAreaView style={StyleLowerMenu.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ marginLeft: 15 }}
            source={require("../../../assets/Images/chevron-left.png")}
          />
          <Text style={StyleLowerMenu.title}>Messages</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={StyleLowerMenu.containerbottom}></View>
    </View>
  );
}

function ItemMessage(data) {
  let prenom = data["prenom"];
  let nom = data["nom"];
  let id = data["id"];
  let content = data["content"];
  let time = data["time"];
}
const StyleLowerMenu = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F6F6F9",
  },
  containerHeader: {},
  chevron: {
    width: 25,
    height: 25,
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    top: 2,
    fontFamily: "Roboto-Thin",
    fontSize: 18,
  },
  containerbottom: {
    backgroundColor: "red",
    flex: 1,
    marginHorizontal: "3%",
    marginTop: 20,
  },
});
