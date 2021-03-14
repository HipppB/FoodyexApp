import React, { cloneElement } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

export default function AccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTopSection}>
        <View style={styles.menuConnexion}>
          <TouchableOpacity onPress={() => navigation.push("MyPlatesScreen")}>
            <View style={styles.ButtonSlider}>
              <Text style={styles.buttontext}>Mes Plats</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("MarketScreen")}>
            <View style={styles.ButtonSlider}>
              <Text style={styles.buttontext}>Le Marché</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("ButtonPressed")}>
            <View style={(styles.ButtonSlider, styles.ButtonSliderOn)}>
              <Text style={styles.buttontext}>Mon Compte</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.containerBottomSection}>
        <Text style={styleMenuButton.solde}>Solde : 13 ‡</Text>
        <TouchableOpacity
          onPress={() => alert("To do")}
          style={styleMenuButton.container}
        >
          <Text style={styleMenuButton.texte}>Mon profil</Text>
          <Image
            style={styleMenuButton.chevron}
            source={require("../../assets/Images/chevron-left.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("To do")}
          style={styleMenuButton.container}
        >
          <Text style={styleMenuButton.texte}>Messages</Text>
          <Image
            style={styleMenuButton.chevron}
            source={require("../../assets/Images/chevron-left.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("To do")}
          style={styleMenuButton.container}
        >
          <Text style={styleMenuButton.texte}>Historique</Text>
          <Image
            style={styleMenuButton.chevron}
            source={require("../../assets/Images/chevron-left.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("To do")}
          style={styleMenuButton.container}
        >
          <Text style={styleMenuButton.texte}>Déconnexion</Text>
          <Image
            style={styleMenuButton.chevron}
            source={require("../../assets/Images/chevron-left.png")}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styleMenuButton = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: 60,
    width: "100%",
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texte: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
  },
  solde: {
    position: "absolute",
    alignSelf: "center",
    top: -40,
    fontFamily: "Roboto-Thin",
    fontSize: 18,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    flex: 1,
    flexDirection: "column", //horizontal
    justifyContent: "flex-start", //main axis
    alignItems: "center", //secondary axis
  },
  containerTopSection: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "10%",
    flexShrink: 1,
    alignContent: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6.27,
  },

  containerBottomSection: {
    backgroundColor: "#F9F9F9",
    width: "100%",
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  stretch: {
    width: 250,
    height: 250,
    resizeMode: "stretch",
    bottom: "5%",
  },
  ButtonSlider: {
    backgroundColor: "#FFFFFF",
    marginBottom: 5,
  },
  ButtonSliderOn: {
    borderStyle: "solid",
    borderBottomWidth: 5,
    borderBottomColor: "#F29B13",
  },
  buttontext: {
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    fontSize: 18,
  },
  menuConnexion: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    zIndex: 1,
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
  },
});
