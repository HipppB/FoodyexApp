import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ReceivingMessage from "../Messages/ReceivingMessage";
import SendingMessage from "../Messages/SendingMessage";
function MessageComponent(props) {
  if (props.UserViewingId == props.message.item.IDFrom) {
    return (
      <View style={{ marginTop: 10 }}>
        <SendingMessage message={props.message.item} />
      </View>
    );
  }
  return (
    <View style={{ marginTop: 10 }}>
      <ReceivingMessage message={props.message.item} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default MessageComponent;
