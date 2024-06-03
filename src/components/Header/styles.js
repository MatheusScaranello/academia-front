import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#474747",
    opacity: 0.9,
    alignItems: "center",
    width: "100%",
    // position: "absolute", // Remova esta linha para corrigir o posicionamento da header
  },
  logo: {
    width: 150,
    height: 150,
    width: 120,
    height: 120,
    top: 10,
    marginLeft: 20,
  },
});
