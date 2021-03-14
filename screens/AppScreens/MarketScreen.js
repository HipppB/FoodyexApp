import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import plats from "../../data/Plats.json";
import { useFonts } from "expo-font";

export default function MarketScreen({ navigation }) {
  const forcefonts = useFonts({
    Roboto: require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    RobotoBold: require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
    RobotoThin: require("../../assets/fonts/Roboto/Roboto-Thin.ttf"),
  });

  return (
    <View style={styles.maincontainer}>
      <View style={styles.containerTopSection}>
        <View style={styles.menuConnexion}>
          <TouchableOpacity onPress={() => navigation.push("MyPlatesScreen")}>
            <View style={styles.ButtonSlider}>
              <Text style={styles.buttontext}>Mes Plats</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("ButtonPressed")}>
            <View style={(styles.ButtonSlider, styles.ButtonSliderOn)}>
              <Text style={styles.buttontext}>Le Marché</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("AccountScreen")}>
            <View style={styles.ButtonSlider}>
              <Text style={styles.buttontext}>Mon Compte</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={{
          fontFamily: "RobotoThin",
          textAlign: "center",
          paddingTop: 20,
        }}
      >
        Il y a actuellement 12 plats sur le Marché
      </Text>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollArea}>
          {plats.map((plat) => (
            <TouchableOpacity
              style={styles.touchable}
              onPress={() => alert("To do")}
            >
              <View style={styles.imagecontainer}>
                <Image
                  style={styles.image}
                  source={{
                    width: 130,
                    height: 130,
                    // @ts-ignore
                    uri: plat["LinkImage"],
                  }}
                />
              </View>
              <View style={{ width: "90%", height: 110 }}>
                <Text
                  numberOfLines={2}
                  style={{
                    color: "black",
                    fontSize: 22,
                    paddingBottom: 5,
                    textAlign: "center",
                    width: "100%",
                    //fontFamily: "Content",
                    fontWeight: "bold",
                    paddingBottom: 10,
                  }}
                >
                  {plat["Nom"]}
                </Text>
                <Text
                  style={{
                    position: "absolute",
                    top: "50%",
                    color: "black",
                    fontSize: 17,
                    paddingBottom: 25,
                    textAlign: "center",
                    width: "100%",
                    fontFamily: "RobotoBold",
                    color: "#FA4A0C",
                  }}
                >
                  {plat["prixUnePart"]} ‡
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  touchable: {
    paddingTop: 0,
    alignContent: "flex-end",
    justifyContent: "center",
    width: "35%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    marginBottom: 20,
    marginTop: 70,
    height: 200,
    width: 150,
    position: "relative",
    borderRadius: 30,
    //Ombres
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  scrollArea: {
    marginTop: 0,
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 0,
  },
  imagecontainer: {
    position: "absolute",
    top: -50,
  },
  image: {
    marginTop: 0,
    borderRadius: 100,
  },

  //Header
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
    fontFamily: "RobotoBold",
    fontWeight: "bold",
    fontSize: 18,
  },
  menuConnexion: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: 1,
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
  },
});
