import React from "react";
import Cleave from "cleave.js/react";
import { Col, Form, Row } from "react-bootstrap";
import FormGroup from "../../onboarding/FormGroup";
import SelectMenu from "../../global/SelectMenu";

function CreditCard() {
  const date = [
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
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30"
  ]
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
            <SelectMenu options={date} optionType="Expiration Date" />
          </Col>
          <Col xs={4} className="padd-right-zero credit-card-months">
            <SelectMenu options={months} optionType=" " />
          </Col>
          <Col xs={4}>
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
