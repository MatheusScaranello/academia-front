import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

const apiExercicios = {
  getAllExercicios: async () => {
    try {
      const response = await api.get("/exercicios");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar empresas: " + error.message);
    }
  },
  getByIdExercicios: async (id) => {
    try {
      const response = await api.get(`/exercicios/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar exercicios pelo id: " + error.message);
    }
  },
  getByIdExerciciosGrupoMuscular: async (id) => {
    try {
      const response = await api.get(`/exercicios/grupo-muscular/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar exercicios pelo id do grupo muscular: " + error.message);
    }
  },
  postExercicios: async () => {
    try {
      const response = await api.post("/exercicios");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar exercicios: " + error.message);
    }
  },
  putExercicios: async (id) => {
    try {
      const response = await api.put(`/exercicios/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualizar exercicios pelo id: " + error.message);
    }
  },
  deleteExercicios: async (id) => {
    try {
      const response = await api.delete(`/exercicios/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao deletar exercicios pelo id: " + error.message);
    }
  },
};
export default apiExercicios;
