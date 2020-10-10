import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  blackText,
  btn,
  greyText,
  lightGreen,
  whiteText,
} from "../../../styles";

// Styles

const ProductDetailsStyles = {
  padding: "20px 20px 10px",
  marginTop: "80px",
  backgroundColor: "#f2f3f0",
};

const ProductDetailsHeadingStyles = {
  fontFamily: "PFHandbookPro-medium, sans-serif",
  fontSize: "16px",
  lineHeight: "19px",
  color: `${blackText}`,
  marginBottom: "10px",
};

const ProductDetailsListStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "16px",
  lineHeight: "20px",
  paddingLeft: "15px",
  marginBottom: 0,
  color: `${greyText}`,
};

const TitleStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontZise: "18px",
  lineHeight: "21px",
  color: `${blackText}`,
  marginBottom: "10px",
};

const InputStyles = {
  height: "45px",
  borderRadius: "2px",
  backgroundColor: `${whiteText}`,
};

const CheckStyles = {
  position: "absolute",
  top: "42px",
  right: "30px",
  zIndex: "1",
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontZise: "18px",
  lineHeight: "21px",
  color: `${lightGreen}`,
  textDecoration: "underline",
  cursor: "pointer",
};

const ProductDetails = [
  "This coin portrays the divine beauty of the lotus, in MMTC-PAMP global copyright design reflecting perfection, purity and eternity.",
  "The coin is sealed in a signed, serial number protective CertiPAMP packaging that guarantees the mental content, weight and quality.",
  "The coin is produced in India’s only LBMA accredited refinery, a global standard for Gold and Slier.",
  "Easy Buyback available in MMTC-PAMP stores on production of bill at 100% Gold value on that day.",
];

function CheckPin() {
  const [isValid, setIsValid] = useState(true);
  const validatePin = () => {
    setIsValid(!isValid);
  };
  const listKey = 0;
  return (
    <>
      <p style={TitleStyles}>Delivering to</p>
      <Form>
        <Form.Control
          type="number"
          placeholder="Enter Pin Code"
          className={!isValid ? `error` : null}
          style={InputStyles}
        ></Form.Control>
      </Form>
      <a onClick={validatePin} style={CheckStyles}>
        Check
      </a>
      {!isValid ? (
        <span className={!isValid ? `error` : null} style={{ border: "none" }}>
          Unable to deliver destination
        </span>
      ) : null}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link
          style={{
            ...btn,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          Proceed
        </Link>
      </div>
      <div style={ProductDetailsStyles}>
        <h3 style={ProductDetailsHeadingStyles}>Product details:</h3>
        <ol style={ProductDetailsListStyles}>
          {ProductDetails.map((detail, key = { listKey }) => (
            <li key={key + 1} style={{ marginBottom: "10px" }}>
              {detail}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default CheckPin;
