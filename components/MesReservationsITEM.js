import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonPrincipalComponent from "./ButtonPrincipalComponent";
const IMAGES = {
  lasagnes: require("../assets/Images/Plats/lasagnes.jpg"),
  carbonara: require("../assets/Images/Plats/Carbonara.jpg"),
  couscous: require("../assets/Images/Plats/Couscous.jpg"),
  lasagnesSaumon: require("../assets/Images/Plats/lasagnesS.jpg"),
  OssoBucco: require("../assets/Images/Plats/OssoBucco.jpg"),
  ratatouille: require("../assets/Images/Plats/ratatouille.jpg"),
  rizaulait: require("../assets/Images/Plats/rizaulait.jpg"),
  tartetatin: require("../assets/Images/Plats/tartetatin.jpg"),
  tartiflette: require("../assets/Images/Plats/Tartiflette.jpg"),
};

function MesReservationsITEM(props) {
  let colortext = "#85A93F";
  let textStatus = "Réservation accepté";
  let Annuler = "Annuler";
  let prix = "";
  if (props.detailplat.Statut == "Accepted") {
    textStatus = "Réservation accepté";
    prix = "\n(" + props.detailplat.NbPart + "‡)";
    Annuler = "Annuler";
  }
  if (props.detailplat.Statut == "Encours") {
    colortext = "#F29B13";
    textStatus = "En cours";
  }
  if (props.detailplat.Statut == "Canceled") {
    colortext = "#FA4A0C";
    Annuler = "Archiver";
    textStatus = "Réservation refusée";
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image source={IMAGES[props.detailplat.image]} style={styles.Image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontFamily: "Roboto-Bold", fontSize: 19 }}>
            {props.detailplat.name}
          </Text>
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 16, top: -3 }}>
            ## / ## / ##
          </Text>
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 17 }}>
            Statut :{" "}
            <Text
              style={{
                fontFamily: "Roboto-Bold",
                fontSize: 17,
                color: colortext,
              }}
            >
              {textStatus}
            </Text>
          </Text>
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 17 }}>
            Prix :{" "}
            <Text
              style={{
                fontFamily: "Roboto-Bold",
                fontSize: 17,
                color: "#FA4A0C",
              }}
            >
              {props.detailplat.price} ‡
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.CancelButton}>
            {Annuler}
            {prix}
          </Text>
        </TouchableOpacity>

        <ButtonPrincipalComponent>Contacter</ButtonPrincipalComponent>

        <ButtonPrincipalComponent>Récupéré !</ButtonPrincipalComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    padding: 10,
    borderRadius: 20,
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 20,
  },
  topContainer: {
    flexDirection: "row",
    height: "80%",
  },
  imageContainer: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "space-around",
    padding: 10,
    paddingTop: 0,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    bottom: 3,
    alignItems: "center",
    alignContent: "center",
  },
  Image: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  CancelButton: {
    fontFamily: "Poppins-SemiBold",
    opacity: 0.5,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default MesReservationsITEM;
