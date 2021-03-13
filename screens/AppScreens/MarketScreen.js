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
  const [loaded] = useFonts({
    Roboto: require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    RobotoBold: require("../../assets/fonts/Roboto/Roboto Bold.ttf"),
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
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollArea}>
          {plats.map((m) => (
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
                    uri: m["LinkImage"],
                  }}
                />
              </View>
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  paddingBottom: 5,
                  textAlign: "center",
                }}
              >
                {m["Nom"]}
              </Text>
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  paddingBottom: 25,
                  textAlign: "center",
                }}
              >
                Ceci est {m["Nom"]}
              </Text>
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
    alignItems: "flex-end",
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
