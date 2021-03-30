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

import ModaleMainComponent from "../../../components/ModaleMainComponent";

function ContacterModale(props) {
  let seller = props.SellerFirstName;

  let numOfLinesCompany = 0;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.Visible}
      onRequestClose={() => {}}
    >
      <ModaleMainComponent
        Header={"Contacter " + props.SellerFirstName + " " + props.SellerName}
        Buttons={{ cancel: "Annuler", submit: "Envoyer" }}
      >
        <View>
          <Text style={styles.soustitre}>Depuis</Text>
          <Text style={styles.textInfo}>Marché - {props.Plat}</Text>
        </View>
        <View style={styles.lineStyle} />
        <View>
          <Text style={styles.soustitre}>
            Sera partagé avec {props.SellerFirstName}
          </Text>
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
      </ModaleMainComponent>
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
    textTransform: "uppercase",
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    opacity: 0.5,
    marginBottom: 5,
  },
  textInfo: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
  },
});
export default ContacterModale;
