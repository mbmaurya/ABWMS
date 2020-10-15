import React from "react";
import { cardItem } from "../../styles/index";
const CardItem = ({ title, content, icon }) => {
  return (
    <div className="carditem" style={cardItem}>
      <p className="icon" style={{ margin: "auto" }}>
        <img src={icon} alt="icon" />
      </p>
      <h4
        className="title font-weight-bold"
        style={{
          fontSize: 21,
          margin: "auto auto auto 0",
          position: "relative",
        }}
      >
        {title}
      </h4>
      <p
        className="description"
        style={{ fontSize: 16, gridColumn: "2/-1", color: "#6c7174" }}
      >
        {content}
      </p>
    </div>
  );
};

export default CardItem;
