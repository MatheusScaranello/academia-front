import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center", // Adicionei alignItems para centralizar os itens horizontalmente
    backgroundColor: "#FFF", // Adicionei uma cor de fundo para o container
  },
  header: {
    backgroundColor: "#fff",
    opacity: 0.9,
    paddingVertical: 10, // Ajustei o padding para uma quantidade igual em todos os lados
    alignItems: "center",
    width: "100%",
    marginBottom: 20, // Adicionei margem inferior para separar o cabeçalho do conteúdo abaixo
  },
  logo: {
    width: 140,
    height: 130,
  },
});
