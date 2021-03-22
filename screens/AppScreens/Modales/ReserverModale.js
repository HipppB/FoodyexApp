import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
} from "react-native";

function ReserverModale(props) {
  let nombreDepartMax = props.NumberOfSlice;
  let defaultstep = 1;
  if (!props.PartIndividuelle) {
    defaultstep = props.NumberOfSlice;
  }
  const [openModal, changeopen] = useState(props.Visible.modalVisible);
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
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.headermodal}>
            <Text style={styles.Headertext} numberOfLines={1}>
              Réservation
            </Text>
          </View>
          <View style={styles.bodyModal}>
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
          </View>

          <View style={styles.footerModal}>
            <View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => props.ChangeVisibility(false)}
              >
                <Text style={styles.textStyle}>close Modal</Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => props.ChangeVisibility(false)}
              >
                <Text style={styles.textStyle}>Réserver ({totalPrice}‡)</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
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
    fontFamily: "Roboto-Regular",
    fontSize: 15,
    opacity: 0.5,
    marginBottom: 5,
  },
  textInfo: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
  buttonClose: {
    backgroundColor: "#F29B13",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default ReserverModale;
