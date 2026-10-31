import { TouchableOpacity, Text } from "react-native";

export default function Botao({ children, style, onPress, ...rest }) {
  return (
    <TouchableOpacity onPress={onPress} style={[{ display:"flex", justifyContent:"center", borderWidth: 1, alignItems:"center", height:"70", width:"150", borderRadius:10, padding:10 }, style]} rest={rest}>
      <Text style={{ height:"100%", width:"100%", textAlign:"center", fontSize:20, overflow:"visible" }} >{children}</Text>
    </TouchableOpacity>
  );
}
