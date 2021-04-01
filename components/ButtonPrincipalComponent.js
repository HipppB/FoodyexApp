import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function ButtonPrincipalComponent({ children, MinWidth }) {
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      minWidth: MinWidth,
      backgroundColor: "#F29B13",
      padding: 10,
      paddingHorizontal: 15,
      borderRadius: 20,
      alignSelf: "center",
    },
    text: {
      color: "#FFFFFF",
    },
  });
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

export default ButtonPrincipalComponent;
