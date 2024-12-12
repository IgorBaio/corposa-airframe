import React from "react";
import { faker } from "@faker-js/faker";

import {
  Container,
  Row,
  Col,
  Card,
  UncontrolledModal,
  ModalHeader,
  CardBody,
  ModalBody,
  ModalFooter,
} from "./../../components";
import { ModalBodyContent } from "./ModalBodyContent";

export const CorpoClientFormModal = ({target}) => (
  <Container className="d-none">
    <Row>
      <Col lg={8}>
        <Card className="mb-3 text-center">
          <CardBody>
            
            <UncontrolledModal
              target={target}
              className="modal-outline-warning"
            
            >
              <ModalHeader tag="h6">
                <span className="text-warning">Cliente</span>
                <span className="small ml-1 text-muted">Cadastro</span>
              </ModalHeader>
              <ModalBody>

              <ModalBodyContent />

              </ModalBody>
              <ModalFooter>
                <UncontrolledModal.Close color="link" className="text-warning">
                  Fechar
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="warning">
                  Salvar
                </UncontrolledModal.Close>
              </ModalFooter>
            </UncontrolledModal>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);
