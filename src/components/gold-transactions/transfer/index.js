import React from "react";
import { Col, Row } from "react-bootstrap";
import StepLists from "../StepLists";
import TransactionBox from "../TransactionBox";
import StepOne from "../../../assets/images/transaction/buy-gold-step-1.svg";
import StepTwo from "../../../assets/images/transaction/buy-gold-step-2.svg";
import StepThree from "../../../assets/images/transaction/buy-gold-step-3.svg";

function Transfer() {
  const listTitle = "How to transfer Gold?";

  const listSubTitle = "";

  const stepsList = [
    {
      icon: StepOne,
      text: "Select Amount or Grams",
    },
    {
      icon: StepTwo,
      text: "Add transfer code",
    },
    {
      icon: StepThree,
      text: "Get transferred",
    },
  ];

  return (
    <Row>
      <Col lg={6}>
        <StepLists
          listTitle={listTitle}
          listSubTitle={listSubTitle}
          stepsList={stepsList}
        />
      </Col>
      <Col lg={6}>
        <TransactionBox type="transfer" noInput={false} />
      </Col>
    </Row>
  );
}

export default Transfer;
