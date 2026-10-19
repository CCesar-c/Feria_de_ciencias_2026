import { Tabs, router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import estilo from '../style/global.js'
import { Image } from "expo-image";
import { Button } from "react-native";

router.setTransitionMode("always")

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: true, headerLeft: () => <Image source={require("../assets/iconCentral.jpg")} contentFit="cover" style={{ height: 25, width: 25, borderRadius: 100, }} /> }} >
      <Tabs.Screen
        name="index"
        options={{
          tabBarStyle: {
            backgroundColor: "#f8f9f9"
          },
          headerStyle: {
            backgroundColor: "#b40001"
          },
          title: "Inicio",
          headerTintColor: "white",
          tabBarActiveTintColor: "#00A8CC",
          headerShadowVisible: false,
          headerTitle: "PlastiCorp",
          tabBarIcon: ({ color }) => <FontAwesome6 name="house" size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Gemini"
        options={{
          tabBarStyle: {
            backgroundColor: "#f8f9f9"
          },
          headerStyle: {
            backgroundColor: "#b40001"
          }, title: "I.A",
          headerTintColor: "white",
          headerTitle: "I.A integrada",
          tabBarActiveTintColor: "#00A8CC",
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => <AntDesign name="robot" size={20} color={color} />
        }}
      />
      <Tabs.Screen
        name="calcularPlastico"
        options={{
          tabBarStyle: {
            backgroundColor: "#f8f9f9"

          },
          headerStyle: {
            backgroundColor: "#b40001"
          }, title: "calcularPlastico",
          headerTintColor: "white",
          headerTitle: "calcularPlastico",
          tabBarActiveTintColor: "#00A8CC",
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bottle-wine" style={{
            transform: [
              { rotate: "45deg" }
            ]
          }} size={24} color={color} />
        }}
      />
    </Tabs>
  );
}
