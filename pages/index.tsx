import React, { useState } from "react";
import { Image, Text, View, Pressable } from "react-native";
import tw from "twrnc";
import ImageViewer from "../src/components/ImageViewer";
import Button from "../src/components/Button";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string>(
    "https://ps.w.org/image-comparison/assets/icon-256x256.png?rev=2587037"
  );

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        ...tw`items-center bg-gray-900`,
      }}
    >
      <View style={{ flex: 1, paddingTop: 58 }}>
        <ImageViewer selectedImage={{ uri: selectedImage }} />
      </View>
      <View style={{ flex: 1 / 3, ...tw`items-center` }}>
        <Button label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}
