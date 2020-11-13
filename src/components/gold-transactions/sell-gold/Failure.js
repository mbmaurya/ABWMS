import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  transactionContainer,
  box,
  blackText,
  greyText,
  greyBackground,
} from "../../../styles";
import { ReactComponent as FailureIcon } from "../../../assets/images/transaction/transaction-failure.svg";
import Summary from "../../global/Summary";
import EmailInvoice from "../../global/EmailInvoice";
import { Link } from "react-router-dom";
import { buttonGroup, clearBtn, btn } from "../../../styles";

const HeadingStyles = {
  fontFamily: "PFHandbookPro-medium, sans-serif",
  fontSize: "24px",
  lineHeight: "27px",
  color: `${blackText}`,
  textTransform: "capitalize",
  textAlign: "center",
  marginBottom: "15px",
};

const TransactionInfoStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "21px",
  lineHeight: "24px",
  color: `${greyText}`,
  marginTop: "25px",
};

const BoldFontStyles = {
  fontFamily: "PFHandbookPro-medium, sans-serif",
  color: `${blackText}`,
};

const OrderDetailsStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "16px",
  lineHeight: "19px",
  color: `${greyText}`,
  backgroundColor: `${greyBackground}`,
  padding: "15px 0",
  marginTop: "25px",
};

const SummaryTitleStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${blackText}`,
  margin: "10px 0px 15px",
  padding: "10px 15px",
  borderBottom: `1px solid ${greyText}`,
};

function SellGoldFailure() {
  const [reason, setreason] = useState("xxxxxx");
  const [orderId, setorderId] = useState("123456789");
  const [date, setdate] = useState("28 Aug 2020, 3:30 pm");
  return (
    <Container
      className="gold-transaction-successfull"
      style={{ ...transactionContainer, maxWidth: "700px" }}
    >
      <div style={{ ...box, padding: "30px" }}>
        <Row>
          <Col>
            <center>
              <h3 style={HeadingStyles}>Transaction Failure!</h3>
              <FailureIcon />
              <p style={TransactionInfoStyles}>
                Your transaction has been failed due to {reason}
              </p>
            </center>
            <div style={OrderDetailsStyles}>
              <Row>
                <Col>
                  <p>
                    Order Id: {orderId} | {date}
                  </p>
                </Col>
                <Col>
                  <p style={{ textAlign: "right" }}>24K 99.99%</p>
                </Col>
              </Row>
            </div>
            <h3 style={SummaryTitleStyles}>Sell gold details</h3>
            <Summary />
            <EmailInvoice />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default SellGoldFailure;
