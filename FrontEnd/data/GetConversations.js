import React from "react";
import { StyleSheet, View } from "react-native";
import Messages from "./messages.json";

//Id Implied = Id logged user
function GetConversations({ idImplied }) {
  let Wantedmessages = {};
  for (const Message in Messages) {
    let OtherUserImplied;
    if (
      Messages[Message]["IDTo"] == idImplied ||
      Messages[Message]["IDFrom"] == idImplied
    ) {
      if (Messages[Message]["IDTo"] == idImplied) {
        OtherUserImplied = Messages[Message]["IDFrom"];
      } else {
        OtherUserImplied = Messages[Message]["IDTo"];
      }
      if (OtherUserImplied in Wantedmessages) {
        Wantedmessages[OtherUserImplied.toString()].push(Messages[Message]);
      } else {
        Wantedmessages[OtherUserImplied] = [Messages[Message]];
      }
    }
  }

  return Wantedmessages;
  //Returns All Wanted message in the form of an object { "IdOtherUser" : [List messages], "IdOtherUser" : [List messages],}
}

const styles = StyleSheet.create({});

export default GetConversations;
