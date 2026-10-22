import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { Text, View, ImageBackground, ScrollView, } from "react-native";
import estilo from "../style/global.js";

export default function Inicio() {
  return (
    <View
      style={{
        flex: 1,
        minHeight: "100vh",
        width: "100vw",
        boxSizing: "border-box",
        flexDirection: "column",
        alignItems: "baseline",

      }} >
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={{
          minHeight: "strech",
          width: "strech",
          margin: 10,
          padding: 10,
          borderRadius: 15,
          borderColor: "#0F172A",
          borderWidth: 1,
          gap: 10
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={{ fontSize: 35, fontWeight: "bold", gap: 10, color: "#0f172a" }} >PlastiCorp</Text>

        <Text style={{ fontSize: 25 }} >
          O que e PlastiCorp ?
        </Text>
        <Text style={{ fontSize: 15 }} >
          É um aplicativo destinado a o ensinamento aprendizado sobre os microplasticos a suas consequencias etc..
        </Text>
        <Image source={require("../assets/iconCentral.jpg")} style={{ height: 200, width: 200, left: 25, borderRadius: 10, borderColor: "#0f172a21", borderWidth: 2 }} />

        <Text style={{ fontSize: 25 }} >
          Para que foi criada PlastiCorp ?
        </Text>
        <Text style={{ fontSize: 15 }} >
          Com o fim de simplificar a busca e concientiçar o as pessoas sobre os perigos e da normalizaçao do consumo deo plastico no corpo humano
        </Text>
      </ScrollView>
    </View>
  );
}
{/* <Image
        // source={require("../assets/bordes.jpeg")}
        contentFit="cover"
        // style={StyleSheet.absoluteFill}
        style={{
          opacity: 0.7,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      /> */}
{/* <ImageBackground
        source={require("../assets/bordes.jpeg")}
        resizeMode="cover"
        style={estilo.background}
      >
      </ImageBackground> 
       <View
        style={{
          display: "flex",
          boxSizing: "border-box",
          flex: 1,

          width: 410,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/blood_drop.jpg")}
          contentFit="contain"
          style={{
            position: "absolute",
            opacity: 0.7,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
        </Image> 
      </View>*/}