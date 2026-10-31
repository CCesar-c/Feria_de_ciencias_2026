import { useState } from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import estilo from "../style/global";

import { PieChart } from "react-native-chart-kit/v2";
import Animated, {
  FadeIn,
  FadeOut,
  ReducedMotionConfig,
  createAnimatedComponent,
} from "react-native-reanimated";
import Botao from "../components/Botao";
import ChequeBox from "../components/ChequeBox";

export default function calcularPlastico() {
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

  var data = [
    { month: "Plastico que fica", valor: restPlatico * 0.99 },
    { month: "Plastico eliminado", valor: restPlatico * 0.01 },
  ];

  return (
    <View
      style={{
        minHeight: "100vh",
        width: "100vw",
        boxSizing: "border-box",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ReducedMotionConfig mode="never" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "strech",
          width: "strech",
        }}
      >
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
          <Text style={estilo.titulo}>Calculo de plastico</Text>
          <TextInput
            style={estilo.input}
            placeholder="Quantos litros de agua tomou hoje?"
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
          <TextInput
            style={estilo.input}
            placeholder="Quantas vezes comeu hoje?"
            keyboardType="numeric"
            onChangeText={(e) => setComidaPlastico(Number(e))}
          />
          <Botao
            style={{ alignSelf: "center" }}
            children={"fazer o calculo"}
            onPress={() => {
              if (aguaTorneira != 0) {
                setRestPlatico(litrosAgua * 20 + comidaPlastico * 50 + 35600);
              } else if (aguaComprada != 0) {
                setRestPlatico(
                  litrosAgua * 17500 + comidaPlastico * 50 + 35600,
                );
              }
              if (restPlatico == 0) {
                setfadeIn(FadeIn.duration(300));
                setTimeout(() => setRestPlatico(1), 500);
              } else {
                setRestPlatico(0);
              }
            }}
          />
        </View>
        {restPlatico != 0 ? (
          <AnimatedView
            entering={fadeIn}
            style={{
              minHeight: "100%",
              width: "100%",
              alignItems: "cnter",
              flexDirection: "column",
              rowGap: 10,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                overflow: "scroll",
              }}
            >
              {`Sua Quantidade de plastico que ja passou hoje no seu corpo ...\n ${restPlatico}`}
            </Text>
            <PieChart
              data={[
                { month: "Plastico que fica", valor: restPlatico * 0.99 },
                { month: "Plastico eliminado", valor: restPlatico * 0.01 },
              ]}
              labelKey="month"
              valueKey="valor"
              width={410}
              height={240}
            />
          </AnimatedView>
        ) : null}
      </ScrollView>
    </View>
  );
}
