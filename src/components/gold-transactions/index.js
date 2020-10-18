import React, { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import {
  box,
  transactionContainer,
  btn,
  clearBtn,
  buttonGroup,
} from "../../styles";
import {
  Link,
  BrowserRouter as Router,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Buy from "./Buy";
import DeliveryIcon from "../../assets/images/landing-page/get-deliver.svg";
import TransferIcon from "../../assets/images/landing-page/transfer.svg";
import SellGoldIcon from "../../assets/images/transaction/redeem-gold.svg";
import GoldIcon from "../../assets/images/landing-page/buy-export-as-gold.svg";
import Sell from "./Sell";
import Delivery from "./delivery";
import Transfer from "./transfer";
import Switch from "react-bootstrap/esm/Switch";
import BuyGold from "./buy-gold";

function GoldTransactions() {
  let match = useRouteMatch();
  const [key, setKey] = useState("buy");

  return (
    <Container style={transactionContainer} className="transaction-container">
      <div style={{ ...box, padding: "18px 30px 30px" }}>
        <Tabs
          id="gold-transaction-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab
            eventKey="buy"
            title={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-8px",
                }}
              >
                <img src={GoldIcon} style={{ width: 30, marginRight: 8 }} />
                <span>Buy Gold</span>
              </div>
            }
          >
            <Buy />
          </Tab>
          <Tab
            eventKey="sell"
            title={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-8px",
                }}
              >
                <img src={SellGoldIcon} style={{ width: 30, marginRight: 8 }} />
                <span>Sell Gold</span>
              </div>
            }
          >
            <Sell />
          </Tab>
          <Tab
            eventKey="delivery"
            title={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-8px",
                }}
              >
                <img src={DeliveryIcon} style={{ width: 30, marginRight: 8 }} />
                <span>Delivery</span>
              </div>
            }
          >
            <Delivery />
          </Tab>
          <Tab
            eventKey="transfer"
            title={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-8px",
                }}
              >
                <img src={TransferIcon} style={{ width: 30, marginRight: 8 }} />
                <span>Transfer</span>
              </div>
            }
          >
            <Transfer />
          </Tab>
        </Tabs>
      </div>
      <div className="button-group" style={buttonGroup}>
        <Link style={clearBtn} to="/">
          <i class="fa fa-angle-left" aria-hidden="true"></i> &nbsp;Back
        </Link>
        {key != "delivery" ? (
          <Link
            style={{
              ...btn,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to={`${match.path}/${key}`}
          >
            Proceed
          </Link>
        ) : null}
      </div>
    </Container>
  );
}

export default GoldTransactions;
