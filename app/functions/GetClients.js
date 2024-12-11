import axios from "axios";

const apiUrl = "http://localhost:8080/api/clientes";

// Fazendo uma requisição para a API
export const getClients = () => {
    console.log("getClient")
  return axios.get(`${apiUrl}`)
    .then((response) => {
      console.log("response", response);
      return response.data;
    })
    // .then((response)=>
    // console.log('response', response)
    // )

    .catch((error) => {
      console.log("Erro ao obter dados dos países:", error);
      return Promise.resolve([]);
    });

    // axios.get(apiUrl).then()
};
