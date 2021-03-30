import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import ContacterModale from "../Modales/ContacterModale";
import SousPageFormatComponent from "../../../components/SousPageFormatComponent";
//For context :
import { useContext } from "react";
import AppContext from "../../../components/AppContext";

import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Accessing the 'state' property of the 'route' object is not supported. If you want to get the focused route name, use the 'getFocusedRouteNameFromRoute' helper instead: https://reactnavigation.org/docs/screen-options-resolution/#setting-parent-screen-options-based-on-child-navigators-state",
]);

let user;
export default function PublicProfileScreen({ navigation, route }) {
  //Global Context:
  const TheContext = useContext(AppContext);

  user = route.params.user;
  return (
    <SousPageFormatComponent
      params={{ title: "Profil de " + user["prenom"] + " " + user["nom"] }}
      navigation={navigation}
      morestyle={StyleLowerMenu.containerbottom}
    >
      <ContacterModale
        Visible={TheContext.IsModalContactShown}
        SellerFirstName={user["prenom"]}
        SellerName={user["nom"]}
        Plat={route.params.Plat}
      />
      <View style={StyleProfile.container}>
        <Image style={StyleProfile.Image} source={{ uri: user["photo"] }} />
        <Text style={StyleProfile.Name}>
          {user["prenom"]} {user["nom"]}
        </Text>
        <Text style={StyleProfile.section}>Adresse e-mail</Text>
        <Text style={StyleProfile.contenu}>{user["email"]}</Text>
        <Text style={StyleProfile.section}>Courte présentation :</Text>
        <Text style={StyleProfile.contenu}>{user["description"]}</Text>
        <TouchableOpacity
          style={styleForms.button}
          onPress={() => TheContext.SetModalContactShown(true)}
        >
          <Text style={styleForms.buttontext}>Contacter</Text>
        </TouchableOpacity>
      </View>
    </SousPageFormatComponent>
  );
}

const styleForms = StyleSheet.create({
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    backgroundColor: "#F29B13",
    borderRadius: 30,
    width: 200,
    height: 55,
  },
  buttontext: {
    alignSelf: "center",
    lineHeight: 55,
    color: "#F6F6F9",
    fontFamily: "Roboto-Bold",
    fontSize: 24,
    alignItems: "center",
  },
});

const StyleProfile = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    top: "5%",
    flex: 0.8,
    width: "100%",
    padding: 30,
    borderRadius: 30,
  },
  Image: {
    alignSelf: "center",
    width: 200,
    height: 200,
    borderRadius: 100,
    position: "absolute",
    top: -100,
  },
  Name: {
    marginTop: 90,
    fontFamily: "Roboto-Regular",
    fontSize: 22,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  section: {
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    opacity: 0.5,
    marginBottom: 14,
    marginTop: 22,
  },
  contenu: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
  },
});
const StyleLowerMenu = StyleSheet.create({
  containerbottom: {
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
    marginVertical: "20%",
  },
});
