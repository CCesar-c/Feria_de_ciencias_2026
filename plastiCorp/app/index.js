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
        <Image
          source={require("../assets/blood_drop.jpg")}
          contentFit="fill"
          style={{
            height: 225,
            width: 400,
            zIndex: 0,
            opacity: 0.8,
            borderRadius: 100,
          }}
        />
      </ImageBackground>
    </View>
  );
}
