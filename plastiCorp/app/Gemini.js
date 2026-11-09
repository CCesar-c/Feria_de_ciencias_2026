import { GoogleGenAI } from "@google/genai";

import { useState } from "react";
import { View, Text, ScrollView, Keyboard } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ContainerGradient from "../simple_code/ContainerGradient";
import Input from "../components/Input";
import Botao from "../components/Botao";
import estilo from "../style/global";

const ai = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_Gemini_key || "any",
});

export default function Gemini() {
  Keyboard.addListener("keyboardDidShow", () => setEscrevendo(true));
  Keyboard.addListener("keyboardDidHide", () => setEscrevendo(false));
  function DataAhora() {
    let dataNow = new Date();
    return `${dataNow.getHours()}:${dataNow.getMinutes()}:${dataNow.getSeconds()} - ${dataNow.getMilliseconds()} `;
  }
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState([
    "El plástico es un material sintético o semisintético ",
  ]);
  const [escrevendo, setEscrevendo] = useState(false);

  async function askgemini() {
    alert("executou");
    try {
      const respons = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: [pergunta],
        config: {
          systemInstruction:
            "Tu vas a ser un Tipo de professor que explicara de forma simple y concisa sobre: residuos, reciclaje y microplasticos",
        },
      });

      if (respons && respons.text) {
        setResposta([...resposta, respons.text]);
      }
    } catch (error) {
      console.error("Erro ao chamar o Gemini:", error);
    }
  }

  return (
    <ContainerGradient>
      <ScrollView
        contentContainerStyle={{
          padding: 10,
        }}
      >
        {resposta
          ? resposta.map((rp, i) => {
              return (
                <View
                  key={i}
                  style={{
                    borderRadius: 0,
                    backgroundColor: "rgba(20, 23, 40, 1.0)",
                    padding: 0,
                    borderWidth: 2.5,
                    borderTopStartRadius: 30,
                    borderTopEndRadius: 30,
                    borderEndEndRadius: 30,
                    boxShadow: "0px 0px 10px 5px rgba(106, 217, 165, 1.0)",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      height:"35%",
                      padding: 5,
                      borderTopStartRadius: 20,
                      borderTopEndRadius: 20,
                    }}
                  >
                    <Text
                      style={[
                        estilo.titulo,
                        {
                          fontWeight: "bold",
                          fontSize: 20,
                          lineHeight: 20,
                          color: "rgba(106, 217, 165, 1.0)",
                        },
                      ]}
                    >
                      Especialista IA:
                    </Text>
                  </View>
                  <Text style={estilo.textito}>{rp}</Text>
                  <Text style={{ alignSelf: "flex-end" }}>{DataAhora()}</Text>
                </View>
              );
            })
          : null}
      </ScrollView>
      <View
        style={{
          boxShadow: "0px 0px 5px 0.1px white",
          flex: 1,
          bottom: escrevendo == true ? "39%" : "2%", // esto cambia de 25 a 50% de la pantalla para que se pueda ver
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          position: "absolute",
          backgroundColor: "rgba(21, 77, 89, 1.0)",
          height: 75,
          width: 350,
          borderRadius: 50,
        }}
      >
        <Input
          placeholder="escreva sua pergunta aqui"
          value={pergunta}
          style={{
            height: "90%",
            width: "70%",
            borderWidth: 0,
          }}
          onChangeText={(t) => setPergunta(t)}
        />
        <Botao
          style={{
            height: 50,
            width: 50,
            backgroundColor: "rgba(0, 255, 136, 1.0)",
            padding: 10,
            borderRadius: 100,
          }}
          onPress={() => {
            askgemini();
          }}
          children={
            <AntDesign name="arrow-up" size={24} color="rgba(2, 89, 48, 1.0)" />
          }
        />
      </View>
    </ContainerGradient>
  );
}
