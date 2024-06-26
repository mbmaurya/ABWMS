import React, { useState } from "react";
import { bigCardInput, goldRatePara, prizeBorder } from "../../styles/index";
import Summary from "../gold-transactions/Summary";
import CostSelectorOptions from "./CostSelectorOptions";

function CostSelector(props) {
  const { component, goldRate } = props;
  const [transaction, setTransaction] = useState(`${props.type} in rupee`);
  const [input, setInput] = useState(15000);
  const [gmInput, setGmInput] = useState(15);
  const selectData = [2500, 5000, 7500, 10000, 15000];
  const selectGmData = [0.5, 1, 3, 5, 10, 15];

  return (
    <div className="buyin" style={{ margin: "auto", width: "100%" }}>
      {console.log("From CostSelector")}
      {component === "homepage" ? <h5 className="subtitle">Buy-in</h5> : null}
      <div className="d-flex mt-2">
        <div
          className="mr-4 d-flex align-items-center"
          style={{ position: "relative" }}
        >
          <input
            type="radio"
            value={`${props.type} in rupee`}
            checked={transaction === `${props.type} in rupee`}
            onChange={(e) => setTransaction(e.target.value)}
          />
          <div className="circle"></div>
          <label
            style={{
              color: "#6c7174",
              fontSize: "14px",
              verticalAlign: "middle",
            }}
            className="ml-2"
          >
            {props.type} in rupee
          </label>
        </div>

        <div style={{ position: "relative" }}>
          <input
            type="radio"
            value={`${props.type} in grams`}
            checked={transaction === `${props.type} in grams`}
            onChange={(e) => setTransaction(e.target.value)}
          />
          <div className="circle"></div>
          <label
            style={{
              color: "#6c7174",
              fontSize: "14px",
              verticalAlign: "middle",
            }}
            className="ml-2"
          >
            {props.type} in grams
          </label>
        </div>
      </div>

      <CostSelectorOptions
        component={component}
        transaction={transaction}
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

export default CostSelector;
