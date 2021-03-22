import React, { useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

function ContacterModale(props) {
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  });
  const _keyboardDidShow = () => {
    keybOpen = true;
    console.log(keybOpen);
  };

  const _keyboardDidHide = () => {
    keybOpen = false;
    console.log(keybOpen);
  };
  let keybOpen = Boolean;
  function ToucherCote() {
    console.log("TOUCHER");
    if (keybOpen) {
      Keyboard.dismiss();
    } else {
      props.ChangeVisibility(false);
    }
  }
  let numOfLinesCompany = 0;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.Visible}
      onRequestClose={() => {}}
    >
      <TouchableWithoutFeedback onPress={() => ToucherCote()}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView]}>
            <View style={styles.headermodal}>
              <Text style={styles.Headertext} numberOfLines={1}>
                Contacter Nom-Prénom
              </Text>
            </View>
            <View style={styles.bodyModal}>
              <View>
                <Text style={styles.soustitre}>DEPUIS</Text>
                <Text style={styles.textInfo}>Marché - CousCous</Text>
              </View>
              <View style={styles.lineStyle} />
              <View>
                <Text style={styles.soustitre}>SERA PARTAGÉ AVEC Prénom</Text>
                <Text style={styles.textInfo}>Email et Téléphone</Text>
              </View>
              <View style={styles.lineStyle} />
              <View>
                <Text style={styles.soustitre}>MESSAGE :</Text>
                <TextInput
                  multiline
                  numberOfLines={3}
                  style={styleForms.longinput}
                  numberOfLines={numOfLinesCompany}
                  onContentSizeChange={(e) => {
                    numOfLinesCompany = e.nativeEvent.contentSize.height / 18;
                  }}
                  onChangeText={(text) => console.log(text.length)}
                />
              </View>
            </View>

            <View style={styles.footerModal}>
              <Pressable
                style={[styles.button, styles.buttonCancel]}
                onPress={() => props.ChangeVisibility(false)}
              >
                <Text style={styles.textStyleCancel}>Annuler</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonConfirm]}
                onPress={() => props.ChangeVisibility(false)}
              >
                <Text style={styles.textStyle}>Envoyer</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styleForms = StyleSheet.create({
  longinput: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    flexShrink: 1,
    maxHeight: 90,
    marginBottom: 30,
    paddingBottom: 10,
    paddingBottom: 0,
    borderBottomWidth: 0.7,
    borderBottomColor: "#000000",
  },
});
const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    marginVertical: 10,
    opacity: 0.5,
  },
  soustitre: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    opacity: 0.5,
    marginBottom: 5,
  },
  textInfo: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 500,
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
  bodyModal: {
    flex: 1,
    padding: 20,
  },
  footerModal: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },
  Headertext: {
    borderRadius: 50,
    width: "100%",
    backgroundColor: "#EDEDED",
    fontFamily: "Poppins-Medium",
    fontSize: 20,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonCancel: {
    backgroundColor: "#FFFFFF",
  },
  buttonConfirm: {
    width: "45%",
    backgroundColor: "#F29B13",
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default ContacterModale;
