import { ScrollView, Text, View } from "react-native";
import ContainerGradient from "../simple_code/ContainerGradient";
import estilo from "../style/global";

export default function Fontes() {
  return (
    <ContainerGradient>
      <ScrollView contentContainerStyle={{ gap: 10 }}>
        <View
          style={{
            flex:1,
            borderRadius: 10,
            padding: 10,
            backgroundColor: "rgba(255,255,255,0.65)",
            margin: 10,
            gap: 10,
          }}
        >
          <Text
            style={[
              estilo.titulo,
              {
                color: "black",
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
              },
            ]}
          >
            Fontes do dados usados
          </Text>
          <View
            style={{
              flex: 1,
              borderColor: "black",
              borderWidth:1,
              borderRadius: 10,
              padding: 10,
              backgroundImage:
                "radial-gradient( transparent, rgba(255,255,255,1))",
              margin: 10,
              gap: 10,
            }}
          >
            <Text
              style={[
                estilo.subtitle,
                {
                  color: "black",
                  textAlign: "center",
                },
              ]}
            >
              Módulo 1: Consumo de Água
            </Text>
            <Text style={[estilo.textito, { color: "black" }]}>
              Mason et al. (2018) – Frontiers in Chemistry: Média de 325
              partículas/L (com picos acima de 10.000/L) em garrafas plásticas.
              {"\n"}
              Qian et al. (2024) – PNAS (Univ. Columbia): Até 240.000
              partículas/L (incluindo nanoplásticos) em garrafas PET.
              {"\n"}
              OMS / WHO (2019): Relatório oficial sobre a eficiência de filtros
              (Osmose Reversa, Ultrafiltração e Carvão Ativado).
            </Text>
          </View>
          <View
            style={{
              flex:1,

              borderRadius: 10,
              padding: 10,
              borderColor: "black",
              borderWidth:1,
              backgroundImage:
                "radial-gradient( transparent, rgba(255,255,255,1))",
              margin: 10,
              gap: 10,
            }}
          >
            <Text
              style={[estilo.subtitle, { color: "black", textAlign: "center" }]}
            >
              Módulo 2: Alimentos e Embalagens
            </Text>

            <Text style={[estilo.textito, { color: "black" }]}>
              Catarino et al. (2018) – Environmental Pollution: Cerca de 100
              partículas caem do ar/poeira no prato durante uma refeição.
              {"\n"}
              Cox et al. (2019) – Environ. Sci. & Technol. (Univ. Victoria):
              Estimativa de consumo diário por alimentos (peixes, frutos do mar,
              sal).
              {"\n"}
              Hussain et al. (2023) – Environ. Sci. & Technol.: Aquecer potes
              plásticos libera centenas de milhares de partículas em minutos.
              {"\n"}Du et al. (2020) – Journal of Hazardous Materials: Liberação
              de microplásticos em embalagens descartáveis com comida quente.
            </Text>
          </View>
          <View
            style={{
              flex:1,
              borderRadius: 10,
              padding: 10,
              borderColor: "black",
              borderWidth:1,
              backgroundImage:
                "radial-gradient(transparent, rgba(255,255,255,1))",
              margin: 10,
              gap: 10,
            }}
          >
            <Text
              style={[estilo.subtitle, { color: "black", textAlign: "center" }]}
            >
              Módulo 3: Utensílios e Estilo de Vida
            </Text>
            <Text style={[estilo.textito, { color: "black" }]}>
              Yadav et al. (2023) – Environ. Sci. & Technol: Cortar em tábuas
              plásticas libera de 100 a 300 partículas por uso.
              {"\n"}Cole et al. (2024) – Science of the Total Environment:
              Desgaste de utensílios libera até 5.000 partículas por ano.
              {"\n"}
              Ranjan et al. (2021) – Journal of Hazardous Materials: Um copo
              descartável libera ~25.000 partículas em 15 min com bebida quente.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ContainerGradient>
  );
}
