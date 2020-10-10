import React, { useState } from "react";
import { transactionBox } from "../../styles";
import BuyIn from "../homepage/components/BuyIn";
import Buy from "./Buy";
import GoldRate from "./GoldRate";
import Summary from "./Summary";
import SellIn from "./sell-gold/SellIn";
import DeliverIn from "./delivery/DeliverIn";

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
      default:
        return null;
        break;
    }
  };

  return (
    <div
      className="transaction-box"
      style={
        type != "deliver"
          ? transactionBox
          : { ...transactionBox, height: "auto", minHeight: "auto" }
      }
    >
      {type != "deliver" ? <GoldRate goldRate={goldRate} /> : ""}
      <div
        className="buyInDiv"
        style={
          type != "deliver"
            ? { marginTop: 40, marginBottom: 40 }
            : { mergin: 0 }
        }
      >
        {checkType(type)}
      </div>
      {type != "deliver" ? <hr /> : null}
      {type != "deliver" ? <Summary /> : ""}
    </div>
  );
}

export default TransactionBox;
