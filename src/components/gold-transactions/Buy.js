import React from "react";
import { Col, Row, Button, Accordion, Card } from "react-bootstrap";
import StepLists from "./StepLists";
import TransactionBox from "./TransactionBox";
import StepOne from "../../assets/images/transaction/buy-gold-step-1.svg";
import StepTwo from "../../assets/images/transaction/buy-gold-step-2.svg";
import StepThree from "../../assets/images/transaction/buy-gold-step-3.svg";

function Buy() {
  const listTitle = "How to buy Gold?";
  const stepsList = [
    {
      icon: StepOne,
      text: "Enter amount in ruppes or grams",
    },
    {
      icon: StepTwo,
      text: "Confirm the payment details",
    },
    {
      icon: StepThree,
      text: "Get Gold in your account",
    },
  ];

  return (
    <Row>
      <Col lg={6}>
        <StepLists listTitle={listTitle} stepsList={stepsList} />
      </Col>
      <Col lg={6}>
        <TransactionBox noInput={false} />
      </Col>
    </Row>
  );
}

export default Buy;
