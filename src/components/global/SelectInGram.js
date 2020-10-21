import React from "react";
import { bigCardInput } from "../../styles";
import currencyFormater from "./currencyFormater";

function SelectInGram(props) {
  const { input, setInput, goldRate,unit } = props;
  console.log(unit);
  return (
    <React.Fragment>
      <input
        className="bigCardInput"
        style={bigCardInput}
        type="number"
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
        = {currencyFormater.format((Number(input) * goldRate).toFixed(2))}
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
        g
      </p>
    </React.Fragment>
  );
}

export default SelectInGram;
