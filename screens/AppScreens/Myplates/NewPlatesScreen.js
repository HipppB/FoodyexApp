import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Pressable,
  prompt,
} from "react-native";
import { lauchCamera, launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

function NewPlatesScreen({ navigation }) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={StyleLowerMenu.container}>
      <SafeAreaView style={StyleLowerMenu.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ marginLeft: 15 }}
            source={require("../../../assets/Images/chevron-left.png")}
          />
          <Text
            style={{
              position: "absolute",
              alignSelf: "center",
              top: 2,
              fontFamily: "Roboto-Thin",
              fontSize: 18,
            }}
          >
            Page Under Construction
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={StyleLowerMenu.containerbottom}>
        {!image && <Button title="Bouton" onPress={pickImage} />}
        {image && (
          <TouchableOpacity
            onPress={() =>
              AlertIOS.alert([
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "Install",
                  onPress: () => console.log("Install Pressed"),
                },
              ])
            }
          >
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const StyleLowerMenu = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F6F6F9",
  },
  containerHeader: {},
  containerbottom: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  chevron: {},
  title: {},
});
export default NewPlatesScreen;
