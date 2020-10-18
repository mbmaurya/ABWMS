
import React, {useState} from "react";
import { bigCardInput, prizeBorder, transactionBox } from "../../styles";
import SelectInGram from "./SelectInGram";
import SelectInRupee from "./SelectInRupee";
import currencyFormater from "../global/currencyFormater";
import Summary from "./Summary";
function CostSelectorOptions(props) {
  const {
    transaction,
    input,
    setInput,
    gmInput,
    setGmInput,
    goldRate,
    selectData,
    selectGmData,
    component,
  } = props;
  
  const [goldAmount, setGoldAmount] = useState(null)
  const [unit, setUnit] = useState("rupee");

  const checkComponent = (component) => {
    switch (component) {
      case "homepage":
        return null
        break;
      default:
        return (
        <div>
          <hr />
          <Summary input={input} transaction={transaction} goldRate={goldRate} transaction={transaction} />
          </div>)
        break;
    }
  }
  
  return (
    <div>
      <div style={{ position: "relative" }} className="mb-4">
        {transaction === "Buy in rupee" || transaction === "Sell in rupee" ? (
          <SelectInRupee
            input={input}
            setInput={setInput}
            goldRate={goldRate}
          />
        ) : (
          <SelectInGram
            input={gmInput}
            setInput={setGmInput}
            goldRate={goldRate}
          />
        )}
      </div>
      <ul className="d-flex justify-content-between">
        {transaction === "Buy in rupee" || transaction === "Sell in rupee"
          ? selectData.map((data, i) => (
              <li
                key={i}
                style={{
                  ...prizeBorder,
                  background: data === input ? "#3E593C" : "transparent",
                  color: data === input ? "#ffffff" : "#3E593C",
                }}
                onClick={() => {
                  setInput(data);
                  setGoldAmount(data);
                }}
              >
                <p>{currencyFormater.format(data)}</p>
                {console.log(goldRate)}
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
                onClick={() => {
                  setGmInput(data);
                  setGoldAmount(data * goldRate);
                }}
              >
                <p>{data}gm</p>
              </li>
            ))}
      </ul>
                
      {/* {checkComponent(component)}  */}
      <hr />
      {transaction === "buy in rupee" || transaction === "sell in rupee" ? (
          <Summary input={input} component={component} transaction={transaction} goldRate={goldRate} transaction={transaction} />
        ) : (
          <Summary input={gmInput} component={component} transaction={transaction} goldRate={goldRate} transaction={transaction} />
        )}
      
    </div>
  );
}

export default CostSelectorOptions;
