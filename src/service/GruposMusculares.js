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
      throw new Error("Erro ao buscar grupo muscular: " + error.message);o
    }
  },
  getByIdGruposMusculares: async (id) => {
    try {
      const response = await api.get(`/gruposMusculares/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(
        "Erro ao buscar GruposMusculares pelo id: " + error.message
      );
    }
  },
  agrupaPorID: async (categoria_id) => {
    try {
      const response = await api.get(
        `/gruposMusculares/categorias/${categoria_id}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(
        "Erro ao agrupor por categoria GruposMusculares : " + error.message
      );
    }
  },
  getExerciciosPorGrupoMuscular: async (id) => {
    try {
      const response = await api.get(`/gruposMusculares/exercicios/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(
        "Erro ao buscar exercicios pelo grupo muscular: " + error.message
      );
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
      throw new Error(
        "Erro ao atualizar GruposMusculares pelo id: " + error.message
      );
    }
  },
  deleteGruposMusculares: async (id) => {
    try {
      const response = await api.delete(`/gruposMusculares/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(
        "Erro ao deletar GruposMusculares pelo id: " + error.message
      );
    }
  },
};
export default apiGruposMusculares;
;
