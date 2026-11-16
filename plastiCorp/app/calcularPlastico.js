import { useEffect, useState } from "react";
import { ScrollView, View, TextInput, Text, Keyboard } from "react-native";
import estilo from "../style/global";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LineChart, PieChart, DonutChart } from "react-native-chart-kit/v2";
import {
  FadeIn,
  ReducedMotionConfig,
  createAnimatedComponent,
} from "react-native-reanimated";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Botao from "../components/Botao";
import ContainerGradient from "../simple_code/ContainerGradient";
import Input from "../components/Input";
import PreguntaModulo from "../simple_code/PreguntaModulo";

export default function calcularPlastico() {
  const [heightHidden, setHeightHidden] = useState(10);
  Keyboard.addListener("keyboardDidShow", () => {
    setHeightHidden(Keyboard.metrics().height);
  });
  Keyboard.addListener("keyboardDidHide", () => {
    setHeightHidden(0);
  });
  const AnimatedView = createAnimatedComponent(View);
  const [restPlatico, setRestPlatico] = useState(0);
  const [fadeIn, setfadeIn] = useState();

  const [peso, setPeso] = useState(0);
  const [idade, setIdade] = useState(0);
  const [litrosAgua, setLitrosAgua] = useState(0);
  const [comidaPlastico, setComidaPlastico] = useState(0);

  let restoMinimoPlastico = restPlatico * 0.01;

  var data = [
    { tipo: "eliminado", valor: restPlatico * 0.99 },
    { tipo: "fica", valor: restPlatico * 0.01 },
  ];
  let tempAgua, tempComida, tempUtensilios;
  var dataLine = [
    { month: "jan", valor: restoMinimoPlastico * 31 },
    { month: "fev", valor: restoMinimoPlastico * (31 + 28) },
    { month: "mar", valor: restoMinimoPlastico * (31 + 28 + 31) },
    { month: "abr", valor: restoMinimoPlastico * (31 + 28 + 31 + 30) },
    { month: "maio", valor: restoMinimoPlastico * (31 + 28 + 31 + 30 + 31) },
    {
      month: "jun",
      valor: restoMinimoPlastico * (31 + 28 + 31 + 30 + 31 + 30),
    },
    {
      month: "jul",
      valor: restoMinimoPlastico * (31 + 28 + 31 + 30 + 31 + 30 + 31),
    },
    {
      month: "ago",
      valor: restoMinimoPlastico * (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31),
    },
    {
      month: "set",
      valor: restoMinimoPlastico * (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30),
    },
    {
      month: "out",
      valor:
        restoMinimoPlastico * (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31),
    },
    {
      month: "nov",
      valor:
        restoMinimoPlastico *
        (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30),
    },
    { month: "dez", valor: restoMinimoPlastico * 365 },
  ];
  let quantidade_cartoes_dia = (restoMinimoPlastico / 8680000000) * 100;
  return (
    <ContainerGradient>
      <ReducedMotionConfig mode="never" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            {
              flex: 1,
              boxShadow: "0px 0px 10px 0.1px black",
              alignSelf: "center",
              borderColor: "black",
              borderWidth: 1,
              padding: 10,
              margin: 10,
              gap: 10,
              backgroundImage: "radial-gradient(transparent 20%, white)",
            },
            estilo.card,
          ]}
        >
          <Text
            style={[estilo.titulo, { color: "black", textAlign: "center" }]}
          >
            Calculo de Plastico Diario
          </Text>
          <PreguntaModulo
            styleTitle={{
              color: "black",
              fontSize: 20,
              fontWeight: "bold",
            }}
            styleSubtitle={{
              color: "black",
              fontSize: 20,
              overflow: "visible",
            }}
            titulo={"Modulo 1: Consumo de agua"}
            subtitulos={[
              "Quanta litros de agua consumiu hoje (L)?",
              "De que tipo frecuentemente? ",
            ]}
            nomesOptions={[
              { nome: "Agua da torneira" },
              { nome: "Agua de galão" },
              { nome: "Agua de garrafa comprada" },
              { nome: "Agua de filtro " },
            ]}
            inputOptions={{
              placeholder: "escreva aqui",
              value: litrosAgua,
              onChangeText: (value) => {
                setLitrosAgua(value);
              },
            }}
            retornarChecks={(value) => {
              tempAgua = value;
            }}
          />
          <PreguntaModulo
            styleTitle={{
              color: "black",
              fontSize: 20,
              fontWeight: "bold",
            }}
            styleSubtitle={{
              color: "black",
              fontSize: 20,
              overflow: "visible",
            }}
            titulo={"Modulo 2: Alimentos e recipientes"}
            subtitulos={["Quantas vezes comeu hoje?", "Selecione seus habitos"]}
            nomesOptions={[
              { nome: "Usa um pote plastico no micro-ondas?" },
              { nome: "envolve comida em plastico?" },
              { nome: "come mariscos e peixes?" },
              { nome: "consome comida en pote unicel ou plastico" },
            ]}
            inputOptions={{
              placeholder: "escreva aqui",
              value: comidaPlastico,
              onChangeText: (value) => {
                setComidaPlastico(value);
              },
            }}
            retornarChecks={(value) => {
              tempComida = value;
            }}
          />
          <PreguntaModulo
            styleTitle={{
              color: "black",
              fontSize: 20,
              fontWeight: "bold",
            }}
            styleSubtitle={{
              color: "black",
              fontSize: 20,
              overflow: "visible",
              lineHeight: 0,
            }}
            inputShow={false}
            titulo={"Modulo 3: Utensilios e Vida"}
            subtitulos={[
              "                                                                         ",
            ]}
            nomesOptions={[
              { nome: "Usa tabuada de cortar de plastico?" },
              { nome: "Usa espatula de plastico?" },
              { nome: "Costuma beber en copos descartaveis?" },
            ]}
            flexdirectionend="column"
            retornarChecks={(value) => {
              tempUtensilios = value;
            }}
          />
          <Input
            placeholder="Quanto voce pesa kg?"
            value={peso}
            onChangeText={(t) => setPeso(Number(t))}
          />
          <Input
            placeholder="Qual e a sua idade?"
            value={idade}
            onChangeText={(t) => setIdade(Number(t))}
          />
          <Botao
            style={{
              alignSelf: "center",
            }}
            children={"Fazer o calculo"}
            onPress={() => {
              setRestPlatico(
                ((
                  (tempAgua[0]?.state ? 20 : 0) +
                  (tempAgua[1]?.state ? 5000 : 0) +
                  (tempAgua[2]?.state ? 17500 : 0) +
                  (tempAgua[3]?.state ? 2 : 0)) *
                  litrosAgua) +
                comidaPlastico * 100 +
                ((tempComida[0]?.state ? 130000 : 0) +
                  (tempComida[1]?.state ? 150 : 0) +
                  (tempComida[2]?.state ? 250 : 0) +
                  (tempComida[3]?.state ? 2000 : 0)) +
                (
                  (tempUtensilios[0]?.state ? 200 : 0) +
                  (tempUtensilios[1]?.state ? 15 : 0) +
                  (tempUtensilios[2]?.state ? 25000 : 0)

                )
              );
              setfadeIn(FadeIn.duration(300));
              console.log(restPlatico);
            }}
          />
          <View
            style={{
              height: restPlatico == 0 ? heightHidden : 0,
            }}
          ></View>
        </View>
        {restPlatico != 0 ? (
          <AnimatedView
            entering={fadeIn}
            style={[
              estilo.card,
              {
                minHeight: "100%",
                width: "90%",
                alignItems: "center",
                flexDirection: "column",
                alignSelf: "center",
                rowGap: 10,
                borderWidth: 5,
                borderColor: "rgba(0,0,0,0.09)",
              },
            ]}
          >
            <Text
              style={[
                estilo.subtitle,
                {
                  alignSelf: "center",
                  textAlign: "center",
                  margin: 5,
                },
              ]}
            >
              Total de microplasticos que passarão seu corpo:
              <Text> {restPlatico}</Text>
            </Text>
            <Text style={[estilo.textito, { alignSelf: "baseline", left: 15 }]}>
              Quantidade de plastico por dia
            </Text>
            <View style={{ borderRadius: 10, borderWidth: 1 }}>
              <PieChart
                data={data}
                labelKey="tipo"
                valueKey="valor"
                theme={"dark"}
                legend={true}
                selectedIndex={0}
                colors={["gray", "red"]}
                arcLabels={{
                  minPercentage: 0,
                  reservedWidth: 100,
                  formatLabel: ({ label, valueLabel }) =>
                    `${label}: ${valueLabel}`,
                }}
                height={300}
                width={350}
              />
            </View>
            <Text style={[estilo.textito, { alignSelf: "baseline", left: 15 }]}>
              Quantidade de plastico por mes do que sobrou
            </Text>

            <View style={{ borderRadius: 10, borderWidth: 1 }}>
              <LineChart
                data={dataLine}
                scrollable
                theme={{
                  background: "#14171C",
                  plotBackground: "#14171C",
                  text: "white",
                }}

                interaction={{
                  mode: "scrub",
                  selectionPersistence: "whileActive",
                }}
                tooltip={{
                  shared: true,
                  anchor: "point",
                  placement: "above",
                  offset: 18,
                  positionAnimationDuration: 320,
                }}
                crosshair
                visiblePoints={7}
                yAxisLabelWidth={"stable"}
                xKey="month"
                yKey="valor"
                height={300}
                width={350}
              />
            </View>
            <Text style={[estilo.textito, { alignSelf: "baseline", left: 15 }]}>
              Quantidade de plastico em kg em base do seu peso(kg)
            </Text>
            <View
              style={{
                padding: 10,
                borderRadius: 10,
                backgroundColor: "#14171C",
              }}
            >
              <FontAwesome6
                name="bottle-water"
                color="white"
                size={150}
                style={{ alignSelf: "center" }}
              />

              <Text style={[estilo.textito, { marginTop: 10 }]}>
                Quantidade de plaste base em seu corpo:
                {"\n"} - Peso: {(restPlatico / 11500000000).toFixed(10)}
                {"\n"}- Em porcentagem: {(((restPlatico / 11500000000).toFixed(10) / peso) * 100).toFixed(10) + "%"}
              </Text>

            </View>
            <View
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 10,

                backgroundColor: "#14171C",
              }}
            >
              <AntDesign
                name="credit-card"
                color="white"
                size={150}
                style={{ alignSelf: "center" }}
              />

              <Text style={estilo.textito}>
                Quantidades de cartões de credito que consegue ser feito com o
                plastico do seu corpo em:
                {"\n- Dia: " + quantidade_cartoes_dia.toFixed(10) + "%"}
                {"\n- Mes: " + (quantidade_cartoes_dia * 30).toFixed(10) + "%"}
                {"\n- ano: " + (quantidade_cartoes_dia * 365).toFixed(10) + "%"}
                {"\n- 10 anos: " +
                  (quantidade_cartoes_dia * 3650).toFixed(10) +
                  "%"}
                {"\n- 50 anos: " +
                  (quantidade_cartoes_dia * (3650 * 5)).toFixed(10) +
                  "%"}
              </Text>
            </View>
          </AnimatedView>
        ) : null}
      </ScrollView>
    </ContainerGradient>
  );
}

/**
 *
 *  <Input
   placeholder="Quantos litros de agua tomou hoje?"
   placeholderTextColor={"rgba(174, 196, 191, 0.45)"}
   keyboardType="numeric"
   onChangeText={(e) => setLitrosAgua(Number(e))}
 />
 <ChequeBox
   text="toma agua de Torneira?"
   value={aguaTorneira}
   onValueChange={setAguaTorneira}
 />
 <ChequeBox
   text="Toma agua comprada de garrafa?"
   value={aguaComprada}
   onValueChange={setAguaComprada}
 />
 <ChequeBox
   text="Toma agua filtrada?"
   value={aguaFiltrada}
   onValueChange={setAguaFiltrada}
 />
 <Input
   placeholder="Quantas vezes comeu hoje?"
   value={comidaPlastico}
   placeholderTextColor={"rgba(174, 196, 191, 0.45)"}
   keyboardType="numeric"
   onChangeText={(e) => setComidaPlastico(Number(e))}
 />
 <ChequeBox
   text="Você utiliza utensílios de plástico?"
   value={utensiliosPlastico}
   onValueChange={setUtensiliosPlastico}
 />
 */
