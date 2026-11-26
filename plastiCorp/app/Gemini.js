import { GoogleGenAI } from "@google/genai";
import { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Keyboard,
  Image,
  useWindowDimensions,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ContainerGradient from "../simple_code/ContainerGradient";
import Input from "../components/Input";
import Botao from "../components/Botao";
import estilo from "../style/global";
import CardChat from "../simple_code/CardChat";

const ai = new GoogleGenAI({
  apiKey: process.env.EXPO_PUBLIC_Gemini_key || "",
});

export default function Gemini() {
  const { height } = useWindowDimensions();

  Keyboard.addListener("keyboardDidShow", () => setEscrevendo(true));
  Keyboard.addListener("keyboardDidHide", () => setEscrevendo(false));

  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState([
    {
      text: "Ola! eu sou o Especialista de plastiCorp, como eu posso te ajudar?",
      date: "17/11",
    },
    {
      text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
      date: "18/11",
    },
    {
      text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
      date: "19/11",
    },
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
            thinkingLevel: "MINIMAL",
          },
          systemInstruction:
            "Voce vai ser um professor que explicara de forma simple y solida sobre: residuos, reciclagem y microplasticos, etc..",
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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          width: "100%",
          alignItems: "baseline",
          padding: 20,
          gap: 10,
        }}
      >
        {resposta
          ? resposta.map((rp, i) => {
              return <CardChat key={i} text={rp?.text} date={rp?.date} />;
            })
          : null}
        <View
          style={{
            height: Keyboard.isVisible()
              ? Keyboard.metrics().height + height * 0.05
              : height * 0.1,
          }}
        />
      </ScrollView>

      <View
        style={{
          boxShadow: "0px 0px 5px 0.1px white",
          flex: 1,
          bottom:
            escrevendo == true
              ? Keyboard.metrics().height - Keyboard.metrics().height * 0.1
              : "1%", // esto cambia de 1 a 50% de la pantalla para que se pueda ver
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          position: "absolute",
          backgroundColor: "rgba(21, 77, 89, 1.0)",
          height: "10%",
          width: Keyboard.isVisible() ? Keyboard.metrics().width : "80%",
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
          onChangeText={(t) => {
            setPergunta(t);
          }}
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
