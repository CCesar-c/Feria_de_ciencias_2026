import { GoogleGenAI } from "@google/genai"
import { useState } from "react"
import { View, Button, Text, TextInput, ScrollView } from "react-native"

const ai = new GoogleGenAI({
  apiKey: "AQ.Ab8RN6LMwZKf4LJoaEv9KN4ciftREUcoj8kSP0uf9KbHswI3nw"
})

export default function Gemini() {

  const [ pergunta, setPergunta ] = useState("")
  const [ resposta, setResposta ] = useState("")

  async function askgemini() {
    try {
      const respons = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: [ pergunta ],
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
    <ScrollView style={{ padding: 20, marginTop: 40 }}>
      <TextInput
        placeholder="escreva sua pergunta aqui"
        onChangeText={(t) => setPergunta(t)}
        value={pergunta}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 }}
      />
      <Button
        title="enviar pergunta"
        onPress={askgemini}
      />

      {resposta ? (
        <View style={{ marginTop: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Resposta do Professor:</Text>
          <Text>{resposta}</Text>
        </View>
      ) : null}
    </ScrollView>
  )
}
