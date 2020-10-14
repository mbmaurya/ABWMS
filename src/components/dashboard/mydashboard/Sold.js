import React from "react";

//Icons

import { ReactComponent as SoldIcon } from "../../../assets/images/dashboard/redeem-gold.svg";

import {
  DashboadrCardStyles,
  DashboardCardElementStyles,
  DashboardCardElementTitleStyles,
  DashboardCardElementContentStyles,
  Growth,
} from "./style";

//Icons

import { ReactComponent as LockerIcon } from "../../../assets/images/dashboard/safe-locker.svg";

function Sold() {
  return (
    <div style={DashboadrCardStyles} className="dashboard-card">
      <div className="dashboard-card-header">
        <p style={{ paddingTop: "24px", paddingBottom: "18px" }}>
          <SoldIcon />
          Sold
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
              &#x20B9; 1,50,000
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
              &#x20B9; 81.4366
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sold;
