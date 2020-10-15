import React from "react";
import { cardItem2 } from "../../styles/index";
const Card2 = ({ title, content }) => {
  return (
    <div className="card2" style={cardItem2}>
      <h4
        className="title"
        style={{
          fontSize: 18,
          position: "relative",
          fontWeight: 600,
          marginBottom: "30px",
        }}
      >
        {title}
      </h4>
      <p className="description2" style={{ fontSize: 16, color: "#6c7174" }}>
        {content}
      </p>
    </div>
  );
};

export default Card2;
