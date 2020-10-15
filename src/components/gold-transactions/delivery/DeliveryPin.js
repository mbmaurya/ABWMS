import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as GoldPackImage } from "../../../assets/images/transaction/gold-delivery.svg";
import BtnGroup from "../../global/BtnGroup";
import { Link } from "react-router-dom";
import {
  transactionContainer,
  box,
  blackText,
  greyText,
  buttonGroup,
  clearBtn,
  btn,
} from "../../../styles";
import CheckPin from "./CheckPin";
import Address from "./Address";
import OrderPlaced from "./OrderPlaced";

//styles

const ProductDetailsListStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "16px",
  lineHeight: "20px",
  paddingLeft: "15px",
  marginBottom: 0,
  color: `${greyText}`,
};

const ListTitleStyles = {
  fontFamily: "PFHandbookPro-medium, sans-serif",
  fontSize: "21px",
  lineHeight: "24px",
  color: `${blackText}`,
};

function DeliveryPin() {
  const [seller, setSeller] = useState("MMTC-PAMP India Pvt. Ltd");
  const [shipping, setShipping] = useState("Free Shipping");
  const [returnPolicy, setReturnPolicy] = useState(
    "Return/replacement not allowed"
  );
  const [weight, setWeight] = useState(1);
  const [cancelPolicy, setCancelPolicy] = useState("Cancellation not allowed");
  const [status, setStatus] = useState("address");
  return (
    <>
      <Container style={transactionContainer}>
        <div style={{ ...box, padding: "18px 30px 30px" }}>
          <Row>
            <Col lg={6}>
              <div>
                {status == "checkpin" ? <CheckPin /> : <Address />}
                {/* <Address /> */}
                {/* <OrderPlaced /> */}
              </div>
            </Col>
            <Col lg={6}>
              <div style={{ ...box, padding: "30px" }}>
                <ul style={ListTitleStyles}>
                  <li style={{ display: "inline-block", width: "50%" }}>
                    Delivery Gold
                  </li>
                  <li
                    style={{
                      display: "inline-block",
                      width: "50%",
                      textAlign: "right",
                    }}
                  >
                    {weight}gm Gold Coin 99.99%
                  </li>
                </ul>

                <center style={{ margin: "30px 0px" }}>
                  <GoldPackImage />
                </center>

                <ul style={ProductDetailsListStyles}>
                  <li
                    style={{
                      display: "inline-block",
                      width: "50%",
                      verticalAlign: "top",
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>
                      Making charges <br />
                      <b>&#x20B9;316</b>
                    </span>{" "}
                    Inclusive of all taxes
                  </li>
                  <li
                    style={{
                      display: "inline-block",
                      width: "50%",
                      verticalAlign: "top",
                    }}
                  >
                    Seller : {seller}
                    <br />
                    {shipping}
                    <br />
                    {returnPolicy}
                    <br />
                    {cancelPolicy}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>

        <BtnGroup />
      </Container>
    </>
  );
}

export default DeliveryPin;
