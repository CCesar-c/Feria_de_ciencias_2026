import { Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
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
            source={require("../assets/icon.png")}
            contentFit="cover"
            style={{
              height: 40,
              width: 40,
              borderRadius: 100,
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
          title: "Inicio",
          headerShown: false,
          tabBarActiveTintColor: "#57bb99",
          tabBarInactiveTintColor: "#94A3B8",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" size={24} color={color}/>
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

          tabBarActiveTintColor: "#57bb99",
          tabBarInactiveTintColor: "#94A3B8",

          headerShadowVisible: true,
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
          title: "Calcular",
          headerTintColor: "white",
          headerTitle: "Calcular",
          tabBarActiveTintColor: "#57bb99",
          tabBarInactiveTintColor: "#94A3B8",
          headerShadowVisible: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6
              name="calculator"
              //style={{
                //transform: [{ rotate: "45deg" }],
              //}}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
