import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import estilo from "../style/global.js";

export default function Inicio() {
  return (
    <View style={estilo.background}>
      <Image
        source={require("../assets/bordes.jpeg")}
        contentFit="cover"
        // style={StyleSheet.absoluteFill}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      />
      {/* <ImageBackground
        source={require("../assets/bordes.jpeg")}
        resizeMode="cover"
        style={estilo.background}
      >
      </ImageBackground> */}
      <Image
        source={require("../assets/blood_drop.jpg")}
        contentFit="cover"
        style={{
          height: 225,
          width: 400,
          zIndex: 0,
          opacity: 0.8,
          borderRadius: 100,
        }}
      />

    </View>
  );
}
