import { StatusBar } from 'expo-status-bar';
import React, { cloneElement } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Alert} from 'react-native';

export default function App() {
  return (
    <View  style = {styles.container}>
      <View style= {styles.containerTopSection}>
        <Image style= {styles.stretch} source={require("./assets/logo.png")}/>
        <View style= {styles.menuConnexion}>
          <View style={styles.ButtonSlider}>
            <Button
              title="Se connecter"
              color="black"
              onPress={() => Alert.alert('Simple Button 1 pressed')}
            />
          </View>
          <View style={styles.ButtonSlider}>
            <Button
              title="S'inscrire"
              color="black"
              onPress={() => Alert.alert('Simple Button 2 pressed')}
            />
          </View>
        </View>
      </View>

      <View
        style= {styles.containerBottomSection}
      >
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    flexDirection: "column", //horizontal
    justifyContent: "flex-start", //main axis
    alignItems: "center" //secondary axis
  },
  containerTopSection: {
    backgroundColor: "gold",
    width: "100%",
    height: "45%",
    flexShrink: 1,
    alignContent: "center",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  containerBottomSection: {
    backgroundColor: "red",
    width: "100%",
    flex: 1
  },
  stretch: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
    bottom: "12%"
  },
  ButtonSlider: {
    backgroundColor: "#fff",
  },
  menuConnexion: {
    backgroundColor: "blue",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    zIndex: 1
  },

});

