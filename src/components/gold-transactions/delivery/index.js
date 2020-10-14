import React from "react";
import { Col, Row } from "react-bootstrap";
import StepLists from "../StepLists";
import TransactionBox from "../TransactionBox";
import StepOne from "../../../assets/images/transaction/buy-gold-step-1.svg";
import StepTwo from "../../../assets/images/transaction/buy-gold-step-2.svg";
import StepThree from "../../../assets/images/transaction/buy-gold-step-3.svg";

function Delivery() {
  const listTitle = "Deliver Gold";

  const listSubTitle =
    "Now get your 24K Gold delivered to your doorstep directly in the form of gold coin.";

  const listSecondaryTitle = "How to get Gold Coin delivered?";
  const stepsList = [
    {
      icon: StepOne,
      text: "Select gold coin",
    },
    {
      icon: StepTwo,
      text: "Pay making charges",
    },
    {
      icon: StepThree,
      text: "Get home delivery",
    },
  ];

  return (
    <Row>
      <Col lg={6}>
        <StepLists
          listTitle={listTitle}
          listSubTitle={listSubTitle}
          stepsList={stepsList}
          listSecondaryTitle={listSecondaryTitle}
        />
      </Col>

      <Col lg={6}>
        <TransactionBox type="deliver" noInput={false} />
      </Col>
    </Row>
  );
}

export default Delivery;
