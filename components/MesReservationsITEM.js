import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from "react-native";
import IMAGES from "../data/IMAGES";

function MesReservationsITEM(props) {
  console.log(props);
  function createTwoButtonAlert(price) {
    Alert.alert(
      "Voulez vous annuler la réservation ?",
      "Cette action est irréversible et vous coutera " + price + " ‡",
      [
        {
          text: "Ne pas annuler",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Annuler la reservation",
          onPress: () => console.log("OK Pressed"),
        },
      ]
    );
  }

  let colortext = "#85A93F";
  let textStatus = "Réservation accepté";
  let Annuler = "Annuler";
  let prix = "";
  let price = 0;
  if (props.detailplat.Statut == "Accepted") {
    textStatus = "Réservation accepté";
    prix = "\n(" + props.detailplat.NbPart + "‡)";
    Annuler = "Annuler";
    price = props.detailplat.NbPart;
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
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.nav.push("DetailReservationScreen")}
    >
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
        <TouchableOpacity onPress={() => createTwoButtonAlert(price)}>
          <Text style={styles.CancelButton}>
            {Annuler}
            {prix}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesButtons.container}
          onPress={() =>
            props.nav.navigate("AccountNavigator", {
              screen: "ListMessageScreen",
            })
          }
        >
          <Text style={stylesButtons.text}>Contacter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesButtons.container}>
          <Text style={stylesButtons.text}>Récupéré !</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
    zIndex: 15,
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
const stylesButtons = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F29B13",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: "center",
    zIndex: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: "#FFFFFF",
  },
});
export default MesReservationsITEM;
