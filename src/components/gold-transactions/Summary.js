import React from 'react';
import { Table } from 'react-bootstrap';
import {table, tdRight, tfoot, tfootright} from '../../styles'


function Summary() {
        return (
                <div>
                        <Table borderless style={table}>
                                <tbody>
                                        <tr>
                                                <td>Gold Amount</td>
                                                <td style={tdRight}>₹4,708.72</td>
                                        </tr>
                                        <tr>
                                                <td>GST @3%</td>
                                                <td style={tdRight}>145.64</td>
                                        </tr>
                                        <tr>
                                                <td>Convenience Fee </td>
                                                <td style={tdRight}>145.64</td>
                                        </tr>
                                </tbody>
                                <tfoot style={tfoot}>
                                        <tr>
                                                <td>Total Amount</td>
                                                <td style={tfootright}>₹5,000.00</td>
                                        </tr>
                                </tfoot>
                        </Table> 
                </div>
        )
}

export default Summary
