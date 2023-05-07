import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  Platform,
  Pressable,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from "react-native";

interface P {
  onSelect: (item: ImageSourcePropType) => void;
  onCloseModal: () => void;
}

const EmojiList: React.FC<P> = ({ onSelect, onCloseModal }) => {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("/public/images/emoji1.png"),
    require("/public/images/emoji2.png"),
    require("/public/images/emoji3.png"),
    require("/public/images/emoji4.png"),
    require("/public/images/emoji5.png"),
    require("/public/images/emoji6.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
};

export default EmojiList;

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
