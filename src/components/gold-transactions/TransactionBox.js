import React, { useState } from "react";
import { transactionBox } from "../../styles";
import BuyIn from "../homepage/components/BuyIn";
import Buy from "./Buy";
import GoldRate from "./GoldRate";
import Summary from "./Summary";
import SellIn from "./sell-gold/SellIn";

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
      default:
        return null;
        break;
    }
  };

  return (
    <div
      className="transaction-box"
      style={!noInput ? transactionBox : { ...transactionBox, marginTop: 12 }}
    >
      <GoldRate goldRate={goldRate} />
      <div className="buyInDiv" style={{ marginTop: 40, marginBottom: 40 }}>
        {checkType(type)}
      </div>
      {!noInput ? <hr /> : null}
      <Summary />
    </div>
  );
}

export default TransactionBox;
