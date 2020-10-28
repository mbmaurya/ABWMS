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
        <Modal.Body style={{ padding: "60px 30px", margin: "auto" }}>
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
          {/* <Form>
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
          </Form> */}

          <div className="d-flex mt-2 ml-1">
            <div
              onClick={() => history.push(path)}
              className="mr-4 d-flex align-items-center"
              style={{ position: "relative" }}
            >
              <input type="radio" name="deliverGold" style={{ opacity: 0 }} />
              <div className="circle"></div>
              <label
                style={{
                  color: "#6c7174",
                  fontSize: "14px",
                  verticalAlign: "middle",
                }}
                className="ml-2"
              >
                New purchase gold deliver
              </label>
            </div>

            <div
              onClick={() => history.push(path)}
              className="mr-4 d-flex align-items-center"
              style={{ position: "relative" }}
            >
              <input
                type="radio"
                name="deliverGold"
                style={{ opacity: 0 }}
              />
              <div className="circle"></div>
              <label
                style={{
                  color: "#6c7174",
                  fontSize: "14px",
                  verticalAlign: "middle",
                }}
                className="ml-2"
              >
                Existing gold deliver
              </label>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DeliverType;
