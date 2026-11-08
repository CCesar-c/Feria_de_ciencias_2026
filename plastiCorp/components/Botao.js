import { TouchableOpacity, Text } from "react-native";
import estilo from "../style/global";

/**
 * @param {import('react-native').TouchableOpacityProps & { style?: import('react-native').StyleProp<import('react-native').TextStyle> }} props
 */
export default function Botao({ children, style, onPress, ...rest }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        estilo.button,
        { justifyContent: "center", alignItems: "center" },
        style,
      ]}
      {...rest}
    >
      <Text
        style={[
          estilo.titulo,
          {
            gap: 0,
            lineHeight: 20,
            textAlign: "center",
            fontSize: 20,
            overflow: "visible",
            alignSelf: "center",
            fontWeight: 500,
            color: "rgba(2, 89, 48, 1.0)",
          },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
