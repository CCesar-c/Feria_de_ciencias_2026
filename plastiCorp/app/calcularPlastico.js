
import { useState } from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import estilo from "../style/global";
import { Checkbox, Host} from "@expo/ui";


export default function calcularPlastico() {
    const [aguafiltrada, setAguafiltrada] = useState(false)
    return (
        <View
            style={{
                flex: 1,
                minHeight: "100vh",
                width: "100vw",
                boxSizing: "border-box",
                flexDirection: "column",
            }}
        >
            <View style={{ flex: 1, alignSelf: "center", borderColor: "black", borderWidth: 1, padding: 10, gap: 10 }} >
                <Text style={estilo.titulo} >Calculo de plastico</Text>
                <TextInput style={estilo.input} placeholder="Quantos litros de agua tomou hoje?" />
                <Host matchContents style={{ color:"black", backgroundColor:"black" }} >
                    <Checkbox label="agua filtrada?" value={aguafiltrada} onValueChange={setAguafiltrada} />
                </Host>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    minHeight: "strech",
                    width: "strech"
                }}
            >
            </ScrollView>
        </View>
    )
}