import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, ActivityIndicator } from "react-native";
import * as Font from "expo-font";

//For context :
import { useContext } from "react";
import AppContext from "../components/AppContext";
function Loadingscreen(props) {
  //Global Context:
  const TheContext = useContext(AppContext);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
        "Roboto-Thin": require("../assets/fonts/Roboto/Roboto-Thin.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
        "Poppins-Medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
        "Poppins-Regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
      })
        .then((res) => {
          console.log("FONTS LOADED!");
          setTimeout(() => {
            TheContext.LoadFinished(false);
          }, 500);
        })
        .catch((Err) => {
          console.log(Err);
        });
    }

    loadFonts();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.Image}
        source={require("../assets/Images/loadingscreen.jpg")}
      />
      <Image
        style={styles.stretch}
        source={require("../assets/Images/logo.png")}
      />
      <ActivityIndicator
        size="large"
        color="#F29B13"
        style={{ position: "absolute", bottom: "20%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "center",
  },
  Image: {
    height: "100%",
    width: "100%",
  },
  stretch: {
    width: 250,
    height: 250,
    resizeMode: "stretch",
    position: "absolute",
    bottom: "50%",
    transform: [{ translateY: 50 }],
  },
});

export default Loadingscreen;
