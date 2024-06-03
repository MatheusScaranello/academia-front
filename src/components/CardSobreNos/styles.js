import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FCD89E",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  descriptionMember: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  description: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  description2: {
    color: "#FCD89E",
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  description3: {
    color: "#FCD89E",
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  description4: {
    color: "#FCD89E",
    textAlign: "left",
    fontSize: 25,
    top: -200,

  },
  description5: {
    color: "black",
    textAlign: "left",
    fontSize: 15,
    position: "absolute",
    top: 350, // ajuste conforme necessário para a posição vertical
    left: 20, // ajuste conforme necessário para a posição horizontal
    zIndex: 1, // para garantir que o texto fique acima da imagem
    width: 240, // largura do texto
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    borderRadius: 100,
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  imagedois:{
    top: -200,
    left: 100,
  },
  imagebranca: {
    alignSelf: "center",
    width: 880,
    height: 300,
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    
  },
  memberName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  slide: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    width: 220,
    height: 350,
    marginHorizontal: 5, // Alterando a margem horizontal dos slides
    marginVertical: 10, // Alterando a margem vertical dos slides
    borderColor: "#FCD89E",
    borderWidth: 2,
  },
});

export default styles;
