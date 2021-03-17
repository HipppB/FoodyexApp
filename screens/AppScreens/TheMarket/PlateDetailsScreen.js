import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import * as users from "../../../data/utilisateurs.json";

let PartIndividuelle = Boolean;
let iduser;
export default function PlateDetailsScreen({ navigation, route }) {
  if (route.params.selected["PartIndividuelle"]) {
    PartIndividuelle = "Oui";
  } else {
    PartIndividuelle = "Non";
  }
  iduser = route.params.selected["IDVendeur"];
  return (
    <View style={StyleLowerMenu.container}>
      <SafeAreaView style={StyleLowerMenu.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ marginLeft: 15 }}
            source={require("../../../assets/Images/chevron-left.png")}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={StyleLowerMenu.containerbottom}>
        <Image
          style={StyleDetailsPlat.Image}
          source={route.params.selectedimage}
        />
        <Text style={StyleDetailsPlat.NomPlat}>
          {route.params.selected["Nom"]}
        </Text>
        <Text style={StyleDetailsPlat.Prix}>
          {route.params.selected["prixUnePart"]} ‡
        </Text>
        <ScrollView style={StyleDetailsPlat.Scrollview}>
          <View style={StyleDetailsPlat.Details}>
            <Text style={StyleDetailsPlat.Section}>Description du plat</Text>
            <Text style={StyleDetailsPlat.Infos}>
              {route.params.selected["Description"]}
              {route.params.selected["Description"]}
            </Text>
            <Text style={StyleDetailsPlat.Section}>
              Nombre de portions disponible
            </Text>
            <Text style={StyleDetailsPlat.Infos}>
              {route.params.selected["NombrePart"]}
            </Text>
            <Text style={StyleDetailsPlat.Section}>Portions individuelles</Text>
            <Text style={StyleDetailsPlat.Infos}>{PartIndividuelle}</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.push("PublicProfileScreen", { user: users[iduser] })
            }
          >
            <View style={StyleDetailsPlat.Vendeur}>
              <Image
                style={StyleDetailsPlat.PhotoProfil}
                source={{
                  uri: users[iduser]["photo"],
                }}
              />
              <View style={StyleDetailsPlat.IdentiteTexte}>
                <Text style={StyleDetailsPlat.Identite}>
                  {users[iduser]["prenom"]} {users[iduser]["nom"]}
                </Text>
                <Text style={StyleDetailsPlat.IdentiteDesc} numberOfLines={3}>
                  {users[iduser]["description"]}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vel dolor nibh. Nam molestie ornare lacus. [...]
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <View style={styleForms.Buttoncontainer}>
          <TouchableOpacity
            style={styleForms.button}
            onPress={() => alert("Todo")}
          >
            <Text style={styleForms.buttontext}>Contacter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styleForms.button}
            onPress={() => alert("Todo")}
          >
            <Text style={styleForms.buttontext}>Réserver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const StyleLowerMenu = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F6F6F9",
  },
  containerHeader: {},
  containerbottom: {
    paddingTop: 0,
    marginHorizontal: "0%",
    flex: 1,
  },
  chevron: {},
  title: {},
});

const StyleDetailsPlat = StyleSheet.create({
  Image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    alignSelf: "center",
  },
  NomPlat: {
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontSize: 28,
    marginTop: "5%",
  },
  Prix: {
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontSize: 22,
    marginTop: "4%",
    color: "#FA4A0C",
  },
  Details: { justifyContent: "flex-end", marginHorizontal: "5%" },
  Section: {
    fontFamily: "Roboto-Bold",
    fontSize: 17,
    paddingTop: 20,
    paddingBottom: 6,
  },
  Infos: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    opacity: 0.5,
  },
  Vendeur: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 20,
    marginVertical: 20,
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
  },
  Scrollview: {
    paddingBottom: 20,
    marginBottom: 20,
  },
});

const styleForms = StyleSheet.create({
  Buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  button: {
    alignSelf: "center",
    bottom: 30,
    marginTop: 20,
    backgroundColor: "#F29B13",
    borderRadius: 30,
    width: 150,
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
