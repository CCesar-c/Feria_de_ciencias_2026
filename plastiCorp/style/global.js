import { StyleSheet } from "react-native";

let estilo = StyleSheet.create({
  background: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
  },
  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    lineHeight: 30,
    gap: 10,
    color: "white",
  },

  button: {
    height: 70,
    width: 150,
    textAlign: "center",
    borderRadius: 10,
    padding:10,
    backgroundColor: "rgba(0, 255, 136, 1.0)",
    borderWidth: 1,
    borderColor: "black",
  },
  subtitle: {
    fontSize: 25,
    lineHeight: 30,
    color: "rgba(174, 196, 191, 1.0)",
  },
  textito: {
    fontSize: 15,
    lineHeight: 30,
    color: "rgba(174, 196, 191, 1.0)",
  },
  input: {
    height: 50,
    borderWidth: 1,
    backgroundColor: "rgba(21, 77, 89, 1.0)",
    color: "rgba(174, 196, 191, 1.0)",
    borderRadius: 5,
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "rgba(21, 77, 89, 1.0)",
  },
});
export default estilo;
