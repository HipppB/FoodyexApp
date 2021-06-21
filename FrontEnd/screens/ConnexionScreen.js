import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";

import colors from "../assets/Themes/colors";
//For context :
import { useContext } from "react";
import AppContext from "../components/AppContext";

function ConnexionScreen(props) {
  //Global Context:
  const TheContext = useContext(AppContext);

  let textmail, textpassword;
  let TestPassword,
    TestEmail = false;
  let error = { email: "", password: "" };
  const [errorDiplay, ChangeDisplayedError] = useState(error);
  //Récupération des inputs
  let defaultEmail = "";
  if (Dimensions.get("window").height == 812) {
    defaultEmail = "John.lecuistot@eleve.isep.fr";
  } else {
    defaultEmail = "Sophie.Dudemaine@eleve.isep.fr";
  }
  const [emailtext, onChangeTextemail] = useState(defaultEmail);
  console.log(Dimensions.get("window").height);

  const [passwordtext, onChangeTextpassword] = useState("");
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
  //Etat du bouton :
  const [ButtonDisable, DisableTheButton] = useState(true);
  const [disabledButton, ChangeStyle] = useState({ opacity: 0.5 });
  //Verification des champs et reglage du bouton
  function verification(input, newValue) {
    //On Mets les données les plus récentes dans des variables pour que ça s'actualise de suite
    if (input === "mail") {
      textmail = newValue;
    } else {
      textmail = emailtext;
    }
    if (input === "password") {
      textpassword = newValue;
    } else {
      textpassword = passwordtext;
    }

    if (textmail.includes("@eleve.isep.fr") || textmail.includes("@isep.fr")) {
      ChangeError("email", "");
      TestEmail = true;
    } else {
      ChangeError("email", "INVALIDE");
      TestEmail = false;
    }

    if (textpassword == "") {
      ChangeError("password", "INVALIDE");
      TestPassword = false;
    } else {
      TestPassword = true;
    }
    // On gère l'état du bouton
    if (TestPassword && TestEmail) {
      DisableTheButton(false);
      ChangeStyle({ opacity: 1 });
    } else {
      DisableTheButton(true);
      ChangeStyle({ opacity: 0.5 });
    }
  }
  //Fonction appellée au clique du bouton, on y reverifie toutes les données
  function Connexion(Data, force = false) {
    if (emailtext == "John.lecuistot@eleve.isep.fr") {
      TheContext.SetloggedUserId(1);
      console.log("Hey");
    }
    if (emailtext == "Sophie.Dudemaine@eleve.isep.fr") {
      TheContext.SetloggedUserId(2);
      console.log("Ho");
    }

    if (force) {
      TheContext.SetIsLoggedIn(true);
    }
    console.log(Data);
    if ([Data.Email] != "") {
      if (
        !(
          emailtext.includes("@eleve.isep.fr") || emailtext.includes("@isep.fr")
        )
      ) {
        console.log("L'email est invalide, connexion refusée");
        ChangeError("email", "E-MAIL INVALIDE");
      } else {
        ChangeError("email", "");
        if (passwordtext) {
          TheContext.SetIsLoggedIn(true);
        }
      }
    }

    if (!passwordtext) {
      ChangeError("password", "MOT DE PASSE INVALIDE");
    } else {
      ChangeError("password", "");
    }
  }
  function ChangeError(name, value) {
    error[name] = value;
    ChangeDisplayedError(error);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.containerBottomSection}>
          <View style={styleForms.placeholders}>
            <Text style={styleForms.placeholdersText}>ADRESSE E-MAIL</Text>
            <Text style={styleFormsError.placeholders}>
              {errorDiplay.email}
            </Text>
          </View>

          <TextInput
            style={styleForms.longinput}
            onChangeText={InputMailChanged}
            value={emailtext}
            textContentType="emailAddress"
            keyboardType="email-address"
          />
          <View style={styleForms.placeholders}>
            <Text style={styleForms.placeholdersText}>MOT DE PASSE</Text>
            <Text style={styleFormsError.placeholders}>
              {errorDiplay.password}
            </Text>
          </View>

          <TextInput
            style={styleForms.longinput}
            onChangeText={InputPassWordChanged}
            value={passwordtext}
            secureTextEntry={true}
            textContentType="password"
          />
          <Text
            onPress={() =>
              Connexion(
                {
                  Email: emailtext,
                  Password: passwordtext,
                },
                true
              )
            }
            style={styleForms.buttonquestion}
          >
            Mot de passe oublié ?
          </Text>

          <TouchableOpacity
            disabled={ButtonDisable}
            onPress={() =>
              Connexion({
                Email: emailtext,
                Password: passwordtext,
              })
            }
            style={[styleForms.button, disabledButton]}
          >
            <Text style={styleForms.buttontext}>Connexion</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styleFormsError = StyleSheet.create({
  placeholders: {
    color: colors.ErrorColor,
    opacity: 1.5,
    paddingLeft: 10,
  },
});
const styleForms = StyleSheet.create({
  containersmall: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  longinput: {
    flexShrink: 1,
    height: 35,
    marginBottom: 30,
    paddingBottom: 0,
    borderBottomWidth: 0.7,
    color: colors.defaultTextColorBlack,
  },
  placeholders: {
    flexDirection: "row",
  },
  placeholdersText: {
    opacity: 0.4,
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    color: colors.defaultTextColorBlack,
  },
  buttonquestion: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: colors.buttonMainColor,
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 45,
    backgroundColor: colors.buttonMainColor,
    borderRadius: 30,
    width: 314,
    height: 70,
    justifyContent: "center",
  },
  buttontext: {
    alignSelf: "center",
    lineHeight: 70,
    color: colors.buttonMainTextColor,
    fontFamily: "Roboto-Bold",
    fontSize: 24,
    alignItems: "center",
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBottomSection: {
    backgroundColor: colors.GrayBackground,
    width: "100%",
    flex: 1,
    padding: 40,
  },
});

export default ConnexionScreen;
