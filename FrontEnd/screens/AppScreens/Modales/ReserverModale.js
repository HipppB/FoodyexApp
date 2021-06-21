import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

//For context :
import { useContext } from "react";
import AppContext from "../../../components/AppContext";

import ModaleMainComponent from "../../../components/ModaleMainComponent";
function ReserverModale(props) {
  //Global Context:
  const TheContext = useContext(AppContext);
  let nombreDepartMax = props.NumberOfSlice;
  let defaultstep = 1;
  if (!props.PartIndividuelle) {
    defaultstep = props.NumberOfSlice;
  }
  const [stepper, valuestepper] = useState(defaultstep);
  const [totalPrice, changeprice] = useState(defaultstep * props.prixUnePart);
  function changevalue(step) {
    if (stepper + step > 0 && stepper + step < nombreDepartMax + 1) {
      valuestepper(stepper + step);
      changeprice((stepper + step) * props.prixUnePart);
    }
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.Visible}
      onRequestClose={() => {}}
    >
      <ModaleMainComponent
        Header={"Réservation"}
        ChangeVisibility={props.ChangeVisibility}
        Buttons={{
          cancel: "Annuler",
          submit: "Réserver (" + totalPrice + "‡)",
        }}
      >
        <View>
          <Text style={styles.soustitre}>PLAT</Text>
          <Text style={styles.textInfo}>{props.Plat}</Text>
        </View>
        <View style={styles.lineStyle} />
        <View>
          <Text style={styles.soustitre}>VENDEUR</Text>
          <Text style={styles.textInfo}>
            {props.SellerFirstName} {props.SellerName}
          </Text>
        </View>
        <View style={styles.lineStyle} />
        <View>
          <Text style={styles.soustitre}>
            NOMBRE DE PART ({props.prixUnePart} ‡/PART)
          </Text>
          <View style={Stylestepper.container}>
            <Pressable
              style={Stylestepper.button}
              onPress={() => changevalue(-defaultstep)}
            >
              <Text style={Stylestepper.text}>-</Text>
            </Pressable>
            <Text style={Stylestepper.text}>{stepper}</Text>
            <Pressable
              style={Stylestepper.button}
              onPress={() => changevalue(defaultstep)}
            >
              <Text style={Stylestepper.text}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.lineStyle} />
      </ModaleMainComponent>
    </Modal>
  );
}

const Stylestepper = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#F29B13",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "35%",
    height: 30,
    borderRadius: 30,
  },
  text: {
    lineHeight: 25,
    textAlignVertical: "center",
    fontSize: 15,
    color: "#F4F4F7",
    fontFamily: "Roboto-Bold",
  },
  button: {
    fontSize: 25,
    flex: 1,
    alignItems: "center",
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
});
export default ReserverModale;
