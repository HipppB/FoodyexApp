import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function SendingMessage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>{props.message.message}</Text>
      </View>
      <Image
        style={styles.tail}
        source={require("../../assets/Images/Tail.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  box: {
    backgroundColor: "#0975FD",
    borderRadius: 20,
    padding: 10,
    alignSelf: "flex-end",
    right: 6,
  },
  text: {},
  tail: {
    width: 22,
    height: 23,
    position: "absolute",
    right: 0,
    bottom: -3,
  },
});

export default SendingMessage;
