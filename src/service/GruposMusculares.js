import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

const apiGrupoMusculo = {
  getAllGruposMusculares: async () => {
    try {
      const response = await api.get(`/grupoMuscular`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar exercícios: " + error.message);
    }
  },
  searchExercicio: async (nome) => {
    try {
      const response = await api.get(`/exercicios?nome=${nome}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar exercícios: " + error.message);
    }
  },
};

export default apiGrupoMusculo;
