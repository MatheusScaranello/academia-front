import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E8C185",
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: 'center',
  },
  scrollView: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#D4AF37", // Ouro
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#000",
    fontWeight: 'bold',
  },
  errorText: {
    color: "red",
    marginTop: 10,
    fontSize: 16,
  },
});

export default styles;
