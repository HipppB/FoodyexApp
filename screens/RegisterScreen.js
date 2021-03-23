import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";

export default function RegisterScreen({ navigation }) {
  //Gestion du formulaire
  //Gestion des Erreurs
  //variables
  let textnom, textprenom, textmail, texttelephone, textpassword;
  let testnom,
    testprenom,
    testmail,
    testtelephone,
    testpassword = false;
  let error = { nom: "", prenom: "", telephone: "", email: "", password: "" };
  const [errorDiplay, ChangeDisplayedError] = useState(error);
  //Récupération des inputs
  const [emailtext, onChangeTextemail] = useState("");
  const [passwordtext, onChangeTextpassword] = useState("");
  const [nomtext, onChangeTextnom] = useState("");
  const [prenomtext, onChangeTextprenom] = useState("");
  const [phonetext, onChangeTextphone] = useState("");
  //Fonction appelé lors de changement Email
  function InputMailChanged(text) {
    onChangeTextemail(text);
    verification("mail", text);
  }
  //Fonction appelé lors de changement Password
  function InputPassWordChanged(text) {
    onChangeTextpassword(text);
    verification("password", text);
  }
  //Fonction appelé lors de changement Nom
  function InputNomChanged(text) {
    onChangeTextnom(text);
    verification("nom", text);
  }
  //Fonction appelé lors de changement Prénom
  function InputPrenomChanged(text) {
    onChangeTextprenom(text);
    verification("prenom", text);
  }
  //Fonction appelé lors de changement Telephone
  function InputPhoneChanged(text) {
    onChangeTextphone(text);
    verification("telephone", text);
  }
  function verification(input, newValue) {
    console.log(newValue);
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.containerTopSection}>
          <Image
            style={styles.stretch}
            source={require("../assets/Images/logo.png")}
          />
          <View style={styles.menuConnexion}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.ButtonSlider}>
                <Text style={styles.buttontext}>Se connecter</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("ButtonPressed")}>
              <View style={(styles.ButtonSlider, styles.ButtonSliderOn)}>
                <Text style={styles.buttontext}>S'inscrire</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerBottomSection}>
          <KeyboardAvoidingView
            KeyboardAvoidingView
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
            behavior={Platform.OS == "ios" ? "height" : "height"}
            enabled
            keyboardVerticalOffset={370}
          >
            <ScrollView style={styleForms.ScrollView}>
              <View style={styleForms.containersmall}>
                <View style={styleForms.containersmallinput}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styleForms.smallplaceholders}>NOM</Text>
                    <Text style={styleFormsError.placeholders}>
                      {errorDiplay.nom}
                    </Text>
                  </View>
                  <TextInput
                    onChangeText={InputNomChanged}
                    style={styleForms.smallinput}
                  />
                </View>
                <View style={styleForms.containersmallinput}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styleForms.smallplaceholders}>PRÉNOM</Text>
                    <Text style={styleFormsError.placeholders}>
                      {errorDiplay.prenom}
                    </Text>
                  </View>
                  <TextInput
                    onChangeText={InputPrenomChanged}
                    style={styleForms.smallinput}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styleForms.placeholders}>ADRESSE E-MAIL ISEP</Text>
                <Text style={styleFormsError.placeholders}>
                  {errorDiplay.email}
                </Text>
              </View>
              <TextInput
                onChangeText={InputMailChanged}
                style={styleForms.longinput}
              />

              <View style={{ flexDirection: "row" }}>
                <Text style={styleForms.placeholders}>TÉLÉPHONE</Text>
                <Text style={styleFormsError.placeholders}>
                  {errorDiplay.telephone}
                </Text>
              </View>
              <TextInput
                onChangeText={InputPhoneChanged}
                style={styleForms.longinput}
              />
              <Text style={styleForms.placeholders}>MOT DE PASSE</Text>
              <TextInput
                onChangeText={InputPassWordChanged}
                style={styleForms.longinput}
              />

              <Text
                onPress={() => alert("Todo")}
                style={styleForms.buttonquestion}
              >
                Besoin d'aide ?
              </Text>
            </ScrollView>
          </KeyboardAvoidingView>
          <TouchableOpacity style={styleForms.button}>
            <Text style={styleForms.buttontext}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styleFormsError = StyleSheet.create({
  placeholders: {
    color: "red",
    opacity: 1.5,
    paddingLeft: 10,
  },
});
const styleForms = StyleSheet.create({
  ScrollView: {
    padding: 40,
    zIndex: 1,
  },
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
    fontFamily: "Roboto",
    fontSize: 15,
  },
  longinput: {
    flexShrink: 1,
    height: 35,
    marginBottom: 30,
    borderBottomWidth: 0.7,
    borderBottomColor: "#000000",
  },
  placeholders: {
    opacity: 0.4,
    fontFamily: "Roboto",
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
    zIndex: 2,
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
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    flexDirection: "column", //horizontal
    justifyContent: "flex-start", //main axis
    alignItems: "center", //secondary axis
  },
  containerTopSection: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "40%",
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
    flex: 1,
  },
  stretch: {
    width: 250,
    height: 250,
    resizeMode: "stretch",
    bottom: "5%",
  },
  ButtonSlider: {
    backgroundColor: "#FFFFFF",
    marginBottom: 5,
  },
  ButtonSliderOn: {
    borderStyle: "solid",
    borderBottomWidth: 5,
    borderBottomColor: "#F29B13",
  },
  buttontext: {
    fontFamily: "Roboto-Bold",
    fontWeight: "bold",
    fontSize: 18,
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
