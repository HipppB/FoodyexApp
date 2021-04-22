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

function PublicProfileScreen({ navigation }) {
  return (
    <View style={StyleLowerMenu.container}>
      <SafeAreaView style={StyleLowerMenu.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ marginLeft: 15 }}
            source={require("../../../assets/Images/chevron-left.png")}
          />
          <Text style={StyleLowerMenu.title}>Profil de Nom Prénom</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={StyleLowerMenu.containerbottom}>
        <View style={StyleProfile.container}>
          <Image
            style={StyleProfile.Image}
            source={{ uri: "https://randomuser.me/api/portraits/men/99.jpg" }}
          />
          <Text style={StyleProfile.Name}>Prénom Nom</Text>
          <ScrollView>
            <Text style={StyleProfile.section}>Adresse e-mail</Text>
            <Text style={StyleProfile.contenu}>email</Text>
            <Text style={StyleProfile.section}>Numéro de téléphone :</Text>
            <Text style={StyleProfile.contenu}>## ## ## ## ##</Text>
            <Text style={StyleProfile.section}>Promotion :</Text>
            <Text style={StyleProfile.contenu}>Non définie</Text>
            <Text style={StyleProfile.section}>Courte présentation :</Text>
            <Text style={StyleProfile.contenu}>
              description{"\n"}description description{"\n"}description
              description{"\n"}description description{"\n"}description
            </Text>
          </ScrollView>
          <TouchableOpacity
            style={styleForms.button}
            onPress={() =>
              alert("Vous ne pouvez pas encore modifier votre profil !")
            }
          >
            <Text style={styleForms.buttontext}>Modifier</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styleForms = StyleSheet.create({
  button: {
    alignSelf: "center",
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
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    top: "5%",
    flex: 0.95,
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
    width: "100%",
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
export default PublicProfileScreen;
