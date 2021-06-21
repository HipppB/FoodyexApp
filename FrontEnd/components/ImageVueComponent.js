import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Text,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ImageVue(props) {
  function theFunction() {
    console.log(props);
    props.navigation.navigate("CameraScreen", {
      onChangeImage: props.addImage,
    });
  }
  if (props.item.item == "Add") {
    return (
      <TouchableOpacity onPress={theFunction}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            marginHorizontal: 10,
          }}
        >
          <MaterialIcons name="photo-camera" size={30} color="gray" />
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => console.log("Hey")}>
        <View
          style={{
            height: 100,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
            marginHorizontal: 10,
          }}
        >
          <Image
            source={{ uri: props.item.item }}
            style={{ height: 100, width: 100, borderRadius: 25 }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
