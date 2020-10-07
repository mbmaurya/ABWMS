import React from "react";
import { bigCardInput, prizeBorder } from "../../../styles";
import SellInGm from "./SellInGm";
import SellInRupee from "./SellInRupee";

function SellInOptions(props) {
  const {
    sell,
    input,
    setInput,
    gmInput,
    setGmInput,
    goldRate,
    selectData,
    selectGmData,
  } = props;
  return (
    <div>
      <div style={{ position: "relative" }} className="mb-4">
        {sell === "sell in rupee" ? (
          <SellInRupee input={input} setInput={setInput} goldRate={goldRate} />
        ) : (
          <SellInGm input={gmInput} setInput={setGmInput} goldRate={goldRate} />
        )}
      </div>
      <ul className="d-flex justify-content-between">
        {sell === "sell in rupee"
          ? selectData.map((data, i) => (
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
            ))
          : selectGmData.map((data, i) => (
              <li
                key={i}
                style={{
                  ...prizeBorder,
                  background: data === gmInput ? "#3E593C" : "transparent",
                  color: data === gmInput ? "#ffffff" : "#3E593C",
                }}
                onClick={() => setGmInput(data)}
              >
                <p>{data}gm</p>
              </li>
            ))}
      </ul>
    </div>
  );
}

export default SellInOptions;
