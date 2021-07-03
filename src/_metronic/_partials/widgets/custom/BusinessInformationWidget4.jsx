import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "../../controls/Card";
import { Form, Col } from "react-bootstrap";

export const BusinessInformationWidget4 = ({ className }) => {
  return (
    <Card fluidHeight>
      <CardHeader title={"Business Address"} />
      <CardBody>
        <Form>
          <Form.Row>
            <Col md={6}>
              <Form.Group controlId="bus-addr-street">
                <Form.Label>Street</Form.Label>
                <Form.Control placeholder="E.g. Sunrise Street" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="bus-addr-suite">
                <Form.Label>Appartment, suite, etc.</Form.Label>
                <Form.Control placeholder="E.g. White Apt." />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={6}>
              <Form.Group controlId="bus-addr-city">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="E.g. Riverside" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="bus-addr-zip">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control placeholder="E.g. 927649" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={6}>
              <Form.Group controlId="bus-addr-state">
                <Form.Label>State</Form.Label>
                <Form.Control placeholder="E.g. California" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="bus-addr-country">
                <Form.Label>Country</Form.Label>
                <Form.Control value="USA" readOnly plaintext />
              </Form.Group>
            </Col>
          </Form.Row>
        </Form>
      </CardBody>
    </Card>
  );
};
