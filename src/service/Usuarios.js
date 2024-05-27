// Importa a biblioteca Axios para realizar solicitações HTTP
import axios from "axios";

// Define a URL base da API
const API_URL = "http://localhost:3000";

// Cria uma instância do Axios com a URL base da API
const api = axios.create({
  baseURL: API_URL,
});

// Objeto que contém métodos para interagir com a API de usuários
const apiUsuarios = {
  // Método para buscar todos os usuários
  getAllUsuarios: async () => {
    try {
      // Faz uma solicitação GET para buscar todos os usuários
      const response = await api.get("/usuarios");
      // Exibe os dados dos usuários obtidos da API no console
      console.log(response.data);
      // Retorna os dados dos usuários
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na busca dos usuários
      throw new Error("Erro ao buscar empresas: " + error.message);
    }
  },
  // Método para buscar um usuário pelo ID
  getByIdUsuarios: async (id) => {
    try {
      // Faz uma solicitação GET para buscar um usuário pelo ID fornecido
      const response = await api.get(`/usuarios/${id}`);
      // Exibe os dados do usuário obtido da API no console
      console.log(response.data);
      // Retorna os dados do usuário correspondente ao ID fornecido
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na busca do usuário pelo ID
      throw new Error("Erro ao buscar Usuarios pelo id: " + error.message);
    }
  },
  // Método para realizar o login do usuário
  getUsuariosLogin: async (senha, email) => {
    try {
      // Faz uma solicitação GET para realizar o login do usuário com a senha e email fornecidos
      const response = await api.get(`/usuarios/login/${senha}/${email}`);
      // Exibe os dados do login do usuário obtidos da API no console
      console.log(response.data);
      // Retorna os dados do login do usuário
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema no login do usuário
      throw new Error("Erro ao logar usuario : " + error.message);
    }
  },
  // Método para criar um novo usuário
  postUsuarios: async () => {
    try {
      // Faz uma solicitação POST para criar um novo usuário
      const response = await api.post("/usuarios");
      // Exibe os dados do usuário criado no console
      console.log(response.data);
      // Retorna os dados do usuário recém-criado
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na criação do usuário
      throw new Error("Erro ao criar Usuarios: " + error.message);
    }
  },
  // Método para atualizar um usuário pelo ID
  putUsuarios: async (id) => {
    try {
      // Faz uma solicitação PUT para atualizar um usuário pelo ID fornecido
      const response = await api.put(`/usuarios/${id}`);
      // Exibe os dados do usuário atualizado no console
      console.log(response.data);
      // Retorna os dados atualizados do usuário
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na atualização do usuário pelo ID
      throw new Error("Erro ao atualizar Usuarios pelo id: " + error.message);
    }
  },
  // Método para excluir um usuário pelo ID
  deleteUsuarios: async (id) => {
    try {
      // Faz uma solicitação DELETE para excluir um usuário pelo ID fornecido
      const response = await api.delete(`/usuarios/${id}`);
      // Exibe os dados do usuário excluído no console
      console.log(response.data);
      // Retorna os dados do usuário excluído
      return response.data;
    } catch (error) {
      // Captura e lança um erro caso ocorra algum problema na exclusão do usuário pelo ID
      throw new Error("Erro ao deletar Usuarios pelo id: " + error.message);
    }
  },
};

// Exporta o objeto apiUsuarios para ser utilizado em outros arquivos
export default apiUsuarios;
