
import { GoogleGenAI } from "@google/genai"
import { useState } from "react"
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import estilo from "../style/global"

const ai = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_Gemini_key || "AQ.Ab8RN6KfXk97t3C2L7q1i4R0k_v8guQ8qqJeDnUlYzve-wcHug"
})

export default function Gemini() {

  const [pergunta, setPergunta] = useState("")
  const [resposta, setResposta] = useState("El plástico es un material sintético o semisintético ")

  async function askgemini() {
    alert("executou")
    try {
      const respons = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: [pergunta],
        config: {
          systemInstruction: "Tu vas a ser un Tipo de professor que explicara de forma simple y concisa sobre: residuos, reciclaje y microplasticos"
        }
      })

      if (respons && respons.text) {
        setResposta(respons.text)
      }
    } catch (error) {
      console.error("Erro ao chamar o Gemini:", error)
    }
  }

  return (
    <View style={{ flex: 1, flexDirection: "column", boxSizing: "border-box", alignItems: "center", minHeight: "100vh", width: "100vw" }} >
      <ScrollView >
        {resposta ? (
          <View style={{ backgroundColor: '#f0f0f0', borderRadius: 5 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Resposta do Professor:</Text>
            <Text>{resposta}</Text>
          </View>
        ) : null}

      </ScrollView>
      <View style={{ flex: 1, bottom: 10, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 10, position: "absolute", backgroundColor: "white", height: 75, width: 300, borderRadius:50 }} >

        <TextInput
          placeholder="escreva sua pergunta aqui"
          onChangeText={(t) => setPergunta(t)}
          value={pergunta}
          style={{ height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}
        />
        <TouchableOpacity
          onPress={() => {
            askgemini()
          }}
        >
          <AntDesign name="arrow-up" size={24} color="white" style={{ backgroundColor: "#0088CC", padding: 10, borderRadius: 100 }} />
        </TouchableOpacity>
      </View>
    </View>

  )
}
