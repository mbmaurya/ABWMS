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
    <Form.Group controlId={controlId}>
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
          <option selected>{placeholder}</option>
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
        <span style={{ position: "absolute", right: 20, bottom: 25 }}>
          <img src={Creditcard} />
        </span>
      ) : null}
      {controlId === "cvv" ? (
        <span style={{ position: "absolute", top: 0, right: 25 }}>
          <i
            style={{ color: "orange", fontSize: 14 }}
            class="fa fa-info-circle"
            aria-hidden="true"
          />
        </span>
      ) : null}
      <Form.Text style={inputError}></Form.Text>
    </Form.Group>
  );
}

export default FormGroup;
