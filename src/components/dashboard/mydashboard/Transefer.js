import React from "react";

//Icons
import { ReactComponent as TransferIcon } from "../../../assets/images/dashboard/transfer.svg";

//Styles
import {
  DashboadrCardStyles,
  DashboardCardElementStyles,
  DashboardCardElementTitleStyles,
  DashboardCardElementContentStyles,
} from "./style";

function Transfer() {
  return (
    <div style={{ ...DashboadrCardStyles }} className="dashboard-card">
      <div className="dashboard-card-header">
        <p style={{ paddingTop: "24px", paddingBottom: "18px" }}>
          <TransferIcon />
          Transfer
        </p>
      </div>
      <div className="dashboard-card-body">
        <ul style={{ paddingLeft: "80px", paddingBottom: "20px" }}>
          <li style={DashboardCardElementStyles}>
            <p style={DashboardCardElementTitleStyles}>Amount</p>
            <p
              style={{
                ...DashboardCardElementContentStyles,
                fontSize: "24px",
                lineHeight: "27px",
              }}
            >
              &#x20B9; 25,000
            </p>
          </li>
          <li style={DashboardCardElementStyles}>
            <p style={DashboardCardElementTitleStyles}>Grams (Weight)</p>
            <p
              style={{
                ...DashboardCardElementContentStyles,
                fontSize: "24px",
                lineHeight: "27px",
              }}
            >
              &#x20B9; 4.5327 gm
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Transfer;
