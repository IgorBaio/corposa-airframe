import axios from "axios";
import { useClients } from "../stores/clients";

const apiUrl = "http://localhost:8080/api/clientes";

// Fazendo uma requisição para a API
export const getClients = () => {
  let { setClients } = useClients.getState();
  return axios
    .get(`${apiUrl}`)
    .then((response) => {
      setClients(response.data.data);
      return response.data;
    })

    .catch((error) => {
      console.log("Erro ao obter dados dos países:", error);
      return Promise.resolve([]);
    });
};
