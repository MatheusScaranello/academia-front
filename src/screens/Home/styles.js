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
    marginBottom: 20, // Ajustei o valor para 20 para ajustar o espaçamento
  },
  texto: {
    color: "#E8C185",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30, // Adicionei margem superior para separar o texto do topo
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  image: {
    width: 400,
    height: 160,
    resizeMode: "cover",
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
    fontSize: 50,
    fontWeight: "bold",
  },
  textoNoQuadrado2: {
    fontSize: 10,
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
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
