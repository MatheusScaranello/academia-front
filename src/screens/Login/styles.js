import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomText: {
    fontSize: 15,
    color: "white",
    marginTop: 10,
  },
  bottom: {
    color: "#E8C185",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2,
  },
  line: {
    width: "60%",
    height: 1,
    backgroundColor: "#E8C185",
    marginBottom: 25,
  },
  textErro: {
    color: "red",
    fontSize: 25,
    marginTop: 10,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  campInput: {
    width: "60%",
    height: "10%",
    marginBottom: 15,
    position: "relative",
  },
  contLoge: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: 350,
    height: 550,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E8C185",
    marginTop: 140,
  },
  input: {
    color: "white",
    opacity: 0.9,
    width: "90%",
    height: "80%",
    fontSize: 20,
    marginTop: 5,
    borderRadius: 10,
    paddingLeft: 40,
  },
  button: {
    width: 130,
    height: 40,
    opacity: 0.9,
    backgroundColor: "#E8C185",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },
  textButton: {
    opacity: 0.9,
    color: "white",
    fontSize: 18,
  },
  text: {
    color: "#E8C185",
    fontSize: 25,
    marginBottom: 55,
    marginTop: 10,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  textErro: {
    color: "red",
    fontSize: 15,
    marginTop: 10,
  },
  textocastro: {
    color: "#131313",
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 45,
  },
});

export default styles;
