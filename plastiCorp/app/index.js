import { Image } from "expo-image";
import {
  Text,
  View,
} from "react-native";
import estilo from "../style/global.js";
import ContainerGradient from "../simple_code/ContainerGradient.js";

export default function Inicio() {
  return (
    <ContainerGradient>
      <View
        style={{
          height: "stretch",
          width: "stretch",
          top: -40,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("../assets/icon.png")}
          style={{
            height: 100,
            width: 100,
            borderRadius: 1000,
            borderWidth: 4,
          }}
        />
        <View>
          <Text
            style={[
              estilo.titulo,
              { fontSize: 28, alignSelf: "center", lineHeight: 20 },
            ]}
          >
            PLASTICORP
          </Text>
          <Text
            style={[
              estilo.textito,
              { color: "white", lineHeight: 20, alignSelf: "center" },
            ]}
          >
            IA Biotecnologica
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 350,
          width: 350,
          padding: 10,
          borderRadius: 200,
          borderColor: "#1FE585",
          borderWidth: 3,
          boxShadow: "0px 0px 20px 0px #6AD9A5 ",
        }}
      >
        <Image
          style={{
            alignSelf: "center",
            height: "100%",
            width: "100%",
            borderRadius: 200,
          }}
          source={require("../assets/gotaSangre.jpg")}
        />
      </View>
      <View
        style={{
          height: "stretch",
          width: "stretch",
          alignItems: "center",
          gap: 20,
          bottom: -60,
        }}
      >
        <Text
          style={[
            estilo.titulo,
            { fontSize: 40, textAlign: "center", lineHeight: 35 },
          ]}
        >
          Seu corpo esta se tornando de plastico?
        </Text>
        <Text
          style={[estilo.subtitle, { color: "white", textAlign: "center" }]}
        >
          A Inteligencia Artificial revela quanto microplasticos voce ingere e
          os riscos para a sua saude
        </Text>
      </View>
    </ContainerGradient>
  );
}

/**
 *
 *  AREA DE RECICLAGE(COSAS QUE SE PUEDEN USAR DE NUEVO)
 *
 */

{
  /* <Image
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
      /> */
}
{
  /* <ImageBackground
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
      </View>*/
}

{
  /* <ScrollView
  scrollEnabled={true}
  contentContainerStyle={{
    minHeight: "strech",
    width: "strech",
    backgroundColor:"white",
    padding: 10,
    alignSelf:"center",
    borderRadius: 15,
    borderColor: "#0F172A",
    borderWidth: 1,
    gap: 10,
  }}
  showsVerticalScrollIndicator={false}
>
  <Text
    style={estilo.titulo}
  >
    PlastiCorp
  </Text>

  <Text style={{ fontSize: 25 }}>O que e PlastiCorp ?</Text>
  <Text style={{ fontSize: 15 }}>
    É um aplicativo destinado a o ensinamento aprendizado sobre os
    microplasticos a suas consequencias etc..
  </Text>
  <Image
    source={require("../assets/icon.png")}
    style={{
      height: 200,
      width: 200,
      left: 25,
      borderRadius: 10,
      borderColor: "#0f172a21",
      borderWidth: 2,
    }}
  />

  <Text style={{ fontSize: 25 }}>Para que foi criada PlastiCorp ?</Text>
  <Text style={{ fontSize: 15 }}>
    Com o fim de simplificar a busca e concientiçar o as pessoas sobre os
    perigos e da normalizaçao do consumo deo plastico no corpo humano
  </Text>

  <Text style={{ fontSize: 20, marginTop: 20 }}>Voce sabe quanto plastico passou pelo seu corpo hoje ?</Text>
  <Text style={{ fontSize: 15 }}>
    Se quiser saber pode responde esse questionario.
  </Text>
  <Link style={[estilo.button, { height:20 }]} href={"calcularPlastico"}>
    <Text style={{ alignSelf:"center"}} >Aqui</Text>
  </Link>
</ScrollView>*/
}
