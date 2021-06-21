import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

function HeaderLogin(props) {
  let { navigation, active } = props;
  let indexPage = props.navigation.dangerouslyGetState().index;
  navigator = ["Connexion", "Inscription"];
  function IsActive(Location) {
    if (indexPage === navigator.indexOf(Location)) {
      return styles.ButtonSlider, styles.ButtonSliderOn;
    } else {
      return styles.ButtonSlider;
    }
  }
  return (
    <View style={styles.containerTopSection}>
      <Image
        style={styles.stretch}
        source={require("../assets/Images/logo.png")}
      />
      <View style={styles.menuConnexion}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ConnexionScreen")}
        >
          <View style={IsActive("Connexion")}>
            <Text style={styles.buttontext}>Se connecter</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <View style={IsActive("Inscription")}>
            <Text style={styles.buttontext}>S'inscrire</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    flexDirection: "column", //horizontal
    justifyContent: "flex-start", //main axis
    alignItems: "center", //secondary axis
  },
  containerTopSection: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "40%",
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
    backgroundColor: "#F2F2F2",
    width: "100%",
    flex: 1,
    padding: 40,
  },
  stretch: {
    alignContent: "center",
    alignSelf: "center",
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  ButtonSlider: {
    backgroundColor: "#FFFFFF",
    marginBottom: 5,
    minWidth: "35%",
  },
  ButtonSliderOn: {
    minWidth: "35%",
    borderStyle: "solid",
    borderBottomWidth: 5,
    borderBottomColor: "#F29B13",
  },
  buttontext: {
    textAlign: "center",
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
export default HeaderLogin;
