import React from "react";
import { toAbsoluteUrl } from "../../../_helpers";
import { Card, CardBody, CardHeader } from "../../controls/Card";
import { Form, Image, Col, FormControl, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";
import "yup-phone";

const phoneMap = {
  US: "+1",
  TR: "+90",
  GB: "+44",
};

const validationSchema = yup.object({
  "bus-name": yup.string().required("Business name is required."),
  "bus-type": yup.string().required("Select the type of your business."),
  "bus-founding-year": yup
    .number()
    .max(new Date().getFullYear(), "Cannot enter a year in future."),
  "bus-phone-country": yup.string(),
  "bus-phone-number": yup
    .string()
    .required("Enter the phone number of your business.")
    .when(["bus-phone-country"], (country, schema) =>
      schema.phone(
        country,
        false,
        "The number doesn't match with the country code."
      )
    ),
});

export const BusinessInformationWidget1 = ({ className }) => {
  const formik = useFormik({
    initialValues: {
      "bus-name": "",
      "bus-type": "",
      "bus-founding-year": "",
      "bus-phone-country": "US",
      "bus-phone-number": "",
      "bus-operated-by-owner": "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Card fluidHeight>
      <CardHeader title={"Business Information"} />
      <CardBody>
        <div className="d-flex flex-column align-items-center mb-5">
          <div className="d-flex justify-content-center mb-2">
            <Image
              as={Button}
              className="p-5 border"
              src={toAbsoluteUrl("/media/svg/icons/Custom/add-circle.png")}
              roundedCircle
            />
          </div>
          <small>Upload an avatar for your business (.png, .jpg)</small>
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="bus-name">
                <Form.Label>Business Name</Form.Label>
                <Form.Control
                  placeholder="E.g. Tim's farm"
                  value={formik.values["bus-name"]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={
                    formik.touched["bus-name"] && !formik.errors["bus-name"]
                  }
                  isInvalid={
                    formik.touched["bus-name"] && formik.errors["bus-name"]
                  }
                />
                <FormControl.Feedback type="invalid">
                  {formik.errors["bus-name"]}
                </FormControl.Feedback>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="bus-type">
                <Form.Label>Business Type</Form.Label>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  custom
                  value={formik.values["bus-type"]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={
                    formik.touched["bus-type"] && !formik.errors["bus-type"]
                  }
                  isInvalid={
                    formik.touched["bus-type"] && formik.errors["bus-type"]
                  }
                >
                  <option hidden disabled value="">
                    {" "}
                    -- Select a business type --{" "}
                  </option>
                  <option value="1">Farmer</option>
                  <option value="2">Fishery</option>
                  <option value="3">Farmer's Market</option>
                  <option value="4">Dairy</option>
                </Form.Control>
                <FormControl.Feedback type="invalid">
                  {formik.errors["bus-type"]}
                </FormControl.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              {/* <DatePickerField /> */}
              <Form.Group controlId="bus-founding-year">
                <Form.Label>Founding Year</Form.Label>
                <Form.Control
                  placeholder="Since"
                  value={formik.values["bus-founding-year"]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isValid={
                    formik.touched["bus-founding-year"] &&
                    !formik.errors["bus-founding-year"]
                  }
                  isInvalid={
                    formik.touched["bus-founding-year"] &&
                    formik.errors["bus-founding-year"]
                  }
                ></Form.Control>
                <FormControl.Feedback type="invalid">
                  {formik.errors["bus-founding-year"]}
                </FormControl.Feedback>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col xs={12} md={6}>
              <Form.Group as={Form.Row} controlId="bus-phone">
                <Col xs={3}>
                  <Form.Group controlId="bus-phone-country">
                    <Form.Label>Code</Form.Label>
                    <Form.Control
                      as="select"
                      className="mr-sm-2"
                      custom
                      defaultValue="US"
                    >
                      <option value="US">+1</option>
                      <option value="TR">+90</option>
                      <option value="GB">+44</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={9}>
                  <Form.Group controlId="bus-phone-number">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      value={formik.values["bus-phone-number"]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={
                        formik.touched["bus-phone-number"] &&
                        !formik.errors["bus-phone-number"]
                      }
                      isInvalid={
                        formik.touched["bus-phone-number"] &&
                        formik.errors["bus-phone-number"]
                      }
                    ></Form.Control>
                    <FormControl.Feedback type="invalid">
                      {formik.errors["bus-phone-number"]}
                    </FormControl.Feedback>
                  </Form.Group>
                </Col>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="bus-website">
                <Form.Label>Company Website</Form.Label>
                <Form.Control placeholder="E.g. timsfarmersmarket.com"></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="bus-operated-by-owner">
                <Form.Label>Is this business operated by the owner?</Form.Label>
                <Form.Group>
                  <Form.Check
                    type="radio"
                    label="Yes"
                    name="radio-operated-by-owner"
                    inline
                  />
                  <Form.Check
                    type="radio"
                    label="No"
                    name="radio-operated-by-owner"
                    inline
                  />
                </Form.Group>
              </Form.Group>
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-end align-items-center"
            >
              <Button type="submit">Validate</Button>
            </Col>
          </Form.Row>
        </Form>
      </CardBody>
    </Card>
  );
};
