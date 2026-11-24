import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";
import estilo from "../style/global.js";
import ContainerGradient from "../simple_code/ContainerGradient.js";
import { useState } from "react";
import Botao from "../components/Botao.js";

export default function Inicio() {
  const [viewCard, setViewCard] = useState(false)
  return (
    <ContainerGradient>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{

          paddingTop: 80,
          gap: 10,
          minHeight: "100vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
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
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text
            style={[
              estilo.titulo,
              { fontSize: 40, textAlign: "center", lineHeight: 35 },
            ]}
          >
            Seu corpo esta se tornando plastico?
          </Text>
          <Text
            style={[estilo.subtitle, { color: "white", textAlign: "center" }]}
          >
            A Inteligencia Artificial revela quanto microplasticos voce ingere e
            os riscos para a sua saude
          </Text>
        </View>
        <Botao onPress={() => setViewCard(!viewCard)} >{"Ver mais"}</Botao>
        {viewCard && <View
          style={{
            flex: 1
          }}
        >
          <View
            style={{

              borderRadius: 10,
              padding: 10,
              backgroundImage:
                "radial-gradient( rgba(0,0,0,0.25), rgba(0,0,0,0.25))",
              margin: 10,
              gap: 10,
            }}
          >
            <Text
              style={[
                estilo.titulo,
                { fontSize: 40, textAlign: "center", lineHeight: 50 },
              ]}
            >
              Nossa Historia
            </Text>
          </View>
          <View
            style={{

              borderRadius: 10,
              padding: 10,
              backgroundImage: "radial-gradient( gray, rgba(255,255,255,0.8))",
              margin: 10,
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 25 }}>
              O que é e para que foi criado PlastiCorp ?
            </Text>
            <Text style={{ fontSize: 15 }}>
              {"  "}A
              {
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {" "}
                  PLASTICORP
                </Text>
              }{" "}
              foi criada para conscientizar as pessoas sobre os perigos do uso
              diario do plastico e como acabamos por ingerir esse material sem
              perceber, utilizando cálculos e Inteligencia Artificial
            </Text>
          </View>
          <View
            style={{

              borderRadius: 10,
              padding: 10,
              backgroundImage: "radial-gradient( gray, rgba(255,255,255,0.8))",
              margin: 10,
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 25 }}>
              O que e um micro(ou nano) plastico ?
            </Text>
            <Text style={{ fontSize: 15 }}>
              {"  "}
              São partículas de plásticos que estão em muitos lugares, como na
              comida e em utensilios, e que acabam entrando em nosso corpo. Por
              serem tão pequenas, uma fração delas não conseguem ser eliminada
              pelo organismo, e por consequência ficam como "hóspedes" em nós.
            </Text>
          </View>
          <View
            style={{
              borderRadius: 10,
              padding: 10,
              backgroundImage: "radial-gradient( gray, rgba(255,255,255,0.8))",
              margin: 10,
              gap: 10,
            }}
          >
            <Text style={{ fontSize: 25 }}>
              Consequências do micro(ou nano) plástico no nosso corpo
            </Text>
            <Text style={{ fontSize: 15 }}>
              {"  "}
              Entre as principais consequência estão:
              {"\n"}- Problemas hormonais.
              {"\n"}- Riscos cardiovasculares.
              {"\n"}- Problemas repiratórios e imunológicos.
            </Text>
          </View>
        </View>}
      </ScrollView>
    </ContainerGradient>
  );
}
