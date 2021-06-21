import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SousPageFormatComponent from "../../../components/SousPageFormatComponent";

function DetailReservationScreen(props) {
  return (
    <SousPageFormatComponent
      params={{ title: "Détail de la réservation" }}
      navigation={props.navigation}
      scrollable={false}
    >
      <Text>Coming soon....</Text>
    </SousPageFormatComponent>
  );
}

const styles = StyleSheet.create({});

export default DetailReservationScreen;
