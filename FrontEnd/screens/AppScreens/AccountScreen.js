import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

//For context :
import { useContext } from "react";
import AppContext from "../../components/AppContext";

function AccountScreen(props) {
  //Global Context:
  const TheContext = useContext(AppContext);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.containerBottomSection}>
        <Text style={styleMenuButton.solde}>
          Solde : {TheContext.loggedUserId == 1 ? "19" : "6"} ‡
        </Text>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("AccountNavigator", {
              screen: "MyProfileScreen",
            })
          }
          style={styleMenuButton.container}
        >
          <Text style={styleMenuButton.texte}>Mon profil</Text>
          <Image
            style={styleMenuButton.chevron}
            source={require("../../assets/Images/chevron-right.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("AccountNavigator", {
              screen: "ListMessageScreen",
            })
          }
          style={styleMenuButton.container}
        >
          <Text style={styleMenuButton.texte}>Messages</Text>
          <Image
            style={styleMenuButton.chevron}
            source={require("../../assets/Images/chevron-right.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("AccountNavigator", {
              screen: "HistoryScreen",
            })
          }
          style={styleMenuButton.container}
        >
          <Text style={styleMenuButton.texte}>Historique</Text>
          <Image
            style={styleMenuButton.chevron}
            source={require("../../assets/Images/chevron-right.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => TheContext.SetIsLoggedIn(false)}
          style={styleMenuButton.container}
        >
          <Text style={styleMenuButton.texte}>Déconnexion</Text>
          <Image
            style={styleMenuButton.chevron}
            source={require("../../assets/Images/chevron-right.png")}
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

export default AccountScreen;
