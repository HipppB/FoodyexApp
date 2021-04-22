import React from "react";
import { StyleSheet, View } from "react-native";
import Messages from "./messages.json";
function GetMessages(props) {
  console.log(props);
  let Wantedmessages = [];
  for (const Message in Messages) {
    if (
      (Messages[Message]["IDTo"] == props.IdTo &&
        Messages[Message]["IDFrom"] == props.IdFrom) ||
      (Messages[Message]["IDTo"] == props.IdFrom &&
        Messages[Message]["IDFrom"] == props.IdTo)
    ) {
      Wantedmessages.push(Messages[Message]);
    }
  }
  console.log(Wantedmessages);

  //Returns All Wanted message in the form of an Array [{Object}, {Object}]
  return Wantedmessages;
}

const styles = StyleSheet.create({});

export default GetMessages;
