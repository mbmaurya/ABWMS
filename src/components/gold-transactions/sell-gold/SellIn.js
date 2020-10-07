import React, { useState } from "react";
import SellInOptions from "./SellInOptions";

function SellIn(props) {
  const { component, goldRate } = props;
  const [sell, setSell] = useState("sell in rupee");
  const [input, setInput] = useState(15000);
  const [gmInput, setGmInput] = useState(10);
  const selectData = [2500, 5000, 7500, 10000, 15000];
  const selectGmData = [0.1, 0.5, 1, 3, 5, 10];

  return (
    <div className="buyin" style={{ margin: "auto", width: "100%" }}>
      {component === "homepage" ? <h5 className="subtitle">Sell-in</h5> : null}
      <div className="d-flex mt-2">
        <div className="mr-4" style={{ position: "relative" }}>
          <input
            type="radio"
            value="sell in rupee"
            checked={sell === "sell in rupee"}
            onChange={(e) => setSell(e.target.value)}
          />
          <div className="circle"></div>
          <label
            style={{ color: "#6c7174", fontSize: "14px" }}
            className="ml-2"
          >
            Sell in rupee
          </label>
        </div>

        <div style={{ position: "relative" }}>
          <input
            type="radio"
            value="sell in grams"
            checked={sell === "sell in grams"}
            onChange={(e) => setSell(e.target.value)}
          />
          <div className="circle"></div>
          <label
            style={{ color: "#6c7174", fontSize: "14px" }}
            className="ml-2"
          >
            Sell in grams
          </label>
        </div>
      </div>

      <SellInOptions
        sell={sell}
        input={input}
        setInput={setInput}
        gmInput={gmInput}
        setGmInput={setGmInput}
        selectData={selectData}
        selectGmData={selectGmData}
        goldRate={goldRate}
      />
    </div>
  );
}

export default SellIn;
