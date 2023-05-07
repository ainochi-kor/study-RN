import { StyleSheet, View, Pressable, Text, GestureResponderEvent } from "react-native";
import tw from "twrnc";

interface P {
  label: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Button: React.FC<P> = ({ label, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={tw` rounded-lg w-full h-full items-center justify-center`}
        onPress={onPress}
      >
        <Text style={tw`text-base text-white`}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  buttonIcon: {
    paddingRight: 8,
  },
});
