import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
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
      <View style={{ height: "97%" }}>
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

        <View
          style={{
            height: 45,
            borderRadius: 10,
            width: "100%",
            backgroundColor: "#FFFFFF",
          }}
        ></View>
      </View>
    </SousPageFormatComponent>
  );
}

const styles = StyleSheet.create({});

export default MessageScreen;
