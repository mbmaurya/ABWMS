import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { table, tdRight, tfoot, tfootright } from "../../styles";

function Summary({ goldRate }) {
  const GST = 3; // in percent
  const convenienceFee = 145.64; //in rupees
  const goldAmount = goldRate == null ? 15000 : goldRate;
  const calculatedGST = ((goldAmount * GST) / 100).toFixed(2);
  const totalAmount = (
    Number(goldAmount) +
    convenienceFee +
    Number(calculatedGST)
  ).toFixed(2);
  console.log(`Gold Rate: ${goldAmount}`);
  return (
    <div>
      <Table borderless style={table}>
        <tbody>
          <tr>
            <td>Gold Amount</td>
            <td style={tdRight}>{goldAmount}</td>
          </tr>
          <tr>
            <td>GST @3%</td>
            <td style={tdRight}>{calculatedGST}</td>
          </tr>
          <tr>
            <td>Convenience Fee </td>
            <td style={tdRight}>{convenienceFee}</td>
          </tr>
        </tbody>
        <hr style={{ border: "none", marginTop: 0.5 }} />
        <tfoot style={tfoot}>
          <tr>
            <td>Total Amount</td>
            <td style={tfootright}>{totalAmount}</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

// Summary.defaultProps = {
//         goldRate: 15000
// }

export default Summary;
