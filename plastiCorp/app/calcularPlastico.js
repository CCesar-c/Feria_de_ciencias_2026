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
  /* 100 partículas de microplásticos comida || media - 100 */
  /* Total Diario Estimado	~71,200 partículas inhalada   || media -  35600 */

  const AnimatedView = createAnimatedComponent(View);
  const [restPlatico, setRestPlatico] = useState(0);
  const [fadeIn, setfadeIn] = useState();

  const [aguaTorneira, setAguaTorneira] = useState(false); // media - 20
  const [aguaComprada, setAguaComprada] = useState(false); //  media - 17500
  const [aguaFiltrada, setAguaFiltrada] = useState(false); // media geral da cuantidade de microplasticos que passar pelos filtros sao = 6,9375

  const [comidaPlastico, setComidaPlastico] = useState(0); // media - 100
  const [utensiliosPlastico, setUtensiliosPlastico] = useState(false); //  em média mais de 130.000 partículas por dia
  const [litrosAgua, setLitrosAgua] = useState(0);

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
              boxShadow: "0px 0px 10px 0.1px black",
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
          <Botao
            style={{
              alignSelf: "center",
            }}
            children={"Fazer o calculo"}
            onPress={() => {
              setRestPlatico(
                ((aguaTorneira ? 20 : 0) +
                  (aguaComprada ? 17500 : 0 )+
                  (aguaFiltrada ? 6.9375 : 0) )* litrosAgua + (comidaPlastico * 100)
                  + (utensiliosPlastico ? 130000 : 0),
              );
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
                  plotBackground:"#14171C"
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
            <View
              style={{
                padding:10,
                borderRadius: 10,
                height: 420,
                width: 350,
                backgroundColor:"#14171C"
              }}
            >
              <AntDesign
                name="credit-card"
                color="white"
                size={150}
                style={{ alignSelf: "center" }}
              />
              <Text style={estilo.textito}>
                Quantidades de cartões de credito que consegue ser feito con o
                plastico do seu corpo em:

                {"\n- Dia: " + quantidade_cartoes_dia.toFixed(10) + "%"}
                {"\n- Mes: " + (quantidade_cartoes_dia * 30).toFixed(10)  + "%"}
                {"\n- ano: " +
                  (quantidade_cartoes_dia * 365).toFixed(10)  +
                  "%"}
                {"\n- 10 anos: " +
                  (quantidade_cartoes_dia * 3650).toFixed(10)  +
                  "%"}
                {"\n- 50 anos: " +
                  (quantidade_cartoes_dia * (3650 * 5)).toFixed(10)  +
                  "%"}
              </Text>
            </View>
          </AnimatedView>
        ) : null}
      </ScrollView>
    </ContainerGradient>
  );
}
