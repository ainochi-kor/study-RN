import { Image, ImageSourcePropType, View } from "react-native";

interface P {
  imageSize: number;
  stickerSource: ImageSourcePropType;
}

const EmojiSticker: React.FC<P> = ({ imageSize, stickerSource }) => {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }}
        alt="sticker"
      />
    </View>
  );
};

export default EmojiSticker;
