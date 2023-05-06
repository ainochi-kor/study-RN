import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`pt-12 flex items-center justify-center h-full w-full`}>
      <Text style={tw`text-base`}>Welcome to Expo + Next.js 👋</Text>
    </View>
  );
}
