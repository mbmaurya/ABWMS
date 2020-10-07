import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  box,
  transactionContainer,
  buttonGroup,
  clearBtn,
  btn,
} from "../../../styles";
import TransactionBox from "../TransactionBox";
import CreditCard from "./CreditCard";
import Neft from "./Neft";
import NetBanking from "./NetBanking";
import Upi from "./Upi";

function BuyGold() {
  const [key, setKey] = useState("credit-card");

  return (
    <Container style={transactionContainer}>
      <div style={{ ...box, padding: "18px 30px 30px" }}>
        <Row>
          <Col lg={6}>
            <Tabs
              id="buy-gold-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab
                eventKey="credit-card"
                title={<span>Credit Card</span>}
                style={{ padding: "44px 30px 0px" }}
                className="payment-method"
              >
                <CreditCard />
              </Tab>
              <Tab
                eventKey="neft"
                title={<span>NEFT/RTGS</span>}
                style={{ padding: "44px 30px 0px" }}
                className="payment-method"
              >
                <Neft />
              </Tab>
              <Tab
                eventKey="net-banking"
                title={<span>NetBanking</span>}
                style={{ padding: "44px 30px 0px" }}
                className="payment-method"
              >
                <NetBanking />
              </Tab>
              <Tab
                eventKey="upi"
                title={<span>UPI</span>}
                style={{ padding: "44px 30px 0px" }}
                className="payment-method"
              >
                <Upi />
              </Tab>
            </Tabs>
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
          to={`/gold-transactions/successfull`}
        >
          Proceed
        </Link>
      </div>
    </Container>
  );
}

export default BuyGold;
