import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import estilo from '../style/global.js'

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: true }} >
      <Tabs.Screen
        name="index"
        options={{
          tabBarStyle: {
            backgroundColor:"#f8f9f9"
          },
          headerStyle: {
            backgroundColor: "#b40001"
        }, title: "Inicio", headerTintColor:"white", tabBarActiveTintColor:"#00A8CC", headerShadowVisible:false , headerTitle:"Seja bem-vindo... ", tabBarIcon:({color}) => <FontAwesome6 name="house" size={20} color={color} />  }}
      />
      <Tabs.Screen
        name="Gemini"
        options={{ title: "I.A", headerTitle:"I.A integrada" , tabBarActiveTintColor:"#00A8CC", tabBarIcon:({color}) => <AntDesign name="robot" size={20} color={color} />  }}
      />
    </Tabs>
  );
}
