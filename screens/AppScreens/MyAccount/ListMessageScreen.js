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
let id = 10;
function ListMessageScreen({ navigation }) {
  return (
    <View style={StyleLowerMenu.container}>
      <SafeAreaView style={StyleLowerMenu.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ marginLeft: 15 }}
            source={require("../../../assets/Images/chevron-left.png")}
          />
          <Text style={StyleLowerMenu.title}>Messages</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView style={StyleLowerMenu.containerbottom}>
        {ItemMessage(ListMessage[id])}
        {ItemMessage(ListMessage[id + 1])}

        {ItemMessage(ListMessage[id + 2])}

        {ItemMessage(ListMessage[id + 3])}

        {ItemMessage(ListMessage[id + 4])}

        {ItemMessage(ListMessage[id + 5])}

        {ItemMessage(ListMessage[id + 6])}

        {ItemMessage(ListMessage[id + 7])}

        {ItemMessage(ListMessage[id + 8])}

        {ItemMessage(ListMessage[id + 9])}
      </ScrollView>
    </View>
  );
}

function ItemMessage(data) {
  let IDTo = data["IDTo"];
  let IDFrom = data["IDFrom"];
  let content = data["message"];
  let time = data["time"];

  return (
    <TouchableOpacity onPress={() => alert("La fonction arrive bientôt !")}>
      <View style={StyleMessage.Vendeur}>
        <Image
          style={StyleMessage.PhotoProfil}
          source={{
            uri: users[IDFrom]["photo"],
          }}
        />
        <View style={StyleMessage.IdentiteTexte}>
          <Text style={StyleMessage.Identite}>
            {users[IDFrom]["prenom"]} {users[IDFrom]["nom"]}
          </Text>
          <Text style={StyleMessage.IdentiteDesc} numberOfLines={2}>
            {users[IDFrom]["description"]}
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
const StyleLowerMenu = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "#F6F6F9",
  },
  containerHeader: {},
  chevron: {
    width: 25,
    height: 25,
  },
  title: {
    position: "absolute",
    alignSelf: "center",
    top: 2,
    fontFamily: "Roboto-Thin",
    fontSize: 18,
  },
  containerbottom: {
    flex: 1,
    marginHorizontal: "3%",
    marginTop: 20,
    paddingBottom: 150,
  },
});

export default ListMessageScreen;
