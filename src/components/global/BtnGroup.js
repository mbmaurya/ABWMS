import React from "react";
import { Button } from "react-bootstrap";
import { btn, clearBtn, buttonGroup } from "../../styles";

function BtnGroup({ prev, next }) {
  return (
    <div className="button-group" style={buttonGroup}>
      <Button style={clearBtn} onClick={() => prev()}>
        <i class="fa fa-angle-left" aria-hidden="true"></i> &nbsp;Back
      </Button>
      {/* <Button style={btn} onClick={() => next()}>
        Proceed
      </Button> */}
    </div>
  );
}

export default BtnGroup;
