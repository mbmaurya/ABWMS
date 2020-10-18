import React from "react";
import { Form, Row, Col, FormControl } from "react-bootstrap";

function Address() {
  return (
    <>
      <h3 style={{ marginBottom: "40px", fontSize: 24, marginLeft: 15 }}>
        Address Details
      </h3>
      <Form>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Address*</Form.Label>
              <Form.Control
                placeholder="Please Enter Your Address"
                types="text"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                className="input-dark-background"
                type="text"
                placeholder="Mumbai"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                className="input-dark-background"
                type="text"
                placeholder="Maharashtra"
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control
                className="input-dark-background"
                type="text"
                placeholder="India"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Pin Code*</Form.Label>
              <Form.Control type="number" placeholder="400001"></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Address;
