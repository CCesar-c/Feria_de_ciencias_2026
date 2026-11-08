import { Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
          headerShown:false,
          tabBarActiveTintColor: "#57bb99",
          tabBarInactiveTintColor: "#94A3B8",
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
            shadowColor:"red",
            elevation:20
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
          title: "calcularPlastico",
          headerTintColor: "white",
          headerTitle: "calcularPlastico",
          tabBarActiveTintColor: "#57bb99",
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
