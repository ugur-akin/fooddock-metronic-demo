import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useSubheader } from "../../_metronic/layout";
import { Notice, Stepper } from "../../_metronic/_partials/controls";
import {
  BusinessInformationWidget1,
  BusinessInformationWidget2,
  BusinessInformationWidget3,
  BusinessInformationWidget4,
  BusinessInformationWidget5,
  BusinessInformationWidget6,
} from "../../_metronic/_partials/widgets";

export const BusinessInformation = () => {
  const suhbeader = useSubheader();
  const { step } = useParams();
  suhbeader.setTitle("Business Information");

  const start = step === "1";
  const finish = step === "4";
  const next = parseInt(step) + 1;
  const prev = parseInt(step) - 1;

  return (
    <>
      <Notice>
        <h5>Complete your profile to list your business in the marketplace</h5>
        <Stepper />
        <div className="d-flex justify-content-between align-items-center px-4">
          <Button
            as={Link}
            to={`/my-farm/${start ? "1" : prev}`}
            disabled={start}
          >
            Prev
          </Button>
          {!finish && (
            <Button as={Link} to={`/my-farm/${next}`}>
              Next
            </Button>
          )}
          {finish && (
            <Button as={Link} to={`/my-farm/4`}>
              Finish
            </Button>
          )}
        </div>
      </Notice>

      <div className="row">
        <div className="col-lg-6">
          <BusinessInformationWidget1 className="card-stretch gutter-b" />
          <BusinessInformationWidget4 className="card-stretch gutter-b" />
          <BusinessInformationWidget6 className="card-stretch gutter-b" />
        </div>
        <div className="col-lg-6">
          <BusinessInformationWidget2 className="card-stretch gutter-b" />
          <BusinessInformationWidget3 className="card-stretch gutter-b" />
          <BusinessInformationWidget5 className="card-stretch gutter-b" />
        </div>
      </div>
    </>
  );
};
