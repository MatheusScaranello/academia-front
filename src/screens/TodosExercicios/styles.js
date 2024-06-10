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
    color: "#fff",
    textAlign: 'center',
  },
  scrollView: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    height: 50,
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderStartColor: "#E8C185",
    borderEndColor: "#E8C185",
    borderWidth: 2, // Defina a largura da borda
    borderColor: "gold", // Defina a cor da borda como dourada
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
},

  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: 'bold',
  },
  errorText: {
    color: "red",
    marginTop: 10,
    fontSize: 16,
  },
  imgfundo: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});

export default styles;
