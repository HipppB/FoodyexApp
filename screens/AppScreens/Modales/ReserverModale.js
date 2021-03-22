import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

function ReserverModale() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      ></Modal>
    </View>
  );
}
export default ReserverModale;
