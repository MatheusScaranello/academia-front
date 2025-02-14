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
    marginTop: 50, // Adicionei margem superior para separar o texto do topo
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
  textVerMais: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: -70, // Adicionei margem superior para separar o texto do botão
    marginBottom: 45, // Adicionei margem superior para separar o texto do botão
  },
  carrossel: {
    position: "absolute",
    top: 100, // Ajustei o valor para 100 para posicionar o carrossel abaixo do texto
  },
  fundo: {
    position: "relative",
    top: 130, // Ajustei o valor para 50 para posicionar o fundo abaixo do carrossel
  },
  textoBnt: {
    color: "#e8c185",
    fontSize: 20,
    margin: 10, // Adicionei margem superior para separar o texto do topo
    fontWeight: "bold",
    marginTop: 15, // Adicionei margem superior para separar os botões
  },
  botaoCategorias: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  DivCategorias: {
    flexDirection: "column",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 150,
    width: 300,
    borderColor: "#E8C185",
    borderWidth: 1,
    marginBottom: 20, // Adicionei margem inferior para separar os botões
  },
  img: {
    width: 50,
    height: 50,
  },
  Conteudo: {
    justifyContent: "center",
    alignItems: "center",
  },
  textoConteudo: {
    color: "#000000",
    fontSize: 12,
    marginTop: -6, // Adicionei margem superior para separar o texto do topo
    marginBottom: 15, // Adicionei margem inferior para separar o texto do botão
    textAlign: "center",
  },
});

export default styles;
