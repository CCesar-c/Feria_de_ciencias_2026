
import { useState } from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import estilo from "../style/global";
import { Host, Checkbox } from '@expo/ui';
import { BarChart } from "react-native-chart-kit/v2";


export default function calcularPlastico() {
    /* Agua Embotellada	11,000 - 24,000 partículas*/
    /* Agua de la Torneira	10 - 30 partículas*/
    /* 100 partículas de microplásticos */
    /* Total Diario Estimado	~71,200 partículas */
    const data = [
        { month: "Jan", signups: 180 },
        { month: "Feb", signups: 520 },
        { month: "Mar", signups: 260 },
        { month: "Apr", signups: 740 },
        { month: "May", signups: 390 },
        { month: "Jun", signups: 860 }
    ];

    const [aguafiltrada, setAguafiltrada] = useState(false)
    const [aguacomprada, setAguaComprada] = useState(false)
    return (
        <View
            style={{
                flex: 1,
                minHeight: "100vh",
                width: "100vw",
                boxSizing: "border-box",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <View style={{ alignSelf: "center", borderColor: "black", borderWidth: 1, padding: 10, gap: 10 }} >
                <Text style={estilo.titulo} >Calculo de plastico</Text>
                <TextInput style={estilo.input} placeholder="Quantos litros de agua tomou hoje?" keyboardType="numeric" />
                <Host matchContents style={{ color: "black", backgroundColor: "black" }} >
                    <Checkbox label="agua filtrada?" value={aguafiltrada} onValueChange={setAguafiltrada} />
                    <Checkbox label="agua de garra comprada?" value={aguacomprada} onValueChange={setAguaComprada} />
                </Host>
                <TextInput style={estilo.input} placeholder="Quantas vezes comeu hoje?" keyboardType="numeric" />

            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: "strech",
                    width: "strech"
                }}
            >

                <BarChart
                    data={data}
                    xKey="month"
                    yKey="signups"
                    width={410}
                    height={240}
                />
                <BarChart
                    data={data}
                    xKey="month"
                    yKey="signups"
                    width={410}
                    height={240}
                />
            </ScrollView>
        </View>
    )
}