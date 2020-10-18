import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import FormGroup from "../../onboarding/FormGroup";

function NetBanking() {
  const accounts = ["HDFC Bank Ltd. - 123456789"];

  return (
    <div>
      <Form>
        <Row>
          <Col md={12}>
            <FormGroup
              controlId="default-acc"
              label="Select Your Bank Account"
              inputType="select"
              selectOptions={accounts}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default NetBanking;
