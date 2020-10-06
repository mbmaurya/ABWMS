import React from "react";

//Icons
import { ReactComponent as DeliverIcon } from "../../../assets/images/dashboard/get-deliver.svg";

import {
  DashboadrCardStyles,
  DashboardCardElementStyles,
  DashboardCardElementTitleStyles,
  DashboardCardElementContentStyles,
  Growth,
} from "./style";

function DigitalGoldGrpah() {
  return (
    <div
      style={{ ...DashboadrCardStyles, marginLeft: "1%" }}
      className="dashboard-card"
    >
      <div className="dashboard-card-header">
        <p style={{ paddingTop: "24px", paddingBottom: "18px" }}>
          <DeliverIcon />
          Deliver
        </p>
      </div>
      <div className="dashboard-card-body">
        <ul style={{ paddingLeft: "20px", paddingBottom: "20px" }}>
          <li style={DashboardCardElementStyles}>
            <p style={DashboardCardElementTitleStyles}>Amount</p>
            <p
              style={{
                ...DashboardCardElementContentStyles,
                fontSize: "24px",
                lineHeight: "27px",
              }}
            >
              &#x20B9; 51,608
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
              &#x20B9; 5.00gm
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DigitalGoldGrpah;
