import React, { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import {
  box,
  transactionContainer,
  btn,
  clearBtn,
  buttonGroup,
} from "../../styles";
import { Link } from "react-router-dom";
import Buy from "./Buy";
import DeliveryIcon from "../../assets/images/transaction/delivery.svg";
import TransferIcon from "../../assets/images/transaction/transfer.svg";

function GoldTransactions() {
  const [key, setKey] = useState("buy");

  return (
    <Container style={transactionContainer} className="transaction-container">
      <div style={{ ...box, padding: "18px 30px 30px" }}>
        <Tabs
          id="gold-transaction-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="buy" title={<span>Buy Gold</span>}>
            <Buy />
          </Tab>
          <Tab eventKey="sell" title={<span>Sell Gold</span>}>
            <p>Sell Gold</p>
          </Tab>
          <Tab
            eventKey="delivery"
            title={
              <span>
                <img src={DeliveryIcon} style={{ width: 24, marginRight: 8 }} />
                Delivery
              </span>
            }
          >
            <p>Delivery</p>
          </Tab>
          <Tab
            eventKey="transfer"
            title={
              <span>
                <img src={TransferIcon} style={{ width: 18, marginRight: 8 }} />
                Transfer
              </span>
            }
          >
            <p>Transfer</p>
          </Tab>
        </Tabs>
      </div>
      <div className="button-group" style={buttonGroup}>
        <Link style={clearBtn} to="/">
          Back
        </Link>
        <Link
          style={{
            ...btn,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to={`/gold-transactions/${key}`}
        >
          Proceed
        </Link>
      </div>
    </Container>
  );
}

export default GoldTransactions;
