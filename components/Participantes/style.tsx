import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 4,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#1A1A1A",
    borderRadius: 5, // Metade da altura para um efeito arredondado
    backgroundColor: "#1A1A1A",
    marginTop: 10,
    color: "#808080",
    overflow: "hidden", // Garante que o borderRadius funcione corretamente
    textAlign: "left", // Centraliza o texto horizontalmente
    lineHeight: 50,
    paddingLeft: 10,
    fontSize: 19,
    fontWeight: "bold",
  },
  buttonContent: {
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
});

export default styles;
