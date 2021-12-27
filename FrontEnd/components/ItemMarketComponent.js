import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import API from "../assets/api.js";
import IMAGES from "../data/IMAGES.js";
function ItemMarketComponent({ navigation, plat, Numero, NombredePlatTotaux }) {
  let stylePlat = styles.touchable;
  let stylesecondaire = styles.touchable;
  if (Numero % 2 == 1) {
    stylePlat = styles.touchable;
    stylesecondaire = styles.touchableimpaire;
    if (Numero == NombredePlatTotaux) {
      stylePlat = styles.touchable;
      stylesecondaire = styles.stylelast;
    }
  }

  return (
    <TouchableOpacity
      style={(stylePlat, stylesecondaire)}
      onPress={() =>
        navigation.push("MarketNavigator", {
          selected: plat,
          selectedimage: IMAGES[plat["LinkImage"]],
        })
      }
      key={Numero}
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
          {plat["PrixUnePart"]} ‡
        </Text>
      </View>
    </TouchableOpacity>
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
    transform: [{ translateY: 150 }],
  },
  translateCard: {
    transform: [{ translateY: 150 }],
  },
  stylelast: {
    position: "relative",
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
    left: "23%",
    borderRadius: 30,
    //Ombres
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    transform: [{ translateY: 0 }],
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
export default ItemMarketComponent;
