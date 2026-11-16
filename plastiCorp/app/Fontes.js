import { ScrollView, Text } from "react-native";
import ContainerGradient from "../simple_code/ContainerGradient";

export default function Fontes() {
  return (
    <ContainerGradient>
      <ScrollView
        contentContainerStyle={{ flex: 1, gap:10, }}
      >
        <Text style={{ flex: 1, backgroundColor: "white" }}>
          Módulo 1: Consumo de Agua

          • Agua Embotellada (Microplásticos): Promedio de 325 partículas/L (con picos {">"} 10.000/L), cifras muy superiores al agua de grifo.
          • Fuente: Mason, S. A., et al. (2018). Frontiers in Chemistry.
          • Agua Embotellada (Nanoplásticos): Hasta 240.000 partículas/L en botellas PET al medir partículas menores a 1 micra.
          • Fuente: Qian, N., et al. (2024). PNAS (Universidad de Columbia).
          • Agua Filtrada / Vidrio: La reducción de partículas depende del tamaño de poro de las membranas (Ósmosis Inversa, Ultrafiltración y Carbón Activado).
          • Fuente: Organización Mundial de la Salud (OMS / WHO, 2019).

        </Text>
        <Text style={{ flex: 1, backgroundColor: "white" }}>
          Módulo 2: Alimentos y Envases

          • Ingesta Dietética Base: Estimación de consumo diario según grupos de alimentos (pescados, mariscos, sal, azúcar y miel).
          • Fuente: Cox, K. D., et al. (2019). Environmental Science & Technology (Univ. de Victoria).
          • Polvo Ambiental en el Plato: Caen aproximadamente 100 partículas desde el aire sobre la comida durante una cena normal.
          • Fuente: Catarino, A. I., et al. (2018). Environmental Pollution.
          • Calentar en Microondas (+130.000 partículas): Calentar envases plásticos libera de cientos de miles a millones de partículas por \(cm^{2}\) en minutos.
          • Fuente: Hussain, K. A., et al. (2023). Environmental Science & Technology (Univ. de Nebraska-Lincoln).
          • Comida de Entrega (Delivery): Envases desechables de poliestireno (unicel/isopor) y polipropileno liberan microplásticos al tocar comida caliente.
          • Fuente: Du, F., et al. (2020). Journal of Hazardous Materials (East China Normal University).

        </Text>

        <Text style={{ flex: 1, backgroundColor: "white" }}>
          Módulo 3: Utensilios y Estilo de Vida

          • Tablas de Cortar de Plástico (+200 partículas/día): Picar sobre polietileno o polipropileno libera entre 100 y 300 partículas por uso (14 a 71 millones al año).
          • Fuente: Yadav, H., et al. (2023). Environmental Science & Technology (North Dakota State University).
          • Espátulas y Cubiertos de Plástico: El desgaste al cocinar libera entre 2.400 y 5.000 partículas al año.
          • Fuente: Cole, M., et al. (2024). Science of the Total Environment (NORCE y Plymouth Marine Laboratory).
          • Vasos Desechables con Recubrimiento (+25.000 partículas): Un vaso de papel recubierto de polietileno libera ~25.000 partículas en 15 minutos con bebidas calientes.
          • Fuente: Ranjan, V. P., et al. (2021). Journal of Hazardous Materials (IIT Kharagpur).


        </Text>
      </ScrollView>
    </ContainerGradient>
  );
}
