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
    marginBottom: 30, // Ajustei o valor para 20 para ajustar o espaçamento
  },
  texto: {
    color: "#E8C185",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20, // Adicionei margem inferior para separar o texto do carrossel
    marginTop: 55, // Adicionei margem superior para separar o texto do topo
  },

  imgfundo: {
    marginBottom: 150, // Adicionei margem superior para separar a imagem do texto
    width: 700,
    height: 400,
  },
  divQuadrado: {
    color: "#000000",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    width: 400,
    height: 300,
    borderRadius: 10,
    top: 50,
    right: 150,
  },
  textoNoQuadrado: {
    fontSize: 40,
    marginTop: 25, // Adicionei margem superior para separar o texto do topo
    fontWeight: "bold",
  },
  textoNoQuadrado2: {
    fontSize: 15,
    textAlign: "center",
  },
  botaoVerMais: {
    backgroundColor: "#E8C185",
    padding: 10,
    borderRadius: 10,
    marginTop: 10, // Adicionei margem superior para separar o botão do texto
  },
  textVerMais: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  carrossel: {
    position: "absolute",
    top: 100, // Ajustei o valor para 100 para posicionar o carrossel abaixo do texto
  },
  fundo: {
    position: "relative",
    top: 130, // Ajustei o valor para 50 para posicionar o fundo abaixo do carrossel
  },
});

export default styles;
