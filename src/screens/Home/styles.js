import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  content: {
    alignItems: "center",
    marginBottom: 20, // Alterei o valor para 20 para ajustar o espaçamento
  },
  texto: {
    color: "#E8C185",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 150, // Adicionei margem superior para separar o texto do topo
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10, // Alterei para marginHorizontal para espaçamento uniforme
    marginBottom: 20, // Alterei o valor para 20 para ajustar o espaçamento
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default styles;
