import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

const apiGruposMusculares = {
  getAllGruposMusculares: async () => {
    try {
      const response = await api.get("/gruposMusculares");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar grupo muscular: " + error.message);
    }
  },
  getByIdGruposMusculares: async (id) => {
    try {
      const response = await api.get(`/gruposMusculares/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar GruposMusculares pelo id: " + error.message);
    }
  },
  postGruposMusculares: async () => {
    try {
      const response = await api.post("/gruposMusculares");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao criar GruposMusculares: " + error.message);
    }
  },
  putGruposMusculares: async (id) => {
    try {
      const response = await api.put(`/gruposMusculares/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao atualizar GruposMusculares pelo id: " + error.message);
    }
  },
  deleteGruposMusculares: async (id) => {
    try {
      const response = await api.delete(`/gruposMusculares/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao deletar GruposMusculares pelo id: " + error.message);
    }
  },
};
export default apiGruposMusculares;
;
