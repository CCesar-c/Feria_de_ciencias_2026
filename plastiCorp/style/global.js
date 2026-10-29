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
    lineHeight:50,
    gap: 10,
    color: "#2D3748"

  },
  button: {
    height: 50,
    width: 100,
    textAlign: "center",
    borderRadius:10,
    backgroundColor: "aliceblue",
    borderWidth: 1,
    borderColor:"black"
  },
  subtitle: {

  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  card: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor:"white"
  }

});
export default estilo;
