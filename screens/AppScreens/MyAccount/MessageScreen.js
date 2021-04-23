import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import SousPageFormatComponent from "../../../components/SousPageFormatComponent";

import MessageComponent from "../../../components/Messages/MessageComponent";
import GetMessages from "../../../data/GetMessages";

import { useContext } from "react";
import AppContext from "../../../components/AppContext";

function MessageScreen(props) {
  const TheContext = useContext(AppContext);
  const [Messages, updateMessages] = useState(
    GetMessages({ IdFrom: 2, IdTo: TheContext.loggedUserId })
  );
  return (
    <SousPageFormatComponent
      params={{ title: "Message avec " + "Nom" + " " + "Prénom" }}
      navigation={props.navigation}
      scrollable={false}
      morestyle={{ height: "91%" }}
    >
      <KeyboardAvoidingView
        KeyboardAvoidingView
        enabled
        style={{ height: "100%" }}
        behavior={Platform.OS == "ios" ? "position" : "height"}
        keyboardVerticalOffset={40}
      >
        <FlatList
          refreshing={false}
          onRefresh={() =>
            updateMessages(
              GetMessages({ IdFrom: 2, IdTo: TheContext.loggedUserId })
            )
          }
          style={{ height: "88%", paddingBottom: 20 }}
          data={Messages}
          renderItem={(data) => (
            <MessageComponent
              message={data}
              UserViewingId={TheContext.loggedUserId}
            />
          )}
          keyExtractor={(item) => item.index}
          key={Messages}
          contentContainerStyle={{ flex: 1, justifyContent: "flex-end" }}
        />

        <View style={styles.InputMessage}>
          <TextInput style={styles.Input} placeholder="Envoyer un Message" />
        </View>
      </KeyboardAvoidingView>
    </SousPageFormatComponent>
  );
}

const styles = StyleSheet.create({
  InputMessage: {
    height: 45,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  Input: {
    margin: 5,
    marginHorizontal: 10,
    fontSize: 18,
    height: 35,
    fontFamily: "Roboto-Regular",
  },
});

export default MessageScreen;
