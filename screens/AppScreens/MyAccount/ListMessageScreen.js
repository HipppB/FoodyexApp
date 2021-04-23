import React from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import ListMessage from "../../../data/messages.json";
import * as users from "../../../data/utilisateurs.json";
import SousPageFormatComponent from "../../../components/SousPageFormatComponent";
let id = 10;
function ListMessageScreen({ navigation }) {
  return (
    <SousPageFormatComponent
      params={{ title: "Messages" }}
      navigation={navigation}
    >
      <ScrollView>
        {ItemMessage(ListMessage[id], navigation)}
        {ItemMessage(ListMessage[id + 1], navigation)}

        {ItemMessage(ListMessage[id + 2], navigation)}

        {ItemMessage(ListMessage[id + 3], navigation)}

        {ItemMessage(ListMessage[id + 4], navigation)}

        {ItemMessage(ListMessage[id + 5], navigation)}

        {ItemMessage(ListMessage[id + 6], navigation)}

        {ItemMessage(ListMessage[id + 7], navigation)}

        {ItemMessage(ListMessage[id + 8], navigation)}

        {ItemMessage(ListMessage[id + 9], navigation)}
      </ScrollView>
    </SousPageFormatComponent>
  );
}

function ItemMessage(data, navigation) {
  let IDTo = data["IDTo"];
  let IDFrom = data["IDFrom"];
  let content = data["message"];
  let time = data["time"];
  let user = users[IDFrom];
  console.log("---");
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MessageScreen", { IDFrom, data, user })
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
            {user["description"]}
          </Text>
          <Text style={StyleMessage.IdentiteDesc} numberOfLines={1}>
            {time}
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
