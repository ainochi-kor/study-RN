import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  Pressable,
  StatusBar,
  ImageSourcePropType,
} from "react-native";
import tw from "twrnc";
import ImageViewer from "../src/components/ImageViewer";
import Button from "../src/components/Button/Button";
import * as ImagePicker from "expo-image-picker";
import IconButton from "../src/components/Button/IconButton";
import CircleButton from "../src/components/Button/CircleButton";
import EmojiPicker from "../src/components/Eomoji/EmojiPicker";
import EmojiList from "../src/components/Eomoji/EmojiList";
import EmojiSticker from "../src/components/Eomoji/EmojiSticker";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string>(
    "https://ps.w.org/image-comparison/assets/icon-256x256.png?rev=2587037"
  );
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | null>(
    null
  );

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const handleReset = () => {
    setShowAppOptions(false);
  };

  const handleSaveImageAsync = async () => {
    // we will implement this later
  };

  const handleAddSticker = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const handleSelectEmoji = (item: ImageSourcePropType) => {
    setPickedEmoji(item);
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
        {pickedEmoji !== null ? (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        ) : (
          <></>
        )}
      </View>

      {showAppOptions ? (
        <View style={{ position: "absolute", bottom: 80 }}>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <IconButton icon="refresh" label="Reset" onPress={handleReset} />
            <CircleButton onPress={handleAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={handleSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 / 3, ...tw`items-center` }}>
          <Button label="Choose a photo" onPress={pickImageAsync} />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={handleModalClose}>
        <EmojiList
          onSelect={handleSelectEmoji}
          onCloseModal={handleModalClose}
        />
      </EmojiPicker>
      <StatusBar />
    </View>
  );
}
