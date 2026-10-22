import { ScrollView, View } from "react-native";

export default function calcularPlastico() {
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