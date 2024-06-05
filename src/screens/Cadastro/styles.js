import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.5)", // Transparent card background color
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8C185", // Border color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#E8C185",
    paddingLeft: 10,
  },
  icon: {
    color: "#E8C185", // Icon color
    marginRight: 10,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#E8C185",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
