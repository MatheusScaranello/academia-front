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
      marginBottom: 20,
    },
    bottom: {
      color: "#E8C185",
      fontWeight: "bold",
      fontSize: 15,
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
      width: "100%",
      height: "100%",
    },
    campInput: {
      width: "60%",
      height: "10%",
      marginBottom: 15,
      position: "relative",
    },
    contLoge: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      width: "90%",
      height: "90%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      borderWidth: 3,
      borderColor: "#E8C185",
      marginTop: 100,
      marginBottom:20
    },
    input: {
      color: "white",
      opacity: 0.9,
      width: "90%",
      height: "80%",
      fontSize: 20,
      borderRadius: 10,
      paddingLeft: 40,
    },
    button: {
      width: 180,
      height: 50,
      opacity: 0.9,
      backgroundColor: "#E8C185",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30,
      top: -30,
    },
    textButton: {
      opacity: 0.9,
      color: "white",
      fontSize: 18,
    },
    text: {
      color: "#E8C185",
      fontSize: 30,
      marginBottom: 70,
      top: 50,
    },
    icon: {
      position: "absolute",
      left: 10,
      top: "50%",
      transform: [{ translateY: -10 }],
    },
  });

export default styles;
