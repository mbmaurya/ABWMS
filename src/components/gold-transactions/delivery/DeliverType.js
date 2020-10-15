import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";
import { blackText } from "../../../styles";
import DeliveryPin from "./DeliveryPin";

const FormCheckStyles = {
  opacity: "1",
  display: "inline-block",
  verticalAlign: "top",
  width: "50%",
};

function DeliverType({ display }) {
  let path = "/gold-transactions/delivery/pin";
  let history = useHistory();
  return (
    <>
      <Modal show={display} onHide={() => !display}>
        <Modal.Body style={{ padding: "20px" }}>
          <h3
            style={{
              fontFamily: "PFHandbookPro-medium, sans-serif",
              fontSize: "24px",
              color: `${blackText}`,
              marginBottom: "10px",
            }}
          >
            Gold Deliver
          </h3>
          <Form>
            <Form.Check
              style={FormCheckStyles}
              type="radio"
              name="deliverGold"
              label="New purchase gold deliver "
              onClick={() => history.push(path)}
              className="full-width"
            />

            <Form.Check
              style={FormCheckStyles}
              className="full-width"
              type="radio"
              name="deliverGold"
              label="Existing gold deliver"
              onClick={() => history.push(path)}
            />
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeliverType;
