import React, { cloneElement } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";

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
      <View style={styles.containerBottomSection}></View>
    </View>
  );
}
const styleForms = StyleSheet.create({
  containersmall: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  containersmallinput: {
    width: "40%",
  },
  smallinput: {
    flexShrink: 1,
    height: 35,
    marginBottom: 30,
    paddingBottom: 0,
    borderBottomWidth: 0.7,
    borderBottomColor: "#000000",
  },
  smallplaceholders: {
    opacity: 0.4,
    fontFamily: "Roboto",
    fontSize: 15,
  },
  longinput: {
    flexShrink: 1,
    height: 35,
    marginBottom: 30,
    paddingBottom: 0,
    borderBottomWidth: 0.7,
    borderBottomColor: "#000000",
  },
  placeholders: {
    opacity: 0.4,
    fontFamily: "Roboto",
    fontSize: 15,
  },
  buttonquestion: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: "#F29B13",
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 45,
    backgroundColor: "#F29B13",
    borderRadius: 30,
    width: 314,
    height: 70,
    justifyContent: "center",
  },
  buttontext: {
    alignSelf: "center",
    lineHeight: 70,
    color: "#F6F6F9",
    fontFamily: "Roboto-Bold",
    fontSize: 24,
    alignItems: "center",
  },
});
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
    backgroundColor: "#F2F2F2",
    width: "100%",
    flex: 1,
    padding: 40,
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
