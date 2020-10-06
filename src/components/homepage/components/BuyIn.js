import React, { useState } from "react";
import { bigCardInput, goldRatePara, prizeBorder } from "../../../styles/index";
import BuyInOptions from "./BuyInOptions";

function BuyIn(props) {
  const {component, goldRate} = props
  const [buy, setBuy] = useState("buy in rupee");
  const [input, setInput] = useState(15000);
  const [gmInput, setGmInput] = useState(10);
  const selectData = [2500, 5000, 7500, 10000, 15000];
  const selectGmData = [0.1, 0.5, 1, 3, 5, 10]; 

  return (
    <div className="buyin" style={{ margin: "auto", width: "100%" }}>
      {
        (component === "homepage") ? <h5 className="subtitle">Buy-in</h5> : null
      }
      <div className="d-flex mt-2">
        <div className="mr-4" style={{ position: "relative" }}>
          <input
            type="radio"
            value="buy in rupee"
            checked={buy === "buy in rupee"}
            onChange={(e) => setBuy(e.target.value)}
          />
          <div className="circle"></div>
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
          <div className="circle"></div>
          <label
            style={{ color: "#6c7174", fontSize: "14px" }}
            className="ml-2"
          >
            Buy in grams
          </label>
        </div>
      </div>

      <BuyInOptions buy={buy} input ={input} setInput={setInput} gmInput={gmInput} setGmInput={setGmInput} selectData={selectData} selectGmData={selectGmData} goldRate={goldRate} />
      
    </div>
  );
}

export default BuyIn;
