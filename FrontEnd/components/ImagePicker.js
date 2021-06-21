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
import ImageVue from "../components/ImageVueComponent";

function ImagePickerComponent(props) {
  return (
    <View
      style={{
        marginBottom: 20,
      }}
    >
      <View
        horizontal
        centerContent
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          centerContent
          horizontal={true}
          data={props.ListImage}
          keyExtractor={(item) => item}
          renderItem={(item) => (
            <ImageVue
              item={item}
              function={() => console.log(props.ListImage)}
              addImage={props.addImage}
              navigation={props.navigation}
              forceUpdate={props.forceUpdate}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImagePickerComponent;
