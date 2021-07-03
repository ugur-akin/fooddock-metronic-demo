import React from "react";
import { Card, CardBody, CardHeader } from "../../controls/Card";
import { Form, Col } from "react-bootstrap";

export const BusinessInformationWidget6 = () => {
  return (
    <Card fluidHeight>
      <CardHeader title={"Competencies"} />
      <CardBody>
        <Form>
          <Form.Group controlId="bus-comp-cert">
            <Form.Label>Certificates</Form.Label>
            <Form.Control placeholder="E.g. GMP Certified" />
          </Form.Group>
          <Form.Group controlId="bus-comp-org">
            <Form.Label>Organizations</Form.Label>
            <Form.Control
              type="select"
              placeholder="E.g. Agricultural Services Certified Organic (ASCO)"
            />
          </Form.Group>
        </Form>
      </CardBody>
    </Card>
  );
};
