import React from 'react';
import { bigCardInput } from "../../../styles";


function BuyInRupee(props) {
        const {input, setInput, goldRate} = props;
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
        )
}

export default BuyInRupee
