import axios from "axios";
import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "gruposMusculares";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  try {
    // Realizando a requisição GET com axios, passando os parâmetros de busca se houverem
    const response = await axios.get(url, {
      params: Object.fromEntries(searchParams.entries()),
    });

    // Retornando a resposta da API para o cliente
    return NextResponse.json(response.data);
  } catch (error) {
    // Lidando com erros caso ocorram
    console.error("Erro ao obter os grupos musculares:", error);
    // Retornando uma resposta de erro para o cliente
    return NextResponse.error(new Error("Erro ao obter os grupos musculares"));
  }
}
