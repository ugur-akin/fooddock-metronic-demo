import React from "react";
import { Card, CardBody, CardHeader } from "../../controls/Card";
import { Form, Col } from "react-bootstrap";

export const BusinessInformationWidget5 = () => {
  return (
    <Card fluidHeight>
      <CardHeader title={"Social Media Channels"} />
      <CardBody>
        <Form>
          <Form.Group controlId="bus-social-media-fb">
            <Form.Label>Facebook</Form.Label>
            <Form.Control placeholder="Enter your facebook url" />
          </Form.Group>
          <Form.Group controlId="bus-social-media-instagram">
            <Form.Label>Instagram</Form.Label>
            <Form.Control placeholder="Enter your instagram url" />
          </Form.Group>
          <Form.Group controlId="bus-social-media-twitter">
            <Form.Label>Twitter</Form.Label>
            <Form.Control placeholder="Enter your twitter url" />
          </Form.Group>
        </Form>
      </CardBody>
    </Card>
  );
};
