import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { blackText, greyText } from "../../../styles";

const HeadingStyles = {
  fontFamiy: "PFHandbookPro-medium, sans-serif",
  fontSize: "21px",
  lineHeight: "24px",
  color: `${blackText}`,
  marginTop: 0,
  marginBottom: "30px",
};

const LabelStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${greyText}`,
};

function TransferIn() {
  return (
    <>
      <Form>
        <h3 style={HeadingStyles}>Transfer Form</h3>
        <Row style={{ marginBottom: "20px" }}>
          <Col md={6}>
            <Form.Label style={LabelStyles}>Transfer Code</Form.Label>
            <Form.Control type="text" placeholder="TC123456"></Form.Control>
          </Col>
          <Col md={6}>
            <Form.Label style={LabelStyles}>Name</Form.Label>
            <Form.Control type="name" placeholder="Nilesh Patel"></Form.Control>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Label style={LabelStyles}>Amounnt( &#x20B9;)</Form.Label>
            <Form.Control type="number" placeholder=""></Form.Control>
          </Col>
          <Col md={6}>
            <Form.Label style={LabelStyles}>Grams (weight)</Form.Label>
            <Form.Control type="number" placeholder=""></Form.Control>
          </Col>
        </Row>

        <h3 style={{ ...HeadingStyles, marginTop: "30px" }}>Transfer to</h3>
        <Row>
          <Col md={6}>
            <Form.Label style={LabelStyles}>Transfer Code</Form.Label>
            <Form.Control type="text" placeholder="TC123456"></Form.Control>
          </Col>
          <Col md={6}>
            <Form.Label style={LabelStyles}>Name</Form.Label>
            <Form.Control type="name" placeholder="Nilesh Patel"></Form.Control>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default TransferIn;
