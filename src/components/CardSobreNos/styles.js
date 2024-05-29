import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FCD89E",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  descriptionMember: {
    color: "white",
    textAlign: "center",
    color: "#FCD89E",
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
  },
  description2: {
    color: "#FCD89E",
    textAlign: "center",
    fontSize: 15,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    //deixe a imagem reta dos lados e arredondada em cima e embaixo
    borderRadius: 100,
    width: 150,
    height: 150,
    marginBottom: 10,
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
    margin: 10,
    borderColor: "#FCD89E",
    borderWidth: 2,
  },
});

export default styles;
