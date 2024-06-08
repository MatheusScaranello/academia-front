import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

const apiUsuarios = {
  getAllUsuarios: async () => {
    try {
      const response = await api.get("/usuarios");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar empresas: " + error.message);
    }
  },

  getByIdUsuarios: async (id) => {
    try {
      const response = await api.get(`/usuarios/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar Usuarios pelo id: " + error.message);
    }
  },
  getUsuariosLogin: async (senha,email) => {
    try {
      const response = await api.get(`/usuarios/${email}/${senha}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar Usuarios pelo email e senha: " + error.message);
    }
  },
  postUsuarios: async () => {
    try {
      const response = await api.post("/usuarios");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar Usuarios: " + error.message);
    }
  },
  putUsuarios: async (id) => {
    try {
      const response = await api.put(`/usuarios/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualizar Usuarios pelo id: " + error.message);
    }
  },
  deleteUsuarios: async (id) => {
    try {
      const response = await api.delete(`/usuarios/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao deletar Usuarios pelo id: " + error.message);
    }
  },
  cadastrar: async (data) => {
    try {
      const response = await api.post("/usuarios", data);
      return response;
    } catch (error) {
      throw new Error("Erro ao cadastrar usuário: " + error.message);
    }
  },
};
export default apiUsuarios;
