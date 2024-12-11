import React, { useState } from "react";

import {
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  Form,
  FormGroup,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Table,
} from "./../../components";
import MaskedInput from "react-text-mask";
import Toggle from "react-toggle";
import classes from "./Toggles.scss";

export const ModalBodyContent = () => {
  const [hasObservation, setHasObservation] = useState(false);
  return (
    <Form>
      <FormGroup row>
        <Col sm={12}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              Nome e sobrenome
            </InputGroupAddon>
            <Input placeholder="Nome..." id="multipleInputs" />
            <Input placeholder="Sobrenome..." id="multipleInputs" />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col sm={12}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">CPF</InputGroupAddon>
            <Input
              placeholder="CPF..."
              id="leftAddon"
              mask={[
                /[1-9]/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                ".",
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
              ]}
              tag={MaskedInput}
            />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col sm={6}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">CEP</InputGroupAddon>
            <Input placeholder="Cep..." id="leftAddon" />
          </InputGroup>
        </Col>
        <Col sm={6}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Número</InputGroupAddon>
            <Input placeholder="Número..." id="leftAddon" />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col sm={12}>
          <InputGroup>
            <UncontrolledButtonDropdown
              tag={InputGroupAddon}
              addonType="prepend"
            >
              <DropdownToggle color="secondary" outline caret>
                Selecione
              </DropdownToggle>
              <DropdownMenu persist>
                <DropdownItem header>Tipo de logradouro:</DropdownItem>
                <DropdownItem>
                  <i className="fa fa-folder-o mr-2"></i>
                  Rua
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-folder-o mr-2"></i>
                  Avenida
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
            <Input
              placeholder="Digite o nome do logradouro..."
              id="leftDropdown"
            />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col sm={12}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Bairro</InputGroupAddon>
            <Input placeholder="Bairro..." id="leftAddon" />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col sm={12}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Complemento</InputGroupAddon>
            <Input placeholder="Complemento..." id="leftAddon" />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col sm={12}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Cidade</InputGroupAddon>
            <Input placeholder="Cidade..." id="leftAddon" />
          </InputGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col sm={12}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">Estado</InputGroupAddon>
            <Input placeholder="Estado..." id="leftAddon" />
          </InputGroup>
        </Col>
      </FormGroup>

      <Row>
        <Col lg={6}>
          <Table>
            <tbody>
              <tr>
                <td className={`text-inverse ${classes.td}`}>Observação</td>
                <td className={`text-right ${classes.td}`}>
                  <Toggle
                    defaultChecked={hasObservation}
                    icons={false}
                    onChange={() => {
                      setHasObservation(!hasObservation);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

      {!!hasObservation && (
        <FormGroup row>
          <Col sm={12}>
            <InputGroup>
              <Input type="textarea" name="text" id="rightTextarea" placeholder="Observação..." />
            </InputGroup>
          </Col>
        </FormGroup>
      )}

    </Form>
  );
};
