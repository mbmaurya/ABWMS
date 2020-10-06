import React from "react";

//Icons
import { ReactComponent as GoldGraphIcon } from "../../../assets/images/dashboard/digital-goldgraph.svg";

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
      style={{ ...DashboadrCardStyles, marginLeft: "3%" }}
      className="dashboard-card"
    >
      <div className="dashboard-card-header">
        <p>
          <GoldGraphIcon />
          Digital Gold Graph
          <span>Gold - 24K 99.9%</span>
        </p>
      </div>
      <div className="dashboard-card-body">
        <ul style={{ paddingLeft: "80px", paddingBottom: "20px" }}>
          <li style={DashboardCardElementStyles}>
            <p style={DashboardCardElementTitleStyles}>Amount</p>
            <p style={DashboardCardElementContentStyles}>&#x20B9; 4,50,000</p>
          </li>
          <li style={DashboardCardElementStyles}>
            <p style={DashboardCardElementTitleStyles}>Grams (Weight)</p>
            <p style={DashboardCardElementContentStyles}>&#x20B9; 81.4366</p>
          </li>
          <li style={DashboardCardElementStyles}>
            <p style={DashboardCardElementTitleStyles}>Gain/Loss</p>
            <p
              style={{
                ...DashboardCardElementContentStyles,
                fontSize: "21px",
                lineHeight: "25px",
              }}
            >
              &#x20B9; 25,000
            </p>
            <span style={Growth}></span>
          </li>
          <li style={DashboardCardElementStyles}>
            <p style={DashboardCardElementTitleStyles}>Change</p>
            <p
              style={{
                ...DashboardCardElementContentStyles,
                fontSize: "21px",
                lineHeight: "25px",
              }}
            >
              0.70%
            </p>
            <span style={Growth}></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DigitalGoldGrpah;
