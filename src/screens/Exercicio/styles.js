import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#000000"
  },
  card: {
    backgroundColor: '#E8C185',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000', // Preto
    textAlign: 'center',
  },
  descricao: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333', // Cinza escuro
    marginBottom: 20,
  },
  errorText: {
    fontSize: 18,
    color: '#FF0000', // Vermelho
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#D4AF37', // Ouro
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
  },
  buttonText: {
    color: '#000000', // Preto
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;