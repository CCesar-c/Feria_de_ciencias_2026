import { LinearGradient } from "expo-linear-gradient";
/**
 *
 * @param {import('expo-linear-gradient').LinearGradientProps & {style?: import('react-native').StyleProp<import('react-native').TextStyle>}} props
 *
 */

export default function ContainerGradient({ children, ...rest }) {
  return (
    <LinearGradient
      style={[
        {
          flex: 1,
          minHeight: "100vh",
          width: "100vw",
          boxSizing: "border-box",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
      colors={["#87CEEB", "rgba(20, 23, 28, 1)"]}
      children={children}
      {...rest}
    />
  );
}
