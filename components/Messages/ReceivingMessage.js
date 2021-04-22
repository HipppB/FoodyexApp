import React from "react";
import { StyleSheet, View, Text } from "react-native";

function ReceivingMessage(props) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{props.message.message}</Text>
      <View style={styles.tail}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#E3E3E5",

    borderRadius: 20,
    padding: 10,
    alignSelf: "flex-start",
  },
  text: {},
  tail: { width: 20 },
});

export default ReceivingMessage;
