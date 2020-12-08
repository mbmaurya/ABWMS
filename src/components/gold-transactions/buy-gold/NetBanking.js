import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import SelectMenu from "../../global/SelectMenu";
import FormGroup from "../../onboarding/FormGroup";

function NetBanking() {
  const accounts = ["HDFC Bank Ltd. - 123456789"];

  return (
    <div>
      <Form>
        <Row>
          <Col md={12}>
            <SelectMenu options={accounts} optionType="Select Your Bank Account" />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default NetBanking;
