import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ButtonPrincipalComponent from "./ButtonPrincipalComponent";
import IMAGES from "../data/IMAGES";

function MesPlatsITEMComponent(props) {
  let reservations = {
    DemandeDeReservations: 0,
    PartReservee: 0,
    PartVenduRecuperee: 0,
    PartEnDemande: 0,
  };
  props.detailplat.reservations.forEach((reservation) => {
    if (reservation.Statut == "Encours") {
      reservations.DemandeDeReservations += 1;
    } else if (reservation.Statut == "Accepted") {
      reservations.PartReservee += reservation.NombredePart;
    } else if (reservation.Statut == "Finished") {
      reservations.PartVenduRecuperee += reservation.NombredePart;
    }
  });
  let PartRestante =
    props.databrute.Plat.NombrePart -
    reservations.PartVenduRecuperee -
    reservations.PartReservee;
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
            Mise en vente le ## / ## / ##
          </Text>
          <Text style={styles.textInfos}>
            Demande de réservation : {reservations.DemandeDeReservations}
          </Text>
          <Text style={styles.textInfos}>
            Part réservée : {reservations.PartReservee}
          </Text>
          <Text style={styles.textInfos}>
            Part vendue et récupérée : {reservations.PartVenduRecuperee}
          </Text>
          <Text style={styles.textInfos}>Part restante : {PartRestante}</Text>

          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 17 }}>
            {"\n"}
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

        <ButtonPrincipalComponent MinWidth={90}>Gerer</ButtonPrincipalComponent>
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
    paddingTop: 20,
    borderRadius: 20,
    height: 270,
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
    marginTop: "5%",
    justifyContent: "flex-start",
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
  textInfos: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    paddingTop: 5,
  },
});

export default MesPlatsITEMComponent;
