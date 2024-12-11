import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

import {
  Container,
  Row,
  Col,
  Card,
  ButtonToolbar,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  Table,
  TabPane,
  Badge,
  Nav,
  NavItem,
  Pagination,
  PaginationLink,
  PaginationItem,
  UncontrolledTooltip,
  UncontrolledTabs,
} from "./../../../components";

import { HeaderMain } from "../../components/HeaderMain";
import { Profile } from "../../components/Profile";
import { DlRowContacts } from "../../components/Profile/DlRowContacts";
import { DlRowAddress } from "../../components/Profile/DlRowAddress";
import { TrTableClients } from "./components/TrTableClients";
import { TrTableCompanies } from "./components/TrTableCompanies";
import { ProfileClient } from "../../components/ProfileClient";
import { getClients } from "../../../functions/GetClients";

import { randomArray, tag } from "./../../../utilities";
import { allColors } from "../../../../packages/dashboard-style/scss/bootstrap/variables";
import { AsyncSearch } from "../../Forms/Typeahead/components/AsynchronousSearchingCorpo";
import { asyncSearch, buttongroup, inputSearch } from "./styles";
import { useClients } from "../../../stores/clients";

const Clients = () => {
  const [selected, setSelected] = useState();
  const [clients, setClients] = useState();
  const [clientsFilter, setClientsFilter] = useState();

  // const { clients, clientsFilter, setClients, setClientsFilter } = useClients(state => state)
  const searchClients = (text) => {
    console.log("text", text);
    // Por hora, buscar nos que ja estão em memória
    let clientsAux = [];
    clients.filter((client) => {
      // console.log('client?.nome?.includes(text)', client?.nome?.includes(text))
      // console.log('client?.sobrenome?.includes(text)', client?.sobrenome?.includes(text))
      // console.log('client?.celular?.includes(text)', client?.celular?.includes(text))||
      // console.log('client?.celular?.includes(text)', client?.email?.includes(text))
      if (
        client?.nome?.includes(text) ||
        client?.sobrenome?.includes(text) ||
        client?.celular?.includes(text)||
        client?.email?.includes(text)
      ) {
        clientsAux.push(client);
        console.log('clientsAux', clientsAux)
      }
      setClientsFilter( clientsAux);
    });
  };

  // const navigate = useNavigate()
  useEffect(() => {
    // const email = localStorage.getItem('@email')
    // if (email) {

    getClients().then((response) => {
      console.log("clients response", response);
      setClients(response?.data);
      setSelected(response?.data[0]);
    });

    // }
  }, []);

  return (
    <React.Fragment>
      <Container>
        <HeaderMain title="Clientes" className="mb-5 mt-4" />
        {/* START Content */}
        <Row>
          <Col lg={8}>
            <Card className="mb-3">
              <UncontrolledTabs initialActiveTabId="clients">
                <CardBody>
                  <div className="d-flex">
                    <Nav pills>
                      <NavItem>
                        <UncontrolledTabs.NavLink tabId="clients">
                          Clientes
                        </UncontrolledTabs.NavLink>
                      </NavItem>
                    </Nav>
                    {/* <div style={inputSearch}>
                      <AsyncSearch style={asyncSearch} />
                    </div> */}
                    <ButtonToolbar className="ml-auto w-75">
                      <ButtonGroup className="w-75" style={buttongroup}>
                        {/* <Button
                           color="link"
                           className="align-self-center mr-2 text-decoration-none"
                           id="tooltipSettings"
                           >
                           <i className="fa fa-fw fa-gear"></i>
                          </Button> */}
                        <AsyncSearch
                          style={asyncSearch}
                          onSearch={searchClients}
                          clients={clients}
                          clientsFilter={clientsFilter}
                          setClientsFilter={setClientsFilter}
                        />
                      </ButtonGroup>
                      <ButtonGroup className="ml-auto end">
                        <Button
                          style={{
                            backgroundColor: allColors.genericButton,
                            color: allColors.textoBolder,
                            fontWeight: "bold",
                            border: "none",
                          }}
                          // color="primary"
                          className="align-self-center"
                          id="tooltipAddNew"
                        >
                          <i className="fa fa-fw fa-plus"></i>
                        </Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                    <UncontrolledTooltip
                      placement="right"
                      target="tooltipAddNew"
                    >
                      Adicionar novo
                    </UncontrolledTooltip>
                  </div>
                </CardBody>

                <UncontrolledTabs.TabContent>
                  <TabPane tabId="clients">
                    {/* START Table */}
                    <Table className="mb-0" hover responsive>
                      <thead>
                        <tr>
                          <th className="bt-0"></th>
                          {/* <th className="bt-0"></th> */}
                          <th className="bt-0">Name</th>
                          <th className="bt-0">Email</th>
                          <th className="text-right bt-0">Phone</th>
                          <th className="text-right bt-0">Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* MAP com os clientes
                        Passar como props:
                          Id,
                          setSelected,
                          name,
                          email,
                          celular,
                          labels

                        */}
                        {/* <TrTableClients id="1" /> */}
                        {clients?.map((client) => (
                          <TrTableClients
                            id={client.id}
                            name={client.nome + " " + client.sobrenome}
                            email={client.email}
                            celular={client.celular}
                            labels={client.labels}
                            setSelected={setSelected}
                            selected={selected}
                            client={client}
                          />
                        ))}
                      </tbody>
                    </Table>
                    {/* END Table */}
                  </TabPane>
                  <TabPane tabId="companies">
                    {/* START Table */}
                    <Table className="mb-0" hover responsive>
                      <thead>
                        <tr>
                          <th className="bt-0"></th>
                          <th className="bt-0"></th>
                          <th className="bt-0">Name</th>
                          <th className="bt-0">PM</th>
                          <th className="text-right bt-0">Phone</th>
                          <th className="text-right bt-0">Label</th>
                        </tr>
                      </thead>
                      <tbody>
                        <TrTableCompanies />
                        <TrTableCompanies id="2" />
                        <TrTableCompanies id="3" />
                        <TrTableCompanies id="4" />
                        <TrTableCompanies id="5" />
                        <TrTableCompanies id="6" />
                        <TrTableCompanies id="7" />
                        <TrTableCompanies id="8" />
                        <TrTableCompanies id="9" />
                        <TrTableCompanies id="10" />
                        <TrTableCompanies id="11" />
                        <TrTableCompanies id="12" />
                      </tbody>
                    </Table>
                    {/* END Table */}
                  </TabPane>
                </UncontrolledTabs.TabContent>
              </UncontrolledTabs>

              <CardFooter className="d-flex">
                <span className="align-self-center">
                  Mostrando 1 ao 10 de 57 totais
                </span>
                <Pagination
                  aria-label="Page navigation example"
                  className="ml-auto"
                >
                  <PaginationItem>
                    <PaginationLink previous href="#">
                      <i className="fa fa-fw fa-angle-left"></i>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#">
                      <i className="fa fa-fw fa-angle-right"></i>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardFooter>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <CardBody>
                <ProfileClient
                  firstName={selected?.nome}
                  lastName={selected?.sobrenome}
                  jobTitle={selected?.ocupacao}
                  city={selected?.endereco.cidade}
                />
                <div className="text-center pb-1">
                  <ul className="list-inline">
                    <li className="list-inline-item text-center">
                      <h2 className="mb-1">23</h2>
                      <span>Procedimentos</span>
                    </li>
                    {/* <li className="list-inline-item text-center">
                    <h2 className="mb-1">13</h2>
                    <span>Tasks</span>
                  </li>
                  <li className="list-inline-item text-center">
                    <h2 className="mb-1">5</h2>
                    <span>Relases</span>
                  </li> */}
                  </ul>
                </div>
                <Row className="mt-3">
                  <Col sm={6}>
                    <Button
                      style={{
                        backgroundColor: allColors.corpo,
                        color: "white",
                        fontWeight: "bold",
                        border: "none",
                      }}
                      outline
                      block
                    >
                      Mensagem
                    </Button>
                  </Col>
                  <Col sm={6}>
                    <Button color="secondary" outline block>
                      Editar
                    </Button>
                  </Col>
                </Row>
                {/* <div className="mt-4 mb-2">
                <span className="small">Profile</span>
              </div>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                sapiente earum, necessitatibus commodi eius pariatur repudiandae
                cum sunt officiis ex!
              </p> */}
                <div className="mt-4 mb-2">
                  <span className="small">Labels</span>
                </div>
                <div className="text-left mb-4">
                  {selected?.labels?.split(",").map((label) => (
                    <Badge pill color={randomArray(tag)} className="mr-1">
                      {label}
                    </Badge>
                  ))}
                  {/* <Badge pill color="secondary" className="mr-1">
                    {faker.commerce.department()}
                  </Badge>
                  <Badge pill color="primary" className="mr-1">
                    {faker.commerce.department()}
                  </Badge> */}
                </div>
                <div className="mt-4 mb-2">
                  <span className="small">Contato</span>
                </div>
                <DlRowContacts
                  leftSideClassName="text-left"
                  rightSideClassName="text-right text-inverse"
                  email={selected?.email}
                  celular={selected?.celular}
                  fixo={selected?.telefone}
                />
                <div className="mt-4 mb-2">
                  <span className="small">Endereço</span>
                </div>
                <DlRowAddress
                  leftSideClassName="text-left"
                  rightSideClassName="text-right text-inverse"
                  logradouro={
                    selected?.endereco?.rua + ", " + selected?.endereco?.numero
                  }
                  cidade={selected?.endereco?.cidade}
                  estado={selected?.endereco?.estado}
                  cep={selected?.endereco?.cep}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* END Content */}
      </Container>
    </React.Fragment>
  );
};

export default Clients;
