// Importa a biblioteca Axios para realizar solicitações HTTP
import axios from "axios";

// Define a URL base da API
const API_URL = "http://localhost:3000";

// Cria uma instância do Axios com a URL base da API
const api = axios.create({
  baseURL: API_URL,
});

// Objeto que contém métodos para interagir com a API de exercícios
const apiExercicios = {
  // Método para buscar todos os exercícios
  getAllExercicios: async () => {
    try {
      // Faz uma solicitação GET para buscar todos os exercícios
      const response = await api.get("/exercicios");
      // Exibe os dados dos exercícios obtidos da API no console
      console.log(response.data);
      // Retorna os dados dos exercícios
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na busca dos exercícios
      throw new Error("Erro ao buscar empresas: " + error.message);
    }
  },
  // Método para buscar um exercício pelo ID
  getByIdExercicios: async (id) => {
    try {
      // Faz uma solicitação GET para buscar um exercício pelo ID fornecido
      const response = await api.get(`/exercicios/${id}`);
      // Exibe os dados do exercício obtido da API no console
      console.log(response.data);
      // Retorna os dados do exercício correspondente ao ID fornecido
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na busca do exercício pelo ID
      throw new Error("Erro ao buscar exercicios pelo id: " + error.message);
    }
  },
  // Método para criar um novo exercício
  postExercicios: async () => {
    try {
      // Faz uma solicitação POST para criar um novo exercício
      const response = await api.post("/exercicios");
      // Exibe os dados do exercício criado no console
      console.log(response.data);
      // Retorna os dados do exercício recém-criado
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na criação do exercício
      throw new Error("Erro ao criar exercicios: " + error.message);
    }
  },
  // Método para atualizar um exercício pelo ID
  putExercicios: async (id) => {
    try {
      // Faz uma solicitação PUT para atualizar um exercício pelo ID fornecido
      const response = await api.put(`/exercicios/${id}`);
      // Exibe os dados do exercício atualizado no console
      console.log(response.data);
      // Retorna os dados atualizados do exercício
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na atualização do exercício pelo ID
      throw new Error("Erro ao atualizar exercicios pelo id: " + error.message);
    }
  },
  // Método para excluir um exercício pelo ID
  deleteExercicios: async (id) => {
    try {
      // Faz uma solicitação DELETE para excluir um exercício pelo ID fornecido
      const response = await api.delete(`/exercicios/${id}`);
      // Exibe os dados do exercício excluído no console
      console.log(response.data);
      // Retorna os dados do exercício excluído
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na exclusão do exercício pelo ID
      throw new Error("Erro ao deletar exercicios pelo id: " + error.message);
    }
  },
};

// Exporta o objeto apiExercicios para ser utilizado em outros arquivos
export default apiExercicios;
