import React, { cloneElement } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTopSection}>
        <Image
          style={styles.stretch}
          source={require("../assets/Images/logo.png")}
        />
        <View style={styles.menuConnexion}>
          <View style={styles.ButtonSlider}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ConnexionScreen")}
            >
              <Text style={styles.buttontext}>Se connecter</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={(styles.ButtonSlider, styles.ButtonSliderOn)}>
              <TouchableOpacity onPress={() => console.log("ButtonPressed")}>
                <Text style={styles.buttontext}>S'inscrire</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerBottomSection}></View>
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
    height: "45%",
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
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
    bottom: "12%",
  },
  ButtonSlider: {
    backgroundColor: "#FFFFFF",
    fontSize: 50,
    marginBottom: 5,
  },
  ButtonSliderOn: {
    borderStyle: "solid",
    borderBottomWidth: 5,
    borderBottomColor: "#F29B13",
  },
  buttontext: {
    fontFamily: "Cochin",
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
