import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { lauchCamera, launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import ChooseComponent from "../../../components/ChooseComponent";
import SousPageFormatComponent from "../../../components/SousPageFormatComponent";
import StepperComponent from "../../../components/stepperComponent";
import InputForm from "../../../components/inputForm";
import PagerView from "react-native-pager-view";
//Boutton Principal
function ButtonSubmit({ children, action }) {
  return (
    <TouchableOpacity
      onPress={() => action()}
      style={[stylesButton.button, stylesButton.buttonConfirm]}
    >
      <Text style={stylesButton.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
}
//Bouton Secondaire
function ButtonCancel({ children, action }) {
  return (
    <TouchableOpacity
      onPress={() => action()}
      style={[stylesButton.button, stylesButton.buttonCancel]}
    >
      <Text style={stylesButton.textStyleCancel}>{children}</Text>
    </TouchableOpacity>
  );
}

function NewPlatesScreen({ navigation }) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <SousPageFormatComponent
      params={{ title: "Nouveau Plat" }}
      navigation={navigation}
      morestyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <InputForm placeholders="Nom du plat" width="20%" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 40,
          }}
        >
          <StepperComponent width="25%" placeholder="Nombre de part" />
          <StepperComponent
            width="25%"
            after=" ‡"
            placeholder="Prix par part"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginBottom: 30,
          }}
        >
          <View
            style={{
              flexShrink: 1,
              flexDirection: "row",
              width: "80%",
            }}
          >
            <Text
              style={{
                opacity: 0.4,
                fontFamily: "Roboto-Regular",
                fontSize: 15,
                width: "120%",
              }}
            >
              Les parts sont vendues individuellement ?
            </Text>
          </View>
          <ChooseComponent />
        </View>

        <InputForm placeholders="Description du plat (Mentionnez les allergènes !)" />

        {!image && (
          <ButtonSubmit action={pickImage}>Ajouter une image</ButtonSubmit>
        )}
        {image && (
          <TouchableOpacity
            style={{
              bottom: 10,
              backgroundColor: "red",
              width: 200,
              alignSelf: "center",
              borderRadius: 50,
            }}
            onPress={() =>
              Alert.alert(
                "Supprimer l'Image",
                "Voulez vous supprimer l'image importée ?",
                [
                  {
                    text: "Non",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  { text: "Oui", onPress: () => setImage() },
                ]
              )
            }
          >
            <Image
              source={{ uri: image }}
              style={{
                width: 200,
                height: 200,
                alignSelf: "center",
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          bottom: "5%",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <ButtonCancel action={() => console.log("Cancel")}>
          Annuler
        </ButtonCancel>
        <ButtonSubmit action={() => console.log("Send")}>
          Mettre en vente
        </ButtonSubmit>
      </View>
    </SousPageFormatComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "5%",
    marginTop: "20%",
  },
});

const styleForms = StyleSheet.create({
  containersmall: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  containersmallinput: {
    width: "40%",
  },
  smallinput: {
    flexShrink: 1,
    height: 35,
    marginBottom: 30,
    paddingBottom: 0,
    borderBottomWidth: 0.7,
    borderBottomColor: "#000000",
  },
  smallplaceholders: {
    opacity: 0.4,
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    zIndex: 1,
  },
  longinput: {
    flexShrink: 1,
    height: 35,
    marginBottom: 30,
    paddingBottom: 0,
    borderBottomWidth: 0.7,
    borderBottomColor: "#000000",
  },
  placeholders: {
    flexDirection: "row",
  },
  placeholdersText: {
    opacity: 0.4,
    fontFamily: "Roboto-Regular",
    fontSize: 15,
  },
  buttonquestion: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: "#F29B13",
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 45,
    backgroundColor: "#F29B13",
    borderRadius: 30,
    width: 314,
    height: 70,
    justifyContent: "center",
  },
  buttontext: {
    alignSelf: "center",
    lineHeight: 70,
    color: "#F6F6F9",
    fontFamily: "Roboto-Bold",
    fontSize: 24,
    alignItems: "center",
  },
});

const stylesButton = StyleSheet.create({
  buttonCancel: {
    minWidth: "30%",
    flexShrink: 1,
  },
  buttonConfirm: {
    backgroundColor: "#F29B13",
    minWidth: "45%",
  },
  button: {
    borderRadius: 30,
    padding: 10,
    elevation: 0,
    height: 60,
    justifyContent: "center",
  },

  textStyleCancel: {
    fontFamily: "Poppins-SemiBold",
    opacity: 0.5,
    fontSize: 17,
    textAlign: "center",
  },
  textStyle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 17,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default NewPlatesScreen;
