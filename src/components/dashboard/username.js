import React from "react";

import { greenText } from "../../styles";

const dashboardUsername = {
  fontFamily: "PFHandbookPro-medium, sans-serif",
  fontSize: "24px",
  lineHeight: "28px",
  color: `${greenText}`,
  letterSpacing: "1px",
  marginTop: "30px",
  marginBottom: "0px",
};

const UserName = (props) => {
  return (
    <h3 style={dashboardUsername} className={props.assignClass}>
      Hello Nilesh Patel!!
      <i
        style={{ position: "absolute", right: 10, top: 20 }}
        className="fa fa-angle-down dasboard-username-dropdown"
      ></i>
    </h3>
  );
};

export default UserName;
