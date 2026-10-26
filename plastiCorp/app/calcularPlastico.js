import Checkbox from "expo-checkbox";
import { useState } from "react";
import { ScrollView, View, TextInput, } from "react-native";


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
            <View style={{ flex:1,  alignSelf:"center"}} >
                <Text>Calculo de plastico</Text>
                <TextInput placeholder="Quantos litros de agua tomou hoje?"  />
                <Checkbox value={aguafiltrada} onClick={() => setAguafiltrada(!aguafiltrada)} />
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