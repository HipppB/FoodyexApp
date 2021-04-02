import React, { useState, useCallback } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import SousPageFormatComponent from "../../../components/SousPageFormatComponent";
import MesReservationsITEM from "../../../components/MesReservationsITEM";
import Plats from "../../../data/Plats.json";

function MyReservationsScreen({ navigation }) {
  function GetPlats(Method = "ByIDReceiving") {
    let ListPlats = [];
    if (Method == "ByIDReceiving") {
      Plats.forEach((Plat) => {
        Plat["Reserved"].forEach((Reserved) => {
          ListPlats.push({ Plat, Reserved });
        });
      });
    }
    return ListPlats;
  }

  const [refreshing, setRefreshing] = useState(false);
  const [ListPlats, ChangeListPlat] = useState(GetPlats("ByIDReceiving"));
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    ChangeListPlat(GetPlats("ByIDReceiving"));
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
        params={{ title: "Vos réservations" }}
        navigation={navigation}
        scrollable={false}
      >
        <View style={{ paddingBottom: 50 }}>
          {ListPlats.map((plat) => (
            <MesReservationsITEM
              key={plat.Plat.ID}
              databrute={plat}
              detailplat={{
                name: plat.Plat.Nom,
                date: plat.Plat.Date,
                price: plat.Plat.prixUnePart * plat.Reserved.NombredePart,
                NbPart: plat.Reserved.NombredePart,
                image: plat.Plat.LinkImage,
                Statut: plat.Reserved.Statut,
              }}
            />
          ))}
        </View>
      </SousPageFormatComponent>
    </ScrollView>
  );
}

export default MyReservationsScreen;
