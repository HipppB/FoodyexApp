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

let user;
export default function PublicProfileScreen({ navigation, route }) {
  user = route.params.user;
  const [modalContactVisible, setContactModalVisible] = useState(false);
  return (
    <View style={StyleLowerMenu.container}>
      <SafeAreaView style={StyleLowerMenu.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ marginLeft: 15 }}
            source={require("../../../assets/Images/chevron-left.png")}
          />
          <Text style={StyleLowerMenu.title}>
            Profil de {user["prenom"]} {user["nom"]}{" "}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={StyleLowerMenu.containerbottom}>
        <ContacterModale
          Visible={modalContactVisible}
          ChangeVisibility={setContactModalVisible}
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
            onPress={() => setContactModalVisible(true)}
          >
            <Text style={styleForms.buttontext}>Contacter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F6F6F9",
  },
  containerHeader: {},
  containerbottom: {
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
    marginVertical: "20%",
  },
  chevron: {},
  title: {
    position: "absolute",
    alignSelf: "center",
    top: 2,
    fontFamily: "Roboto-Thin",
    fontSize: 18,
  },
});
