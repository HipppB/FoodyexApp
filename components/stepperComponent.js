import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
} from "react-native";

function StepperComponent({ width = "25%", after = "", placeholder = "" }) {
  const [stepper, valuestepper] = useState(1);
  function changevalue(step) {
    if (stepper + step > -1) {
      valuestepper(stepper + step);
    }
  }
  let stylecontainer = {
    container: {
      flexDirection: "row",
      backgroundColor: "#F29B13",
      alignContent: "center",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "100%",
      height: 30,
      borderRadius: 30,
      zIndex: 10,
    },
  };
  return (
    <View style={{ width: width, flexDirection: "column" }}>
      <View
        style={{
          alignSelf: "center",
          alignItems: "center",
          marginBottom: 5,
        }}
      >
        <Text
          numberOfLines={1}
          style={{
            opacity: 0.5,
            fontFamily: "Roboto-Regular",
            fontSize: 15,
            width: "120%",
          }}
        >
          {placeholder}
        </Text>
      </View>
      <View style={stylecontainer.container}>
        <Pressable style={Stylestepper.button} onPress={() => changevalue(-1)}>
          <Text style={Stylestepper.text}>-</Text>
        </Pressable>
        <Text style={Stylestepper.text}>
          {stepper}
          {after}
        </Text>
        <Pressable style={Stylestepper.button} onPress={() => changevalue(1)}>
          <Text style={Stylestepper.text}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const Stylestepper = StyleSheet.create({
  text: {
    lineHeight: 25,
    textAlignVertical: "center",
    fontSize: 15,
    color: "#F4F4F7",
    fontFamily: "Roboto-Bold",
    zIndex: 10,
  },
  button: {
    fontSize: 25,
    flex: 1,
    alignItems: "center",
    zIndex: 10,
  },
});
export default StepperComponent;
