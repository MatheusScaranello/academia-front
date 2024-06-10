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
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 2, // Defina a largura da borda
    borderColor: "#E8C185", // Defina a cor da borda como dourada
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
    color: '#fff', // Preto
    textAlign: 'center',
  },
  descricao: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff', // Cinza escuro
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

    backgroundColor: '#E8C185', // Ouro
    paddingVertical: 5, // Diminuído de 12 para 8
    paddingHorizontal: 10, // Diminuído de 20 para 16
    borderRadius: 10,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    height: 40, // Altura definida para 40
    width: "35%", // Largura definida para 80% do contêiner pai
},

  buttonText: {
    color: '#000000', // Preto
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;