import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import plats from "../../data/Plats.json";
import ItemMarketComponent from "../../components/ItemMarketComponent";

import IMAGES from "../../data/IMAGES";

let NbPlat = 0;
let NbPlatMarket = 0;
let path = "../../assets/Images/Plats/";
let imagepath = "";
//For context :
import { useContext } from "react";
import AppContext from "../../components/AppContext";
function MarketScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log("refreshed");
    setRefreshing(false);
  }, []);
  //Global Context:
  const TheContext = useContext(AppContext);
  if (NbPlat === 0) {
    NbPlatMarket = NombredePlat(plats);
  }
  console.log("USER ID = ", TheContext.loggedUserId);
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollArea}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
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
          {plats.map(
            (plat) => PlatMarche(navigation, plat, NbPlatMarket),
            (NbPlat = 0)
          )}
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

function PlatMarche(navigation, plat, NbPlatMarket) {
  if (plat["OnMarket"] === false) {
    return null;
  } else {
    NbPlat += 1;
    return (
      <ItemMarketComponent
        navigation={navigation}
        plat={plat}
        Numero={NbPlat}
        NombredePlatTotaux={NbPlatMarket}
        key={NbPlat}
      />
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  scrollArea: {
    marginTop: 0,
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 0,
    paddingBottom: 150,
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
});

export default MarketScreen;
