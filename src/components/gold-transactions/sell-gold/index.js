import React from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  box,
  transactionContainer,
  buttonGroup,
  clearBtn,
  btn,
  blackText,
  greyText,
} from "../../../styles";

import FormGroup from "../../onboarding/FormGroup";
import TransactionBox from "../TransactionBox";
import Notification from "./Notification";

const HeadingStyles = {
  fontFamily: "PFHandbookPro-medium, sans-serif",
  fontSize: "24px",
  lineHeight: "27px",
  color: `${blackText}`,
  margin: "0px 0px 5px",
};

const SubHeadingStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${greyText}`,
  marginBottom: "20px",
};

function SelectAccount() {
  const accounts = ["HDFC Bank Ltd. - 123456789"];
  return (
    <div>
      <Container style={transactionContainer}>
        <div style={{ ...box, padding: "18px 30px 30px" }}>
          <Row>
            <Col lg={6}>
              <h3 style={HeadingStyles}>Select an account</h3>
              <p style={SubHeadingStyles}>
                Amount will be credited to your account
              </p>
              <div>
                <Form>
                  <Row noGutters={true}>
                    <Col md={12}>
                      <FormGroup
                        controlId="expYear"
                        inputType="select"
                        selectOptions={accounts}
                      />
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col lg={6}>
              <div className="noInputTransactionBoxDiv">
                <TransactionBox noInput={true} />
              </div>
            </Col>
          </Row>
        </div>
        <div className="button-group" style={buttonGroup}>
          <Link style={clearBtn} to="/gold-transactions">
            Back
          </Link>
          <Link
            style={{
              ...btn,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to={`/gold-transactions/sell-gold/successfull`}
          >
            Proceed
          </Link>
        </div>
      </Container>

      <div>
        {/* add type as price-change or price-update to see the notificaton */}
        <Notification type="" />
      </div>
    </div>
  );
}

export default SelectAccount;
