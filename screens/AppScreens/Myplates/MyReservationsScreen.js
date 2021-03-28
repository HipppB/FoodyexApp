import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import SousPageFormatComponent from "../../../components/SousPageFormatComponent";

function MyReservationsScreen({ navigation }) {
  return (
    <SousPageFormatComponent
      params={{ title: "Coming Soon !" }}
      navigation={navigation}
    ></SousPageFormatComponent>
  );
}

export default MyReservationsScreen;
