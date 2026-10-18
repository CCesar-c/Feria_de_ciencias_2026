import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="Inicio"
        options={{ title: "Inicio" }}
      />
      <Tabs.Screen
        name="Gemini"
        options={{ title: "Gemini AI" }}
      />
    </Tabs>
  );
}
