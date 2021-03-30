import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Pressable,
  prompt,
  Input,
  TextInput,
} from "react-native";

function InputForm({ placeholders, type = "" }) {
  return (
    <View>
      <View style={styleForms.placeholders}>
        <Text style={styleForms.placeholdersText}>{placeholders}</Text>
        <Text style={styleFormsError.placeholders}></Text>
      </View>

      <TextInput style={styleForms.longinput} secureTextEntry={false} />
    </View>
  );
}
const styleFormsError = StyleSheet.create({
  placeholders: {
    color: "red",
    opacity: 1.5,
    paddingLeft: 10,
  },
});
const styleForms = StyleSheet.create({
  containersmall: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  containersmallinput: {
    width: "40%",
  },
  smallinput: {
    flexShrink: 1,
    height: 35,
    marginBottom: 30,
    paddingBottom: 0,
    borderBottomWidth: 0.7,
    borderBottomColor: "#000000",
  },
  smallplaceholders: {
    opacity: 0.4,
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    zIndex: 1,
  },
  longinput: {
    flexShrink: 1,
    height: 40,
    marginBottom: 30,
    paddingBottom: 0,
    borderBottomWidth: 0.7,
    borderBottomColor: "#000000",
  },
  placeholders: {
    flexDirection: "row",
  },
  placeholdersText: {
    opacity: 0.4,
    fontFamily: "Roboto-Regular",
    fontSize: 15,
  },
  buttonquestion: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: "#F29B13",
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 45,
    backgroundColor: "#F29B13",
    borderRadius: 30,
    width: 314,
    height: 70,
    justifyContent: "center",
  },
  buttontext: {
    alignSelf: "center",
    lineHeight: 70,
    color: "#F6F6F9",
    fontFamily: "Roboto-Bold",
    fontSize: 24,
    alignItems: "center",
  },
});

export default InputForm;
