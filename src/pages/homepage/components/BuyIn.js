import React, { useState } from "react";
import { bigCardInput, prizeBorder } from "../../../styles/index";

function BuyIn() {
  const [buy, setBuy] = useState("buy in rupee");
  const [input, setInput] = useState(15000);
  const selectData = [2500, 5000, 7500, 10000, 15000];

  return (
    <div className="buyin" style={{ margin: "auto", width: "100%" }}>
      <h5 className="subtitle">Buy-in</h5>
      <div className="d-flex mt-2">
        <div className="mr-4" style={{ position: "relative" }}>
          <input
            type="radio"
            value="buy in rupee"
            checked={buy === "buy in rupee"}
            onChange={(e) => setBuy(e.target.value)}
          />
          <div class="circle"></div>
          <label
            style={{ color: "#6c7174", fontSize: "14px" }}
            className="ml-2"
          >
            Buy in rupee
          </label>
        </div>

        <div style={{ position: "relative" }}>
          <input
            type="radio"
            value="buy in grams"
            checked={buy === "buy in grams"}
            onChange={(e) => setBuy(e.target.value)}
          />
          <div class="circle"></div>
          <label
            style={{ color: "#6c7174", fontSize: "14px" }}
            className="ml-2"
          >
            Buy in grams
          </label>
        </div>
      </div>

      <div style={{ position: "relative" }} className="mb-4">
        <input
          className="bigCardInput"
          style={bigCardInput}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "18px",
            fontWeight: 600,
          }}
          className="calculateddata"
        >
          = {(Number(input) / 5457.55).toFixed(2)}gm
        </p>
        <p
          style={{
            position: "absolute",
            top: "6px",
            left: "10px",
            fontSize: "24px",
            fontWeight: 500,
          }}
        >
          ₹
        </p>
      </div>
      <ul className="d-flex justify-content-between">
        {selectData.map((data, i) => (
          <li
            key={i}
            style={{
              ...prizeBorder,
              background: data === input ? "#3E593C" : "transparent",
              color: data === input ? "#ffffff" : "#3E593C",
            }}
            onClick={() => setInput(data)}
          >
            <p>{data}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuyIn;
