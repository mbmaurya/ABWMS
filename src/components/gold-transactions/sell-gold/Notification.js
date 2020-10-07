import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Col, Modal, Row } from "react-bootstrap";
import Summary from "../Summary";
import {
  buttonGroup,
  clearBtn,
  btn,
  blackText,
  greyText,
  greyBackground,
  redText,
  primaryRed,
  greenText,
} from "../../../styles";
import TimeLeft from "../../global/TimeLeft";

const ModalBodyStyles = {
  padding: "20px",
  borderRadius: "2px",
};

const HeadingStyles = {
  fontFamily: "PFHandbookPro-medium, sans-serif",
  fontSize: "24px",
  lineHeight: "27px",
  color: `${blackText}`,
  marginBottom: "5px",
};

const SubHeadingStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "14px",
  lineHeight: "17px",
  color: `${greyText}`,
  marginBottom: "20px",
};

const ListStyles = {
  padding: "10px",
  backgroundColor: `${greyBackground}`,
  marginBottom: "10px",
};

const ListItemStyles = {
  display: "inline-block",
  width: "50%",
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${greyText}`,
};

function Notification({ type }) {
  const [show, setShow] = useState(true);
  const [priceChange, setPriceChange] = useState(false);
  const [priceUpdate, setPriceUpdate] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const PriceChangeModal = () => {
    return (
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Body style={ModalBodyStyles}>
          <h3 style={HeadingStyles}>Opps! Selling price has changed </h3>
          <p style={SubHeadingStyles}>
            Looks like you took too long... Please referesh to get latest sell
            price
          </p>
          <ul style={ListStyles}>
            <li style={ListItemStyles}>Gold Rate ₹/gm</li>
            <li
              style={{
                ...ListItemStyles,
                textAlign: "right",
                color: `${primaryRed}`,
                fontSize: "16px",
                lineHeight: "19px",
              }}
            >
              <TimeLeft />
            </li>
          </ul>

          <Summary />
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
              }}
              to={`/gold-transactions/sell`}
            >
              Referesh
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  const PriceUpdateModal = () => {
    return (
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Body style={ModalBodyStyles}>
          <h3 style={{ ...HeadingStyles, marginBottom: "20px" }}>
            Selling price has been updated!
          </h3>
          <ul style={ListStyles}>
            <li style={ListItemStyles}>Gold Rate ₹5,374.72/gm</li>
            <li
              style={{
                ...ListItemStyles,
                textAlign: "right",
                color: `${greenText}`,
                fontSize: "16px",
                lineHeight: "19px",
              }}
            >
              <TimeLeft />
            </li>
          </ul>

          <Summary />
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
              }}
              to={`/gold-transactions/sell`}
            >
              Referesh
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    );
  };

  return (
    <div className="notification">
      {type == "price-change" ? <PriceChangeModal /> : ""}

      {type == "price-update" ? <PriceUpdateModal /> : ""}
    </div>
  );
}

export default Notification;
