import React from "react";
import { cardItemWhite } from "../../styles/index";
const CardItem = ({ title, content, icon }) => {
  return (
    <div className="card" style={cardItemWhite}>
      <p className="icon" style={{ margin: "auto" }}>
        <img src={icon} alt="icon" />
      </p>
      <h4
        className="title"
        style={{
          fontSize: 21,
          margin: "auto auto auto 0",
          position: "relative",
          color: "#3e593c",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {title}
      </h4>
      <p
        className="description"
        style={{
          fontSize: 16,
          gridColumn: "2/-1",
          color: "#6c7174",
          fontWeight: 500,
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default CardItem;
