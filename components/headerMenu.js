import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";

function HeaderMenu(props) {
  let { navigation, active } = props;
  let indexPage = props.navigation.dangerouslyGetState().index;
  navigator = ["Plates", "NavMarket", "AccountMenuScreen"];
  function IsActive(Location) {
    if (indexPage === navigator.indexOf(Location)) {
      return styles.ButtonSlider, styles.ButtonSliderOn;
    } else {
      return styles.ButtonSlider;
    }
  }
  navigator = ["Plates", "NavMarket", "AccountMenuScreen"];
  function Direction(WhereToGo) {
    if (navigator.indexOf(WhereToGo) > navigator.indexOf(active)) {
      navigation.navigate(WhereToGo);
    } else {
      navigation.navigate(WhereToGo);
    }
  }

  if (navigator.indexOf(active) != -1) {
    return (
      <View style={styles.containerTopSection}>
        <View style={styles.menuConnexion}>
          <TouchableOpacity onPress={() => Direction("MyPlatesScreen")}>
            <View style={IsActive("Plates")}>
              <Text style={styles.buttontext}>Mes Plats</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Direction("MarketScreen")}>
            <View style={IsActive("NavMarket")}>
              <Text style={styles.buttontext}>Le Marché</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Direction("AccountMenuScreen")}>
            <View style={IsActive("AccountMenuScreen")}>
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
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "8%",
    flexShrink: 1,
    alignContent: "center",
    justifyContent: "flex-end",
    alignItems: "center",
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
    alignContent: "flex-start",
    width: "100%",
    top: 10,
    backgroundColor: "#FFFFFF",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: 1,
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6.27,
  },
});
