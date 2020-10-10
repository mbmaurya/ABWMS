import React, { useState } from "react";
import { greyText, whiteText, clearBtn, greenText } from "../../../styles";

import { Link } from "react-router-dom";
import { ReactComponent as GoldCoin } from "../../../assets/images/transaction/gold-coin.svg";
import DeliverType from "./DeliverType";

const OrderBoxStyles = {
  marginTop: "20px",
  backgroundColor: `${whiteText}`,
  boxShadow: "0px 10px 35px 0 rgba(0, 0, 0, 0.1)",
  padding: "20px",
  textAlign: "center",
};

const OrderBoxContentStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "14px",
  lineHeight: "17px",
  color: `${greyText}`,
};

const OrderButtonStyles = {
  display: "inline-block",
  fontSize: "16px",
  border: `1px solid ${greenText}`,
  borderRadius: "2px",
  padding: "7px 20px",
  textTransform: "capitalize",
  fontFamily: "PFHandbookPro-medium, sans-serif",
  marginTop: "15px",
};

function OrderBox({ weight, makingCharges }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div style={OrderBoxStyles}>
        <GoldCoin style={{ marginBottom: "10px" }} />
        <p style={OrderBoxContentStyles}>{weight} gm Gold 999.9</p>
        <p style={OrderBoxContentStyles}>
          Making charges &#x20B9;{makingCharges}
        </p>
        <Link
          style={{
            ...clearBtn,
            ...OrderButtonStyles,
          }}
          onClick={handleShow}
        >
          Order Now
        </Link>
      </div>
      {show ? <DeliverType display={show} /> : null}
    </>
  );
}

export default OrderBox;
