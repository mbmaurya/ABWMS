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
import SelectMenu from "../../global/SelectMenu";

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
  const isMobile = window.innerWidth <= 992;
  return (
    <div>
      <Container style={transactionContainer} className="transaction-container">
        <div style={{ ...box, padding: "18px 30px 30px" }} className="select-account">
          <Row>
            <Col lg={6}>
              <Row>
                <Col>
              <h3 style={HeadingStyles}>Select an account</h3>
              <p style={SubHeadingStyles}>
                Amount will be credited to your account
              </p>
              </Col>
              </Row>
              <div>
                <Form>
                  <Row>
                    <Col md={12}>
                      <SelectMenu options={accounts} optionType="" />
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col lg={6}>
            {!isMobile ?
              <div className="noInputTransactionBoxDiv">
                <TransactionBox noInput={true} />
              </div>
              : null
            }
            </Col>
          </Row>
        </div>
        <div className="button-group" style={buttonGroup}>
        <Link style={clearBtn} to="/gold-transactions">
          <i class="fa fa-angle-left" aria-hidden="true"></i> &nbsp;Back
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
