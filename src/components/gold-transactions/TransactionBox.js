import React, { useState } from "react";
import { transactionBox } from "../../styles";
import BuyIn from "../homepage/components/BuyIn";
import Buy from "./Buy";
import GoldRate from "./GoldRate";
import Summary from "./Summary";
import SellIn from "./sell-gold/SellIn";
import DeliverIn from "./delivery/DeliverIn";
import TransferIn from "./transfer/TransferIn";

function TransactionBox(props) {
  const { noInput, type } = props;
  const [goldRate, setGoldRate] = useState(5375.38);

  const checkType = (type) => {
    switch (type) {
      case "buy":
        return <BuyIn />;
        break;
      case "sell":
        return <SellIn />;
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
      {Type() ? <hr /> : null}
      {Type() ? <Summary /> : ""}
    </div>
  );
}

export default TransactionBox;
