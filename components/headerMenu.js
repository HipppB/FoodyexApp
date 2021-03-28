import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";

function HeaderMenu({ navigation, active }) {
  function IsActive(Location) {
    if (Location === active) {
      return styles.ButtonSlider, styles.ButtonSliderOn;
    } else {
      return styles.ButtonSlider;
    }
  }
  navigator = ["Plates", "NavMarket", "AccountNavigator"];
  function Direction(WhereToGo) {
    if (navigator.indexOf(WhereToGo) > navigator.indexOf(active)) {
      navigation.push(WhereToGo);
    } else {
      navigation.navigate(WhereToGo);
    }
  }

  if (navigator.indexOf(active) != -1) {
    return (
      <View style={styles.containerTopSection}>
        <View style={styles.menuConnexion}>
          <TouchableOpacity onPress={() => Direction("NavPlates")}>
            <View style={IsActive("Plates")}>
              <Text style={styles.buttontext}>Mes Plats</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Direction("NavMarket")}>
            <View style={IsActive("NavMarket")}>
              <Text style={styles.buttontext}>Le Marché</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Direction("AccountNavigator")}>
            <View style={IsActive("AccountNavigator")}>
              <Text style={styles.buttontext}>Mon Compte</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HeaderMenu;

const styles = new StyleSheet.create({
  containerTopSection: {
    width: "100%",
    height: "100%",
    flexShrink: 1,
    alignContent: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
    zIndex: 10,
  },

  ButtonSlider: {
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
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: 1,
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
  },
});
