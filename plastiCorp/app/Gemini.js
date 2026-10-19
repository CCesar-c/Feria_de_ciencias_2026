
import { GoogleGenAI } from "@google/genai"
import { useState } from "react"
import { View, Button, Text, TextInput, ScrollView, TouchableOpacity } from "react-native"
import estilo from "../style/global"

const ai = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_Gemini_key
})

export default function Gemini() {

  const [pergunta, setPergunta] = useState("")
  const [resposta, setResposta] = useState("")

  async function askgemini() {
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
    <View style={estilo.background} >
      <ScrollView >
        {resposta ? (
          <View style={{ backgroundColor: '#f0f0f0', borderRadius: 5 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Resposta do Professor:</Text>
            <Text>{resposta}</Text>
          </View>
        ) : null}
      </ScrollView>
      <View style={{ flex: 1, bottom: -125, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap:10}} >

        <TextInput
          placeholder="escreva sua pergunta aqui"
          onChangeText={(t) => setPergunta(t)}
          value={pergunta}
          style={{ height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}
        />
        <TouchableOpacity
          style={{ borderColor: "green", borderWidth:1 }}
          onPress={askgemini}
        ><Text>
            enviar resposta
          </Text></TouchableOpacity>
      </View>
    </View>

  )
}
