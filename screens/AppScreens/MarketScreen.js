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
import { useFonts } from "expo-font";
import plats from "../../data/Plats.json";

export default function MarketScreen({ navigation }) {
  const [loaded] = useFonts({
    Roboto: require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    RobotoBold: require("../../assets/fonts/Roboto/Roboto Bold.ttf"),
  });
  return (
    <View style={styles.container}>
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
      <View style={styles.containerBottomSection}>
        <ScrollView style={styleListMarket.scrollarea}>
          {plats.map((p) => (
            <View style={styleListMarket.Item}>
              <TouchableOpacity
                style={styleListMarket.touchable}
                onPress={() => alert("To do")}
              >
                <Image
                  style={styleListMarket.image}
                  source={{
                    width: 100,
                    height: 100,
                    // @ts-ignore
                    uri: p["LinkImage"],
                  }}
                />
                <Text
                  style={styleListMarket.text}
                  style={{
                    color: "black",
                    fontSize: 20,
                    paddingBottom: 5,
                    textAlign: "center",
                  }}
                >
                  {p["Nom"]}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
const styleListMarket = StyleSheet.create({
  scrollarea: {
    flex: 1,
    flexDirection: "row",
  },
  Item: {
    backgroundColor: "red",
  },
  touchable: {},
  image: {},
  text: {},
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
    padding: 0,
    justifyContent: "space-around",
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
