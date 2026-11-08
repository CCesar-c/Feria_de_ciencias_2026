import { useState } from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import estilo from "../style/global";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LineChart, PieChart } from "react-native-chart-kit/v2";
import {
  FadeIn,
  ReducedMotionConfig,
  createAnimatedComponent,
} from "react-native-reanimated";
import Botao from "../components/Botao";
import ChequeBox from "../components/ChequeBox";
import ContainerGradient from "../simple_code/ContainerGradient";
import Input from "../components/Input";

export default function calcularPlastico() {
  /**
   * 💳 Un tarjeta de crédito = 5 gramos = 8.680.000.000 partículas de 10 micras
   */
  /* Agua Embotellada	11,000 - 24,000 partículas  || media - 17500 */
  /* Agua de la Torneira	10 - 30 partículas || media - 20 */
  /* 100 partículas de microplásticos comida || media - 50 */
  /* Total Diario Estimado	~71,200 partículas inhalada   || media -  35600 */

  const AnimatedView = createAnimatedComponent(View);
  const [restPlatico, setRestPlatico] = useState(0);
  const [fadeIn, setfadeIn] = useState();

  const [aguaTorneira, setAguaTorneira] = useState(false);
  const [aguaComprada, setAguaComprada] = useState(false);

  const [comidaPlastico, setComidaPlastico] = useState(false);
  const [litrosAgua, setLitrosAgua] = useState(false);

  let restoMinimoPlastico = restPlatico * 0.01;

  var data = [
    { tipo: "eliminado", valor: restPlatico * 0.99 },
    { tipo: "fica", valor: restPlatico * 0.01 },
  ];
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
              alignSelf: "center",
              borderColor: "black",
              borderWidth: 1,
              padding: 10,
              margin: 10,
              gap: 10,
            },
            estilo.card,
          ]}
        >
          <Text style={estilo.titulo}>Calculo de Plastico Diario</Text>
          <Input
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
            text="Toma agua de garra comprada?"
            value={aguaComprada}
            onValueChange={setAguaComprada}
          />
          <Input
            placeholder="Quantas vezes comeu hoje?"
            value={comidaPlastico}
            placeholderTextColor={"rgba(174, 196, 191, 0.45)"}
            keyboardType="numeric"
            onChangeText={(e) => setComidaPlastico(Number(e))}
          />
          <Botao
            style={{
              alignSelf: "center",
            }}
            children={"Fazer o calculo"}
            onPress={() => {
              if (aguaComprada && aguaTorneira) {
                setRestPlatico(
                  litrosAgua * 17520 + comidaPlastico * 50 + 35600,
                );
              } else if (aguaTorneira) {
                setRestPlatico(litrosAgua * 20 + comidaPlastico * 50 + 35600);
              } else if (aguaComprada) {
                setRestPlatico(
                  litrosAgua * 17500 + comidaPlastico * 50 + 35600,
                );
              }
              setfadeIn(FadeIn.duration(300));
              console.log(restPlatico);
            }}
          />
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
                backgroundColor: "white",
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
                  color: "#2D3748",
                  backgroundColor: "white",
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
                legend={true}
                selectedIndex={0}
                colors={["orange", "red"]}
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
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                height: 300,
                width: 350,
              }}
            >
              <AntDesign
                name="credit-card"
                color="black"
                size={150}
                style={{ alignSelf: "center" }}
              />
              <Text>
                Quantidades de cartões de credito que consegue ser feito con o
                plastico do seu corpo em:
                {"\n- Dia: " + quantidade_cartoes_dia.toPrecision(3) + "%"}
                {"\n- Mes: " + quantidade_cartoes_dia.toPrecision(3) * 30 + "%"}
                {"\n- ano: " +
                  quantidade_cartoes_dia.toPrecision(3) * 365 +
                  "%"}
                {"\n- 10 anos: " +
                  quantidade_cartoes_dia.toPrecision(3) * 3650 +
                  "%"}
                {"\n- 50 anos: " +
                  quantidade_cartoes_dia.toPrecision(3) * (3650 * 5) +
                  "%"}
              </Text>
            </View>
          </AnimatedView>
        ) : null}
      </ScrollView>
    </ContainerGradient>
  );
}
