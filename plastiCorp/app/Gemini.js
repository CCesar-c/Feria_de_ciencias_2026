import { GoogleGenAI } from "@google/genai";

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import estilo from "../style/global";

const ai = new GoogleGenAI({
  apiKey:
    process.env.EXPO_PUBLIC_Gemini_key ||
    "AQ.Ab8RN6KfXk97t3C2L7q1i4R0k_v8guQ8qqJeDnUlYzve-wcHug",
});

export default function Gemini() {
  function DataAhora() {
    let dataNow = new Date()
    return `${dataNow.getHours()}:${dataNow.getMinutes()}:${dataNow.getSeconds()} - ${dataNow.getMilliseconds()} `
  }
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState([
    "si",
    "El plástico es un material sintético o semisintético ",
  ]);

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
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        boxSizing: "border-box",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          gap: 10,
          padding:10
        }}
      >
        {resposta
          ? resposta.map((rp, i) => {
              return (
                <View
                  key={i}
                  style={{
                    backgroundColor: "#f0f0f0",
                    borderRadius: 5,
                    borderWidth: 2.5,
                    borderColor: "rgba(128,128,128,0.5)",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
                    Resposta do Professor:
                  </Text>
                  <Text>{rp}</Text>
                  <Text style={{ alignSelf:"flex-end" }} >{DataAhora()}</Text>
                </View>
              );
            })
          : null}
      </ScrollView>
      <View
        style={{
          borderColor: "black",
          borderWidth: 0.2,
          flex: 1,
          bottom: 25,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          position: "absolute",
          backgroundColor: "white",
          height: 75,
          width: 300,
          borderRadius: 50,
        }}
      >
        <TextInput
          placeholder="escreva sua pergunta aqui"
          onChangeText={(t) => setPergunta(t)}
          value={pergunta}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            height: "strech",
            width:"strech"
          }}
        />
        <TouchableOpacity
          onPress={() => {
            askgemini();
          }}
        >
          <AntDesign
            name="arrow-up"
            size={24}
            color="white"
            style={{
              backgroundColor: "#0088CC",
              padding: 10,
              borderRadius: 100,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
