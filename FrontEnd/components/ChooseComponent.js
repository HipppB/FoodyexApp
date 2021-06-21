import React from "react";

import RadioButtonRN from "radio-buttons-react-native";
import { View, StyleSheet } from "react-native";

function ChooseComponent({ values = ["Oui", "Non"] }) {
  const data = [
    {
      label: "  Oui",
      value: true,
    },
    {
      label: "  Non",
      value: false,
    },
  ];
  return (
    <View style={styles.container}>
      <RadioButtonRN
        initial={1}
        data={data}
        box={false}
        activeColor="#FA4A0C"
        circleSize={10}
        textStyle={{
          opacity: 0.6,
          fontFamily: "Roboto-Regular",
        }}
        selectedBtn={(data) => console.log(data.value)}
        style={{
          left: 15,
          top: -10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "20%",
  },
});
export default ChooseComponent;
