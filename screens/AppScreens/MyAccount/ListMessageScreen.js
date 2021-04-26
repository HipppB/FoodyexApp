import React, { useContext } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import ListMessage from "../../../data/messages.json";
import * as users from "../../../data/utilisateurs.json";
import SousPageFormatComponent from "../../../components/SousPageFormatComponent";
import GetConversations from "../../../data/GetConversations";
import AppContext from "../../../components/AppContext";

let idUserLoggedIn = 1;
function ListMessageScreen({ navigation }) {
  const TheContext = useContext(AppContext);
  let ListConversations = GetConversations({
    idImplied: TheContext.loggedUserId,
  });
  let FinConversations = [];
  console.log("#####");
  for (const key in ListConversations) {
    let lastmessage = ListConversations[key][0];
    for (const message of ListConversations[key]) {
      if (message.time >= lastmessage.time) {
        lastmessage = message;
      }
    }
    FinConversations.push(lastmessage);
  }

  return (
    <SousPageFormatComponent
      params={{ title: "Messages" }}
      navigation={navigation}
      morestyle={{}}
    >
      <FlatList
        style={{ height: "100%" }}
        refreshing={false}
        onRefresh={() => console.log("refreshed")}
        data={FinConversations}
        initialNumToRender={1}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={(item) => (
          <ItemMessage
            item={item}
            navigation={navigation}
            ListConversations={ListConversations}
          />
        )}
        ListFooterComponent={<View style={{ height: 100 }}></View>}
      />
    </SousPageFormatComponent>
  );
}

function ItemMessage(props) {
  const TheContext = useContext(AppContext);
  let IDTo = props.item.item["IDTo"];
  let IDFrom = props.item.item["IDFrom"];
  let content = props.item.item["message"];
  let time = new Date(props.item.item["time"]);
  let user;
  if (IDTo == TheContext.loggedUserId) {
    user = users[IDFrom];
  } else {
    user = users[IDTo];
  }

  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("MessageScreen", {
          IDImplied: user["ID"],
          data: props.item.item,
          user,
          conversation: props.ListConversations[user["ID"].toString()],
        })
      }
    >
      <View style={StyleMessage.Vendeur}>
        <Image
          style={StyleMessage.PhotoProfil}
          source={{
            uri: user["photo"],
          }}
        />
        <View style={StyleMessage.IdentiteTexte}>
          <Text style={StyleMessage.Identite}>
            {user["prenom"]} {user["nom"]}
          </Text>
          <Text style={StyleMessage.IdentiteDesc} numberOfLines={2}>
            {content}
          </Text>
          <Text style={StyleMessage.IdentiteDesc} numberOfLines={1}>
            {time.toString()}
          </Text>
        </View>
        <Image
          style={StyleMessage.chevron}
          source={require("../../../assets/Images/chevron-right.png")}
        />
      </View>
    </TouchableOpacity>
  );
}

const StyleMessage = StyleSheet.create({
  Vendeur: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    borderRadius: 20,
    marginVertical: 20,
    paddingRight: 25,
    marginBottom: 0,
    marginTop: 15,
  },
  PhotoProfil: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 10,
  },
  IdentiteTexte: {
    width: "80%",
    alignContent: "flex-end",
    alignSelf: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  Identite: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
  },
  IdentiteDesc: {
    fontFamily: "Roboto-Regular",
    opacity: 0.5,
    paddingRight: 10,
    paddingTop: 4,
  },
});

export default ListMessageScreen;
