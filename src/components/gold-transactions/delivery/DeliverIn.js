import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { blackText, greyText } from "../../../styles";

import OrderBox from "./OrderBox";

const HeadingStyles = {
  fontFamiy: "PFHandbookPro-medium, sans-serif",
  fontSize: "21px",
  lineHeight: "24px",
  color: `${blackText}`,
};

const HeadingParaStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${greyText}`,
  textAlign: "right",
};

export function DeliverIn() {
  return (
    <>
      <Row>
        <Col>
          <h3 style={HeadingStyles}>Select Gold Coin</h3>
        </Col>
        <Col>
          <p style={HeadingParaStyles}>24k | 99.9%</p>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <OrderBox weight="1" makingCharges="316" />
        </Col>
        <Col md={6}>
          <OrderBox weight="2" makingCharges="416" />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <OrderBox weight="5" makingCharges="616" />
        </Col>
        <Col md={6}>
          <OrderBox weight="10" makingCharges="916" />
        </Col>
      </Row>
    </>
  );
}

export default DeliverIn;
