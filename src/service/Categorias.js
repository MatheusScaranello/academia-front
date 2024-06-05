import axios from "axios";

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

const apiCategorias = {
  getAllCategorias: async () => {
    try {
      const response = await api.get("/categorias");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar empresas: " + error.message);
    }
  },
  getByIdCategorias: async (id) => {
    try {
      const response = await api.get(`/categorias/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar categorias pelo id: " + error.message);
    }
  },
};
export default apiCategorias;
