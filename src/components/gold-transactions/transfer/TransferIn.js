import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { blackText, greyText } from "../../../styles";

const HeadingStyles = {
  fontFamiy: "PFHandbookPro-medium, sans-serif",
  fontSize: "21px",
  lineHeight: "24px",
  color: `${blackText}`,
  marginTop: 0,
  marginBottom: "15px",
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
        {/* <Row style={{ marginBottom: "20px" }}>
          <Col md={6}>
            <Form.Label style={LabelStyles}>Transfer Code</Form.Label>
            <Form.Control type="text" placeholder="TC123456"></Form.Control>
          </Col>
          <Col md={6} style={{ padding: "0" }}>
            <Form.Label style={LabelStyles}>Name</Form.Label>
            <Form.Control type="name" placeholder="Nilesh Patel"></Form.Control>
          </Col>
        </Row> */}
        <div
          className="transfer-form-container"
          style={{ marginBottom: "20px" }}
        >
          <div class="transfer-form-group">
            <Form.Label style={LabelStyles}>Transfer Code</Form.Label>
            <Form.Control
              className="transfer-input"
              type="text"
              placeholder="TC123456"
            ></Form.Control>
          </div>
          <div class="transfer-form-group">
            <Form.Label style={LabelStyles}>Name</Form.Label>
            <Form.Control
              className="transfer-input"
              type="name"
              placeholder="Nilesh Patel"
            ></Form.Control>
          </div>
        </div>

        <div
          className="transfer-form-container"
          style={{ marginBottom: "20px" }}
        >
          <div class="transfer-form-group">
            <Form.Label style={LabelStyles}>Amount( &#x20B9;)</Form.Label>
            <Form.Control type="number" placeholder=""></Form.Control>
          </div>
          <div class="transfer-form-group">
            <Form.Label style={LabelStyles}>Grams (weight)</Form.Label>
            <Form.Control type="number" placeholder=""></Form.Control>
          </div>
        </div>

        {/* <Row>
          <Col md={6}>
            <Form.Label style={LabelStyles}>Amount( &#x20B9;)</Form.Label>
            <Form.Control type="number" placeholder=""></Form.Control>
          </Col>
          <Col md={6}>
            <Form.Label style={LabelStyles}>Grams (weight)</Form.Label>
            <Form.Control type="number" placeholder=""></Form.Control>
          </Col>
        </Row> */}

        <h3 style={{ ...HeadingStyles, marginTop: "25px" }}>Transfer to</h3>
        <div className="transfer-form-container">
          <div class="transfer-form-group">
            <Form.Label style={LabelStyles}>Transfer Code</Form.Label>
            <Form.Control type="text" placeholder="TC123456"></Form.Control>
          </div>
          <div class="transfer-form-group">
            <Form.Label style={LabelStyles}>Name</Form.Label>
            <Form.Control type="name" placeholder="Nilesh Patel"></Form.Control>
          </div>
        </div>

        {/* <Row>
          <Col md={6}>
            <Form.Label style={LabelStyles}>Transfer Code</Form.Label>
            <Form.Control type="text" placeholder="TC123456"></Form.Control>
          </Col>
          <Col md={6}>
            <Form.Label style={LabelStyles}>Name</Form.Label>
            <Form.Control type="name" placeholder="Nilesh Patel"></Form.Control>
          </Col>
        </Row> */}
      </Form>
    </>
  );
}

export default TransferIn;
