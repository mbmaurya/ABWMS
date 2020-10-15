import React from "react";
import { Col, Row } from "react-bootstrap";
import { ReactComponent as KycIcon } from "../../assets/images/transaction/verify-kyc.svg";
import Title from "./Title";
import FormGroup from "./FormGroup";

function VerifyKyc({ currentStep }) {
  if (currentStep !== 1) {
    return null;
  }
  return (
    <div>
      <Title icon={<KycIcon />} title="verify your kyc" />
      <Row>
        <Col md={4}>
          <FormGroup
            controlId="panNumber"
            label="PAN Number*"
            inputType="text"
            placeholder="eg. ABCDE4561F"
          />
        </Col>
        <Col md={4}>
          <FormGroup
            controlId="name"
            label="Name*"
            inputType="text"
            placeholder="Name as per PAN Card"
            disabled
          />
        </Col>
      </Row>
    </div>
  );
}

export default VerifyKyc;
