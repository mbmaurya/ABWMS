
import React, {useState} from 'react';
import { Table } from 'react-bootstrap';
import {table, tdRight, tfoot, tfootright} from '../../styles'
import currencyFormater from "../global/currencyFormater";


function Summary ({input, transaction, goldRate, component}) {

        const GST = 3; // in percent
        const convenienceFee = 145.64; //in rupees 
        const calculatedGST = ((Number(input) * GST) / 100).toFixed(2);
        const calculatedGSTGm = (((Number(input) * goldRate) * 3)/100).toFixed(2);
        const totalAmount = (Number(input) + convenienceFee + Number(calculatedGST)).toFixed(2);
        const totalAmountGm = ((Number(input) * goldRate) + convenienceFee + Number(calculatedGSTGm)).toFixed(2);
        if (component === "homepage") return null;
        return (
                <div>
                        <Table borderless style={table}>
                                <tbody>
                                        <tr>
                                                <td>Gold Amount</td>
        <td style={tdRight}>
                {transaction === "buy in rupee" || transaction === "sell in rupee" ?
                        currencyFormater.format(input):
                        currencyFormater.format((Number(input) * goldRate).toFixed(2))
                }
                
        </td>
                                        </tr>
                                        <tr>
                                                <td>GST @3%</td>
        <td style={tdRight}>{transaction === "buy in rupee" || transaction === "sell in rupee" ?
                        currencyFormater.format(calculatedGST):
                        currencyFormater.format(calculatedGSTGm)
                }</td>
                                        </tr>
                                        <tr>
                                                <td>Convenience Fee </td>
        <td style={tdRight}>{convenienceFee}</td>
                                        </tr>
                                        <tr><td height="10"></td></tr>
                                </tbody>
                                <tfoot style={tfoot}>
                                        <tr>
                                                <td>Total Amount</td>
                                                <td style={tfootright}>
                                                {transaction === "buy in rupee" || transaction === "sell in rupee" ?
                        currencyFormater.format(totalAmount):
                        currencyFormater.format(totalAmountGm)
                }
                                                </td>
                                        </tr>
                                </tfoot>
                        </Table> 
                </div>
        )
}


export default Summary;
