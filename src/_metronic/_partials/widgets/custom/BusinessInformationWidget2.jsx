import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "../../controls/Card";
import { Form } from "react-bootstrap";

const charLimit = 400;

export const BusinessInformationWidget2 = ({ className }) => {
  const [aboutText, setAboutText] = useState("");
  return (
    <Card fluidHeight>
      <CardHeader title={"About Your Business"} />
      <CardBody>
        <Form>
          <Form.Group controlId="bus-about-title">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="E.g. We take pride in producing the best tropical fruits!" />
          </Form.Group>
          <Form.Group>
            <Form.Label>About</Form.Label>
            <Form.Control
              as="textarea"
              id="bus-about"
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              maxLength={charLimit}
              rows={6}
              placeholder="Tell your story! Give more information about your company..."
            ></Form.Control>
            <Form.Text>{charLimit - aboutText.length} characters</Form.Text>
          </Form.Group>
        </Form>
      </CardBody>
    </Card>
  );
};
