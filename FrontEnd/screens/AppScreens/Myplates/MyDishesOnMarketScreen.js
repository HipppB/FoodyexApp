import React, { useState, useCallback } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import SousPageFormatComponent from "../../../components/SousPageFormatComponent";
import MesPlatsITEMComponent from "../../../components/MesPlatsITEMComponent";
import Plats from "../../../data/Plats.json";

//Temporaire (simule l'id d'un utilisateur)
import { useContext } from "react";
import AppContext from "../../../components/AppContext";
function MyReservationsScreen({ navigation }) {
  const TheContext = useContext(AppContext);
  function GetPlats(Method = "ByIDSelling", IDSearched = 1) {
    let ListPlats = [];
    if (Method == "ByIDSelling") {
      Plats.forEach((Plat) => {
        if (Plat.IDVendeur == IDSearched) {
          ListPlats.push({ Plat });
        }
      });
    }
    return ListPlats;
  }

  const [refreshing, setRefreshing] = useState(false);
  const [ListPlats, ChangeListPlat] = useState(
    GetPlats("ByIDSelling", TheContext.loggedUserId)
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    ChangeListPlat(GetPlats("ByIDSelling", TheContext.loggedUserId));
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      style={{ backgroundColor: "#F6F6F9" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SousPageFormatComponent
        params={{ title: "Vos plats sur le marché" }}
        navigation={navigation}
        scrollable={false}
      >
        <View style={{ paddingBottom: 50 }}>
          {ListPlats.map((plat) => (
            <MesPlatsITEMComponent
              key={plat.Plat.ID}
              databrute={plat}
              detailplat={{
                name: plat.Plat.Nom,
                date: plat.Plat.Date,
                price: plat.Plat.prixUnePart,
                image: plat.Plat.LinkImage,
                reservations: plat.Plat.Reserved,
              }}
            />
          ))}
        </View>
      </SousPageFormatComponent>
    </ScrollView>
  );
}

export default MyReservationsScreen;
