import React, {useState} from "react";
import { bigCardInput } from "../../styles";
import currencyFormater from "./currencyFormater";

function SelectInRupee(props) {
  const { input, setInput, goldRate } = props;
  // const [inputValue, setInputValue] = useState(input);
  // const newInputValue = setInputValue(new Intl.NumberFormat("en-IN").format(input))
  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
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
        = {(Number(input) / goldRate).toFixed(2)}gm
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
    </React.Fragment>
  );
}

export default SelectInRupee;
