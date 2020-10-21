import React from "react";
import { Form } from "react-bootstrap";
import { formLabel, formInput, inputError } from "../../styles";
import Creditcard from "../../assets/images/transaction/credit-card.svg";
import Cleave from "cleave.js/react";

function FormGroup(props) {
  const {
    controlId,
    label,
    inputType,
    placeholder,
    disabled,
    selectOptions,
  } = props;
  return (
    <Form.Group controlId={controlId} style={{ position: "relative" }}>
      <Form.Label style={formLabel}>
        {controlId === "expYear" ? (
          <span style={{ visibility: "hidden" }}>exp</span>
        ) : (
          label
        )}
      </Form.Label>
      {inputType !== "select" ? (
        <Form.Control
          style={formInput}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
        />
      ) : (
        <Form.Control as="select" style={formInput}>
          {/* <option>{placeholder}</option> */}
          {controlId === "default-acc" ? (
            <option>{selectOptions[0]}</option>
          ) : ""}
          {selectOptions.map((selectOption) => {
            return (
              <option value={selectOption} key={selectOption}>
                {selectOption}
              </option>
            );
          })}
        </Form.Control>
      )}
      {controlId === "creditCardNumber" ? (
        <span style={{ position: "absolute", right: 10, bottom: 10 }}>
          <img src={Creditcard} />
        </span>
      ) : null}
      {controlId === "cvv" ? (
        <span style={{ position: "absolute", top: 0, right: 10 }}>
          <i
            style={{ color: "orange", fontSize: 14 }}
            class="fa fa-info-circle"
            aria-hidden="true"
          />
        </span>
      ) : null}
      {inputType === "select" ? (
        <span
          id="expMonth"
          style={{
            position: "absolute",
            right: 10,
            bottom: 8,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <i class="fa fa-angle-down" style={{ fontSize: 20 }}></i>
        </span>
      ) : null}
      <Form.Text style={inputError}></Form.Text>
    </Form.Group>
  );
}

export default FormGroup;
