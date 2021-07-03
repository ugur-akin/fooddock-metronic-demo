import React from "react";
import { Card, CardBody, CardHeader } from "../../controls/Card";
import {
  Form,
  Image,
  Card as BSCard,
  CardColumns,
  CardDeck,
  CardGroup,
} from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_helpers";

export const BusinessInformationWidget3 = ({ className }) => {
  const images = [
    toAbsoluteUrl("/media/products/pic1.jpg"),
    toAbsoluteUrl("/media/products/pic2.jpg"),
    toAbsoluteUrl("/media/products/pic3.jpg"),
  ];

  return (
    <Card fluidHeight>
      <CardHeader title={"Business Pictures"} />
      <CardBody>
        <div className="d-flex flex-column align-items-center mb-5">
          <div className="d-flex justify-content-center align-items-center mb-3" />
          <h6>Add/Remove business images (.jpg, .png)</h6>
        </div>

        <div
          className="d-flex align-items-stretch justify-content-start"
          style={{ height: "150px", overflowY: "hidden", overflowX: "auto" }}
        >
          <Image
            className="p-5 m-2 align-self-center"
            src={toAbsoluteUrl("/media/svg/icons/Custom/add-circle.png")}
            alt={"Add new image"}
            thumbnail
          />
          <div
            className="d-flex align-items-stretch justify-content-start"
            style={{ height: "150px", overflowY: "hidden", overflowX: "auto" }}
          >
            {images.map((src, idx) => (
              <Image
                key={idx}
                className="m-2"
                src={src}
                alt={`Busines Picture ${idx}`}
                thumbnail
              />
            ))}
            {images.map((src, idx) => (
              <Image
                key={idx + 3}
                className="m-2"
                src={src}
                alt={`Busines Picture ${idx + 3}`}
                thumbnail
              />
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
