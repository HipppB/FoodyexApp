import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function ReceivingMessage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>{props.message.message}</Text>
      </View>
      <Image
        style={styles.tail}
        source={require("../../assets/Images/TailGray.png")}
      />
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
  text: {
    fontFamily: "Inter-Regular",
    fontSize: 15,
    color: "#000000",
    padding: 2,
    maxWidth: "90%",
  },
  tail: { width: 22, height: 23, position: "absolute", left: -1, bottom: -4 },
});

export default ReceivingMessage;
