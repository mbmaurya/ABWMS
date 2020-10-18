import React, { useState } from "react";
import { transactionBox } from "../../styles";
import GoldRate from "./GoldRate";
import DeliverIn from "./delivery/DeliverIn";
import TransferIn from "./transfer/TransferIn";
import CostSelector from "../global/CostSelector";
import Summary from "./Summary";

function TransactionBox(props) {
  const { noInput, type } = props;
  const [goldRate, setGoldRate] = useState(5375.38);

  const checkType = (type) => {
    switch (type) {
      case "buy":
        return <CostSelector type="Buy" goldRate={goldRate} />;
        break;
      case "sell":
        return <CostSelector type="Sell" goldRate={goldRate} />;
        break;
      case "deliver":
        return <DeliverIn />;
      case "transfer":
        return <TransferIn />;
      default:
        return null;
        break;
    }
  };

  const display = null;

  const Type = () => {
    if (type == "deliver" || type == "transfer") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div
      className="transaction-box"
      style={
        Type()
          ? transactionBox
          : { ...transactionBox, height: "auto", minHeight: "auto" }
      }
    >
      {Type() ? <GoldRate goldRate={goldRate} /> : ""}
      <div
        className="buyInDiv"
        style={Type() ? { marginTop: 40, marginBottom: 40 } : { mergin: 0 }}
      >
        {checkType(type)}
      </div>

      {checkType(type) ? "" : <Summary goldRate={goldRate} />}
    </div>
  );
}

export default TransactionBox;
