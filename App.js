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
            <Text>Test</Text>
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
    backgroundColor: "#F2F2F2",
    flex: 1,
    flexDirection: "column", //horizontal
    justifyContent: "flex-start", //main axis
    alignItems: "center" //secondary axis
  },
  containerTopSection: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "45%",
    flexShrink: 1,
    alignContent: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6.27,
  },

  containerBottomSection: {
    backgroundColor: "#F2F2F2",
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
    backgroundColor: "#FFFFFF",
    borderStyle: 'solid',
    borderBottomWidth: 5,
    borderBottomColor: "#F29B13",
    fontFamily: "Roboto",
    fontSize: 10
  },
  menuConnexion: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    zIndex: 1,
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30,
  },

});

