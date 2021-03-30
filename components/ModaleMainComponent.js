import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
} from "react-native";

//For context :
import { useContext } from "react";
import AppContext from "../components/AppContext";

//Boutton Principal
function ButtonSubmit({ children }) {
  //Global Context:
  const TheContext = useContext(AppContext);
  return (
    <Pressable
      style={[stylesButton.button, stylesButton.buttonConfirm]}
      onPress={() => TheContext.SetModalContactShown(false)}
    >
      <Text style={stylesButton.textStyle}>{children}</Text>
    </Pressable>
  );
}
//Bouton Secondaire
function ButtonCancel({ children }) {
  //Global Context:
  const TheContext = useContext(AppContext);
  return (
    <Pressable
      style={[stylesButton.button, stylesButton.buttonCancel]}
      onPress={() => TheContext.SetModalContactShown(false)}
    >
      <Text style={stylesButton.textStyleCancel}>{children}</Text>
    </Pressable>
  );
}

function ModaleMainComponent(props) {
  //Global Context:
  const TheContext = useContext(AppContext);
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  });
  const _keyboardDidShow = () => {
    keybOpen = true;
  };
  const _keyboardDidHide = () => {
    keybOpen = false;
  };
  let keybOpen = Boolean;
  function ToucherCote() {
    if (keybOpen) {
      Keyboard.dismiss();
    } else {
      TheContext.SetModalContactShown(false);
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => ToucherCote()}>
      <View style={StyleModale.centeredView}>
        <View style={StyleModale.modalView}>
          <View style={StyleModale.headermodal}>
            <Text style={StyleModale.Headertext} numberOfLines={1}>
              {props.Header}
            </Text>
          </View>
          <View style={StyleModale.bodyModal}>{props.children}</View>
          <View style={StyleModale.footerModal}>
            <ButtonCancel>{props.Buttons.cancel}</ButtonCancel>
            <ButtonSubmit>{props.Buttons.submit}</ButtonSubmit>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const StyleModale = new StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 500,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "65%",
    height: 300,
    flex: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headermodal: {
    width: "100%",
    paddingHorizontal: 25,
    backgroundColor: "#EDEDED",
    height: 50,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  Headertext: {
    borderRadius: 50,
    width: "100%",
    backgroundColor: "#EDEDED",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
  },
  bodyModal: {
    flex: 1,
    padding: 20,
  },
  footerModal: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

const stylesButton = StyleSheet.create({
  buttonCancel: {
    backgroundColor: "#FFFFFF",
    minWidth: "30%",
    flexShrink: 1,
  },
  buttonConfirm: {
    backgroundColor: "#F29B13",
    minWidth: "40%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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

export default ModaleMainComponent;
