import { Tabs, router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import estilo from "../style/global.js";
import { Image } from "expo-image";
import { Entypo } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        animation: "fade",
        transitionSpec: {
          animation: "spring",
          config: {
            duration: 300,
          },
        },
        headerShown: true,
        headerLeft: () => (
          <Image
            source={require("../assets/iconCentral.jpg")}
            contentFit="cover"
            style={{
              height: 25,
              width: 25,
              borderRadius: 100,
              marginRight: 5,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarStyle: {
            backgroundColor: "#0F172A",
          },
          headerStyle: {
            backgroundColor: "#0F172A",
          },
          title: "Inicio",
          headerTintColor: "white",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#94A3B8",
          headerShadowVisible: false,
          headerTitle: "PlastiCorp",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Gemini"
        options={{
          tabBarStyle: {
            backgroundColor: "#0F172A",
          },
          headerStyle: {
            backgroundColor: "#0F172A",
          },

          title: "Chat",
          headerTintColor: "white",
          headerTitle: "Chat Integrado",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#94A3B8",

          headerShadowVisible: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="calcularPlastico"
        options={{
          tabBarStyle: {
            backgroundColor: "#0F172A",
          },
          headerStyle: {
            backgroundColor: "#0F172A",
          },
          title: "calcularPlastico",
          headerTintColor: "white",
          headerTitle: "calcularPlastico",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#94A3B8",

          headerShadowVisible: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="bottle-wine"
              style={{
                transform: [{ rotate: "45deg" }],
              }}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
