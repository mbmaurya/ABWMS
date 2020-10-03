import React from "react";

const DashboadrCardStyles = {
  width: "97%",
  height: "auto",
  backgroundColor: `${whiteText}`,
  boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.1)",
  marginBottom: "20px",
};

function DashboardCard(icon, title, subtitle, list) {
  return (
    <div style={DashboadrCardStyles}>
      <div className="dashboard-card-header">
        <p>
          {icon}
          {title}
          <span>{subtitle}</span>
        </p>
      </div>
      <div className="dashboard-card-body">
        <ul style={{ paddingLeft: "80px", paddingBottom: "20px" }}>{list}</ul>
      </div>
    </div>
  );
}

export default DashboardCard;
