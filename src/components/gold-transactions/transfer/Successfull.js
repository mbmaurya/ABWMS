import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  transactionContainer,
  box,
  blackText,
  greyText,
  greyBackground,
} from "../../../styles";
import { ReactComponent as SuccessfullIcon } from "../../../assets/images/transaction/order-successfull.svg";
import Summary from "../Summary";
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
  marginBottom: "20px",
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

function TransferGoldSucessfully() {
  const [weight, setweight] = useState(1);
  const [cost, setcost] = useState(5000);
  const [beneficiary, setBeneficiary] = useState("Vishwanath Birje");
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
              <h3 style={HeadingStyles}>Gold Transfered Successfully!</h3>
              <SuccessfullIcon />
              <p style={TransactionInfoStyles}>
                {weight} gms of Gold transfered to
                <span style={BoldFontStyles}> {beneficiary} </span>
                Account
              </p>
            </center>
            <div style={OrderDetailsStyles}>
              <Row>
                <Col>
                  <p>
                    <span className="block-mobile">Order Id: {orderId}</span> <span className="vhr">|</span> <span className="block-mobile">{date}</span>
                  </p>
                </Col>
                <Col>
                  <p style={{ textAlign: "right" }}>24K 99.99%</p>
                </Col>
              </Row>
            </div>
            <EmailInvoice />
          </Col>
        </Row>
      </div>
      <div
        className="button-group"
        style={{ ...buttonGroup, justifyContent: "flex-end" }}
      >
        <Link
          style={{
            ...btn,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "180px",
          }}
          to={`/dashboard`}
        >
          Go To Dashboard
        </Link>
      </div>
    </Container>
  );
}

export default TransferGoldSucessfully;
