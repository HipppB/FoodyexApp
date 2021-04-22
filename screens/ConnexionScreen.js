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
} from "react-native";

//For context :
import { useContext } from "react";
import AppContext from "../components/AppContext";

function ConnexionScreen(props) {
  //Global Context:
  const TheContext = useContext(AppContext);

  //Gestion du formulaire
  //Gestion des Erreurs
  //variables
  let textmail, textpassword;
  let TestPassword,
    TestEmail = false;
  let error = { email: "", password: "" };
  const [errorDiplay, ChangeDisplayedError] = useState(error);
  //Récupération des inputs
  const [emailtext, onChangeTextemail] = useState("hippolyte.bach@isep.fr");
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
      ChangeError("email", "E-MAIL INVALIDE");
      TestEmail = false;
    }

    if (textpassword == "") {
      ChangeError("password", "Invalid");
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
    color: "red",
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
    padding: 40,
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

export default ConnexionScreen;
