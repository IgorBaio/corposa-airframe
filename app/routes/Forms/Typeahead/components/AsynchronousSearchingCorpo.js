import React, { useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";

import { CustomInput, FormGroup } from "../../../../components";
import { GithubMenuItem } from "./GithubMenuItem";
import { makeAndHandleRequest } from "./utils";
import { useClients } from "../../../../stores/clients";

export const AsyncSearch = (props) => {
  const [allowNew, setAllowNew] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [multiple, setMultiple] = useState(false);
  const [options, setOptions] = useState([]);

  const { clients, setClientsFilter } = useClients((state) => state);

  const handleSearch = (query) => {
    setIsLoading(true);

    // Simulação de filtro como no código original
    let clientsAux = [];
    props.clients?.filter((client) => {
      console.log("client", client);
      if (
        client?.nome?.includes(query) ||
        client?.sobrenome?.includes(query) ||
        client?.celular?.includes(query) ||
        client?.email?.includes(query)
      ) {
        clientsAux.push({
          id: client.id,
          login: client.nome + " " + client.sobrenome + " - " + client.email,
        });
      }
    });

    props.setClientsFilter(clientsAux);

    setIsLoading(false);
    setOptions(clientsAux);

    setClientsFilter(clientsAux);
  };

  const handleChange = (e) => {
    if (e.length > 0) {
      const clientSelected = e[0];
      const clientFiltred = clients?.filter(
        (client) => client?.id === clientSelected?.id
      );
      props.setSelected(clientFiltred[0]);
    }
  };

  return (
    <React.Fragment>
      <AsyncTypeahead
        allowNew={allowNew}
        isLoading={isLoading}
        multiple={multiple}
        options={options}
        className="w-100"
        labelKey="login"
        minLength={3}
        onSearch={handleSearch}
        onChange={handleChange}
        placeholder="Procure por Nome,sobrenome, email ou celular..."
        renderMenuItemChildren={(option) => {
          return <GithubMenuItem key={option.id} user={option} />;
        }}
      />
    </React.Fragment>
  );
};
