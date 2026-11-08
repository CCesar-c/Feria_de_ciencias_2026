import { LinearGradient } from "expo-linear-gradient";

export default function ContainerGradient({ children }) {
  return (
    <LinearGradient
      style={{
        flex: 1,
        minHeight: "100vh",
        width: "100vw",
        boxSizing: "border-box",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
      colors={["#87CEEB", "rgba(20, 23, 28, 1)"]}
      children={children}
    />
  );
}
