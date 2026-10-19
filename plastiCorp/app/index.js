import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { Text, View, ImageBackground } from "react-native";
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
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
