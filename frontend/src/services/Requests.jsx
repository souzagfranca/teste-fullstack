import axios from "axios";

async function listaPessoa() {
  try {
    const response = await axios.get("http://localhost:3000/pessoa");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pessoas:", error);
  } finally {
    console.log("Sucesso!");
  }
}

export default listaPessoa;
