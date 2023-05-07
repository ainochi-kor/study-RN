import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import tw from "twrnc";

interface P {
  selectedImage: ImageSourcePropType;
}

const ImageViewer: React.FC<P> = ({ selectedImage }) => {
  return (
    <Image
      source={selectedImage}
      style={{
        width: 400,
        height: 400,
        borderRadius: 18,
      }}
      alt="image"
    />
  );
};

export default ImageViewer;
