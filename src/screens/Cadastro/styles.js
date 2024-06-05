import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: 90, // Aumentando o padding
    margin: 40, // Aumentando a margem
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Cor de fundo transparente do card
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8C185", // Cor da borda
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#E8C185", // Cor do título
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1, // Adicionando apenas uma borda inferior
    borderBottomColor: "#E8C185", // Cor da borda inferior
    paddingLeft: 10,
    width: "60%",
    marginBottom: 10,
    color: "white", // Cor do texto do input
  },
  icon: {
    color: "#E8C185", // Cor do ícone
    marginRight: 10,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white", // Cor do texto do botão
    textAlign: "center",
    fontSize: 13, // Tamanho da fonte reduzido
  },
});
