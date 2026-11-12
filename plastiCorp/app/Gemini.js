import { GoogleGenAI } from "@google/genai";

import { useRef, useState } from "react";
import { View, Text, ScrollView, Keyboard, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ContainerGradient from "../simple_code/ContainerGradient";
import Input from "../components/Input";
import Botao from "../components/Botao";
import estilo from "../style/global";

const ai = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_Gemini_key || "",
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
    { text: "Ola, como eu posso te ajudar", date: "now" },
  ]);
  const [escrevendo, setEscrevendo] = useState(false);
  const inputRef = useRef(null);

  async function askgemini() {
    try {
            const respons = await ai.models.generateContent({
              model: "gemini-3.5-flash-lite",
              contents: [pergunta],
              config: {
                thinkingConfig: {
                  thinkingLevel:"MINIMAL"
                },
                systemInstruction:
                  "Tu vas a ser un Tipo de professor que explicara de forma simple y concisa sobre: residuos, reciclaje y microplasticos",
              },
            });
            console.log(respons);
      
            if (respons && respons.text) {
              setResposta([...resposta, respons]);
      
            }
      inputRef.current?.clear();

    } catch (error) {
      console.error("Erro ao chamar o Gemini:", error);
    }
  }

  return (
    <ContainerGradient>
      <ScrollView
        contentContainerStyle={{
          alignItems: "baseline",
          padding: 10,
          gap: 10,
        }}
      >
        {resposta
          ? resposta.map((rp, i) => {
              return (
                <View
                  key={i}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    borderRadius: 0,
                    backgroundColor: "rgba(20, 33, 120, 1.0)",
                    borderTopStartRadius: 30,
                    borderTopEndRadius: 30,
                    borderEndEndRadius: 30,
                    borderWidth: 3.5,
                    boxSizing: "border-box",
                    borderColor: "rgba(106, 217, 165, 1.0)",
                    boxShadow: "0px 0px 10px 0px rgba(106, 217, 165, 1.0)",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      alignSelf: "center",
                      boxSizing: "border-box",
                      top: -3,
                      backgroundColor: "white",
                      minWidth: "50%",
                      width: "100vw",
                      padding: 5,
                      borderTopStartRadius: 30,
                      borderTopEndRadius: 30,
                      flexDirection: "row",
                    }}
                  >
                    <Image
                      source={require("../assets/icon.png")}
                      style={{
                        height: 35,
                        width: 35,
                        borderRadius: 1000,
                        left: 10,
                      }}
                    />
                    <Text
                      style={[
                        estilo.titulo,
                        {
                          alignSelf: "center",
                          left: 12,
                          fontWeight: "bold",
                          fontSize: 20,
                          lineHeight: 20,
                          color: "rgba(106, 217, 125, 1.0)",
                        },
                      ]}
                    >
                      Especialista IA:
                    </Text>
                  </View>
                  <Text
                    style={[
                      estilo.textito,
                      {
                        maxWidth: 400,
                        lineHeight: 15,
                        alignSelf: "center",
                        overflow: "scroll",
                      },
                    ]}
                  >
                    {rp.text}
                  </Text>
                  <Text
                    style={[
                      estilo.textito,
                      { alignSelf: "flex-end", right: 10, bottom: 10 },
                    ]}
                  >
                    {rp.date}
                  </Text>
                </View>
              );
            })
          : null}
      </ScrollView>
      <View
        style={{
          boxShadow: "0px 0px 5px 0.1px white",
          flex: 1,
          bottom: escrevendo == true ? "39%" : "1%", // esto cambia de 1 a 50% de la pantalla para que se pueda ver
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
          ref={inputRef}
          style={{
            borderWidth: 0,
            height: "90%",
            width: "70%",
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
      <View
        style={{
          height: 90,
        }}
      />
    </ContainerGradient>
  );
}
