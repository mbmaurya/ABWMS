import React from "react";
import { Col, Row } from "react-bootstrap";
import StepLists from "./StepLists";
import TransactionBox from "./TransactionBox";
import StepOne from "../../assets/images/transaction/buy-gold-step-1.svg";
import StepTwo from "../../assets/images/transaction/buy-gold-step-2.svg";
import StepThree from "../../assets/images/transaction/buy-gold-step-3.svg";

function Sell() {
  const listTitle = "How to sell Gold?";
  const stepsList = [
    {
      icon: StepOne,
      text: "Enter amount in rupees or grams",
    },
    {
      icon: StepTwo,
      text: "Confirm bank account details",
    },
    {
      icon: StepThree,
      text: "Get money in selected bank account in 48 hrs",
    },
  ];

  return (
    <Row>
      <Col lg={6}>
        <StepLists listTitle={listTitle} stepsList={stepsList} />
      </Col>
      <Col lg={6}>
        <TransactionBox type="sell" noInput={false} />
      </Col>
    </Row>
  );
}

export default Sell;
