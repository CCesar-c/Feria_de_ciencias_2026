import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ImageBackground, StyleSheet } from "react-native";
import estilo from "../style/global.js";

export default function Inicio() {
  return (
    <View style={estilo.background}>
      <ImageBackground
        source={require("../assets/bordes.jpeg")}
        resizeMode="cover"
        style={estilo.background}
      >
        <Text>Olaa</Text>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
