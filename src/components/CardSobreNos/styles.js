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
    fontSize: 15,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  description2: {
    color: "#FCD89E",
  },
  image: {
    marginLeft: 25,
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
    marginRight: 10,
  },
  slide: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
    width: 220, // Ajuste o valor conforme necessário para reduzir a largura
    height: 350,
    margin: 10,
    borderColor: "#FCD89E",
    borderWidth: 2,
  },
});

export default styles;
