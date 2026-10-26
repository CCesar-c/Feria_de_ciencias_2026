import { StyleSheet } from "react-native";

let estilo = StyleSheet.create({

  background: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: '100vh',
    width: '100vw',
  },
  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    gap: 10,
    color: "#0f172a"

  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  }

});
export default estilo;
