// Importa a função StyleSheet do React Native
import { StyleSheet } from "react-native";

// Cria um objeto de estilos usando StyleSheet.create
const styles = StyleSheet.create({
  // Define o estilo para o container
  container: {
    // Define que o container ocupará todo o espaço disponível
    flex: 1,
    // Centraliza o conteúdo do container verticalmente
    justifyContent: "center",
    // Centraliza o conteúdo do container horizontalmente
    alignItems: "center",
  },
});

// Exporta os estilos para serem usados em outros arquivos
export default styles;
