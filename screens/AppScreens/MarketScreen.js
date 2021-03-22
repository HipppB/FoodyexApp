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
//import { getImage } from "../../assets/Images/Plats/app";
const IMAGES = {
  lasagnes: require("../../assets/Images/Plats/lasagnes.jpg"),
  carbonara: require("../../assets/Images/Plats/Carbonara.jpg"),
  couscous: require("../../assets/Images/Plats/Couscous.jpg"),
  lasagnesSaumon: require("../../assets/Images/Plats/lasagnesS.jpg"),
  OssoBucco: require("../../assets/Images/Plats/OssoBucco.jpg"),
  ratatouille: require("../../assets/Images/Plats/ratatouille.jpg"),
  rizaulait: require("../../assets/Images/Plats/rizaulait.jpg"),
  tartetatin: require("../../assets/Images/Plats/tartetatin.jpg"),
  tartiflette: require("../../assets/Images/Plats/Tartiflette.jpg"),
};

let NbPlat = 0;
let NbPlatMarket = 0;
let path = "../../assets/Images/Plats/";
let imagepath = "";
export default function MarketScreen({ navigation }) {
  if (NbPlat === 0) {
    NbPlatMarket = NombredePlat(plats);
  }
  return (
    <View style={styles.maincontainer}>
      <View style={styles.containerTopSection}>
        <View style={styles.menuConnexion}>
          <TouchableOpacity onPress={() => navigation.push("NavPlates")}>
            <View style={styles.ButtonSlider}>
              <Text style={styles.buttontext}>Mes Plats</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("ButtonPressed")}>
            <View style={(styles.ButtonSlider, styles.ButtonSliderOn)}>
              <Text style={styles.buttontext}>Le Marché</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.push("NavAccount")}>
            <View style={styles.ButtonSlider}>
              <Text style={styles.buttontext}>Mon Compte</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollArea}>
          <Text
            style={{
              fontFamily: "Roboto-Thin",
              textAlign: "center",
              paddingTop: 20,
              width: "100%",
              fontSize: 18,
            }}
          >
            Il y a actuellement {NbPlatMarket} plats sur le Marché
          </Text>
          {plats.map((plat) => PlatMarche(navigation, plat), (NbPlat = 0))}
        </ScrollView>
      </View>
    </View>
  );
}

function NombredePlat(plats) {
  let NombredePlatSurLeMarche = 0;
  plats.map((plat) => {
    if (plat["OnMarket"] === true) {
      NombredePlatSurLeMarche += 1;
    }
  });
  return NombredePlatSurLeMarche;
}

function PlatMarche(navigation, plat) {
  if (plat["OnMarket"] === false) {
    return null;
  } else {
    let imagepath = path + "lasagnes.jpg";
    let ObtainedImage = IMAGES["lasagnes"];

    NbPlat += 1;
    if (NbPlat % 2 === 1) {
      return (
        <TouchableOpacity
          style={styles.touchableimpaire}
          onPress={() =>
            navigation.push("PlateDetailsScreen", {
              selected: plat,
              selectedimage: IMAGES[plat["LinkImage"]],
            })
          }
          key={plat["ID"]}
        >
          <View style={styles.imagecontainer}>
            <Image style={styles.image} source={IMAGES[plat["LinkImage"]]} />
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
                fontFamily: "Roboto-Bold",
                color: "#FA4A0C",
              }}
            >
              {plat["prixUnePart"]} ‡
            </Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.touchable}
          onPress={() =>
            navigation.push("PlateDetailsScreen", {
              selected: plat,
              selectedimage: IMAGES[plat["LinkImage"]],
            })
          }
          key={plat["ID"]}
        >
          <View style={styles.imagecontainer}>
            <Image style={styles.image} source={IMAGES[plat["LinkImage"]]} />
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
                fontFamily: "Roboto-Bold",
                color: "#FA4A0C",
              }}
            >
              {plat["prixUnePart"]} ‡
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }
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
  touchableimpaire: {
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
    transform: [{ translateY: "150%" }],
  },
  scrollArea: {
    marginTop: 0,
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 0,
    paddingBottom: 200,
  },
  imagecontainer: {
    position: "absolute",
    top: -50,
  },
  image: {
    marginTop: 0,
    borderRadius: 100,
    width: 130,
    height: 130,
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
    fontFamily: "Roboto-Bold",
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
