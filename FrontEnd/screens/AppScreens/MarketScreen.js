import React, { useState, useCallback, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
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
  const [refreshing, setRefreshing] = useState(true);
  const [data, setData] = useState([]);
  const [NbPlatMarket, setnbPlat] = useState(NombredePlat(data));

  useEffect(() => {
    RefreshData();
  }, []);

  function actualiseData(newdata) {
    setData(newdata);
    setnbPlat(NombredePlat(newdata));
  }
  function RefreshData() {
    fetch("http://localhost:8000/api/plat/")
      .then((response) => response.json())
      .then((json) => actualiseData(json))
      .catch((error) => console.error(error))
      .finally(() => setRefreshing(false));
  }

  //Global Context:
  const TheContext = useContext(AppContext);
  //if (NbPlat === 0) {
  //  setnbPlat(NombredePlat(data));
  //}
  console.log("USER ID = ", TheContext.loggedUserId);
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollArea}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={RefreshData} />
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
          {data.map(
            (plat) => PlatMarche(navigation, plat, NbPlatMarket),
            (NbPlat = 0)
          )}
        </ScrollView>
      </View>
    </View>
  );
}

function NombredePlat(data) {
  let NombredePlatSurLeMarche = 0;
  data.map((plat) => {
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
