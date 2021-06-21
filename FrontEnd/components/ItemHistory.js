import { UserInterfaceIdiom } from "expo-constants";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Alert, Text } from "react-native";

import * as users from "../data/utilisateurs.json";

function ItemHistory(props) {
  let user;
  if (props.User == props.item.item.IDTo) {
    user = users[props.item.item.IDFrom];
  } else if (props.User == props.item.item.IDFrom) {
    user = users[props.item.item.IDTo];
  }
  function createTwoButtonAlert() {
    let message = "L'argent reçu sera entièrement rendu au propriétaire";
    let boutton = "Rembourser";
    if (props.User == props.item.item.IDFrom) {
      message =
        "Cela enverra une notification à la personne ayant reçu l'argent pour demander qu'il vous le rembourse, libre à lui d'aceepter ou non.";
      boutton = "Demander un remboursement";
    }
    Alert.alert("Annuler la transaction ?", message, [
      {
        text: "Retour",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: boutton,
        onPress: () => console.log("OK Pressed"),
      },
    ]);
  }
  function DisplayPrice({ price = 0 }) {
    let textcolor = "#000000";
    let output = "" + price;
    if (price != 0) {
      if (props.User == props.item.item.IDTo) {
        textcolor = "#85A93F";
        output = "+ " + price;
      } else if (props.User == props.item.item.IDFrom) {
        textcolor = "#FA4A0C";
        output = "- " + price;
      }
    }

    return (
      <View>
        <Text
          style={{ color: textcolor, fontFamily: "Roboto-Bold", fontSize: 24 }}
        >
          {output} ‡
        </Text>
      </View>
    );
  }

  if (
    props.User == props.item.item.IDTo ||
    props.User == props.item.item.IDFrom
  ) {
    if (props.item.item.Details == "Bienvenue !") {
      return (
        <View style={StyleMessage.Container}>
          <View style={StyleMessage.ContainerLeft}>
            <DisplayPrice
              price={props.item.item.Price}
              amount={props.item.item.Amount}
            />
          </View>
          <View style={StyleMessage.ContainerRight}>
            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 18 }}>
              {props.item.item.Details}
            </Text>
            <View style={StyleMessage.details}>
              <Text>
                Une petite somme de départ pour commencer à échanger des plats !
                Faites en bonne usage, et ne ruinez pas les autres !
              </Text>
            </View>
          </View>
        </View>
      );
    }
    let time = new Date(props.item.item.Date);
    return (
      <TouchableOpacity onPress={() => createTwoButtonAlert()}>
        <View style={StyleMessage.Container}>
          <View style={StyleMessage.ContainerLeft}>
            <DisplayPrice
              price={props.item.item.Price}
              amount={props.item.item.Amount}
            />
          </View>
          <View style={StyleMessage.ContainerRight}>
            <Text style={{ fontFamily: "Roboto-Medium", fontSize: 18 }}>
              {props.User == props.item.item.IDTo ? "Vente" : "Achat"} plat
            </Text>
            <View style={StyleMessage.details}>
              <Text>
                Acheteur : {user["prenom"]} {user["nom"]}{" "}
              </Text>
              <Text>
                Date : {time.getUTCDate().toString()}/0
                {(time.getMonth() + 1).toString()}
              </Text>
              <Text>Portion de : {props.item.item.Details} </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return <View></View>;
}

const styles = StyleSheet.create({});

export default ItemHistory;

const StyleMessage = StyleSheet.create({
  details: { fontFamily: "Roboto-Regular", fontSize: 13 },
  Container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    borderRadius: 20,
    marginVertical: 20,
    paddingRight: 25,
    marginBottom: 0,
    marginTop: 15,
  },
  ContainerLeft: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ContainerRight: {
    width: "80%",
    height: 110,
    marginRight: 10,
    justifyContent: "center",
  },
  PhotoProfil: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginLeft: 10,
  },
  IdentiteTexte: {
    width: "80%",
    alignContent: "flex-end",
    alignSelf: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  Identite: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
  },
  IdentiteDesc: {
    fontFamily: "Roboto-Regular",
    opacity: 0.5,
    paddingRight: 10,
    paddingTop: 4,
  },
});
