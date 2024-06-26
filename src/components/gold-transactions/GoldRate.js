import React, { useState } from "react";
import TimeLeft from "../global/TimeLeft";
import { ReactComponent as RefreshIcon } from "../../assets/images/transaction/refresh.svg";
import { goldRateBox, goldRatePara, goldRateSpan } from "../../styles";

function GoldRate({ goldRate }) {
  const rate = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(goldRate);

  console.log(rate);
  return (
    <div>
      <div style={{ marginLeft: "auto", width: "fit-content", color: "grey" }}>
        <TimeLeft />
      </div>
      <div style={goldRateBox}>
        <p style={goldRatePara}>
          Gold Rate &nbsp;<span style={goldRateSpan}>{rate}</span> /gm
          <RefreshIcon width="20" style={{ marginLeft: 8 }} />
        </p>
      </div>
    </div>
  );
}

export default GoldRate;
