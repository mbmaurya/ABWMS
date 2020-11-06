import React from "react";
import Cleave from "cleave.js/react";
import { Col, Form, Row } from "react-bootstrap";
import FormGroup from "../../onboarding/FormGroup";

function CreditCard() {
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  return (
    <div>
      <Form>
        <Row>
          <Col md={12}>
            <FormGroup
              controlId="creditCardNumber"
              label="Credit Card Number"
              inputType="number"
              placeholder="xxxx xxxx xxxx xxxx"
            />
          </Col>
          <Col xs={4} className="padd-right-zero">
            <FormGroup
              controlId="expMonth"
              placeholder="MM"
              label="Expiration Date"
              inputType="select"
              selectOptions={months}
            />
          </Col>
          <Col xs={4} className="padd-right-zero">
            <FormGroup
              controlId="expYear"
              placeholder="YYYY"
              inputType="select"
              label="Expiration Date"
              selectOptions={months}
            />
          </Col>
          <Col xs={4} className="padd-right-zero">
            <FormGroup
              controlId="cvv"
              label="CVV Number"
              inputType="number"
              placeholder="***"
            />
          </Col>
          <Col md={12}>
            <FormGroup
              controlId="cardHolderName"
              label="Cardholder Name "
              inputType="text"
              placeholder="Name"
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default CreditCard;
