// Importa a biblioteca Axios para realizar solicitações HTTP
import axios from "axios";

// Define a URL base da API
const API_URL = "http://localhost:3000";

// Cria uma instância do Axios com a URL base da API
const api = axios.create({
  baseURL: API_URL,
});

// Objeto que contém métodos para interagir com a API de grupos musculares
const apiGruposMusculares = {
  // Método para buscar todos os grupos musculares
  getAllGruposMusculares: async () => {
    try {
      // Faz uma solicitação GET para buscar todos os grupos musculares
      const response = await api.get("/gruposMusculares");
      // Exibe os dados dos grupos musculares obtidos da API no console
      console.log(response.data);
      // Retorna os dados dos grupos musculares
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na busca dos grupos musculares
      throw new Error("Erro ao buscar grupo muscular: " + error.message);
    }
  },
  // Método para buscar um grupo muscular pelo ID
  getByIdGruposMusculares: async (id) => {
    try {
      // Faz uma solicitação GET para buscar um grupo muscular pelo ID fornecido
      const response = await api.get(`/gruposMusculares/${id}`);
      // Exibe os dados do grupo muscular obtido da API no console
      console.log(response.data);
      // Retorna os dados do grupo muscular correspondente ao ID fornecido
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na busca do grupo muscular pelo ID
      throw new Error(
        "Erro ao buscar GruposMusculares pelo id: " + error.message
      );
    }
  },
  // Método para buscar exercícios por grupo muscular
  getExerciciosPorGrupoMuscular: async (id) => {
    try {
      // Faz uma solicitação GET para buscar exercícios pelo grupo muscular com o ID fornecido
      const response = await api.get(`/gruposMusculares/exercicios/${id}`);
      // Exibe os dados dos exercícios obtidos da API no console
      console.log(response.data);
      // Retorna os dados dos exercícios relacionados ao grupo muscular
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na busca dos exercícios pelo grupo muscular
      throw new Error(
        "Erro ao buscar exercicios pelo grupo muscular: " + error.message
      );
    }
  },
  // Método para criar um novo grupo muscular
  postGruposMusculares: async () => {
    try {
      // Faz uma solicitação POST para criar um novo grupo muscular
      const response = await api.post("/gruposMusculares");
      // Exibe os dados do grupo muscular criado no console
      console.log(response.data);
      // Retorna os dados do grupo muscular recém-criado
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na criação do grupo muscular
      throw new Error("Erro ao criar GruposMusculares: " + error.message);
    }
  },
  // Método para atualizar um grupo muscular pelo ID
  putGruposMusculares: async (id) => {
    try {
      // Faz uma solicitação PUT para atualizar um grupo muscular pelo ID fornecido
      const response = await api.put(`/gruposMusculares/${id}`);
      // Exibe os dados do grupo muscular atualizado no console
      console.log(response.data);
      // Retorna os dados atualizados do grupo muscular
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na atualização do grupo muscular pelo ID
      throw new Error(
        "Erro ao atualizar GruposMusculares pelo id: " + error.message
      );
    }
  },
  // Método para excluir um grupo muscular pelo ID
  deleteGruposMusculares: async (id) => {
    try {
      // Faz uma solicitação DELETE para excluir um grupo muscular pelo ID fornecido
      const response = await api.delete(`/gruposMusculares/${id}`);
      // Exibe os dados do grupo muscular excluído no console
      console.log(response.data);
      // Retorna os dados do grupo muscular excluído
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na exclusão do grupo muscular pelo ID
      throw new Error(
        "Erro ao deletar GruposMusculares pelo id: " + error.message
      );
    }
  },
};

// Exporta o objeto apiGruposMusculares para ser utilizado em outros arquivos
export default apiGruposMusculares;
