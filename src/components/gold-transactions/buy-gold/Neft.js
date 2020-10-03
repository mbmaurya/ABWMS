import React, {useState} from 'react';
import {Table} from 'react-bootstrap';
import {table} from '../../../styles';

function Neft() {
        const [buy, setBuy] = useState("NEFT");
        return (
          <div>
                <p style={{fontSize: 18}}>Select Type</p>
            <div className="d-flex mt-2">
              <div className="mr-4" style={{ position: "relative" }}>
                <input
                  type="radio"
                  value="NEFT"
                  checked={buy === "NEFT"}
                  onChange={(e) => setBuy(e.target.value)}
                />
                <div className="circle"></div>
                <label
                  style={{ color: "#6c7174", fontSize: "14px" }}
                  className="ml-2"
                >
                  NEFT
                </label>
              </div>

              <div style={{ position: "relative" }}>
                <input
                  type="radio"
                  value="RTGS"
                  checked={buy === "RTGS"}
                  onChange={(e) => setBuy(e.target.value)}
                />
                <div className="circle"></div>
                <label
                  style={{ color: "#6c7174", fontSize: "14px" }}
                  className="ml-2"
                >
                  RTGS
                </label>
              </div>
            </div>

                <p className="mt-4" style={{fontSize: 18}}>Beneficiary account details:</p>
                <Table borderless striped style={{...table, marginTop: 12}}>
                        <tbody>
                                <tr></tr>
                                <tr>
                                        <td>Beneficiary Name</td>
                                        <td style={{color: '#000000'}}>MMTC PAMP</td>
                                </tr>
                                <tr>
                                        <td>Bank Name</td>
                                        <td style={{color: '#000000'}}>HDFC Bank Ltd.</td>
                                </tr>
                                <tr>
                                        <td>Branch Name</td>
                                        <td style={{color: '#000000'}}>Ahura Centre</td>
                                </tr>
                                <tr>
                                        <td>Account Type</td>
                                        <td style={{color: '#000000'}}>Current Account</td>
                                </tr>
                                <tr>
                                        <td>Account No.</td>
                                        <td style={{color: '#000000'}}>123654789</td>
                                </tr>
                                <tr>
                                        <td>IFSC Code</td>
                                        <td style={{color: '#000000'}}>HDFC00001</td>
                                </tr>
                        </tbody>
                </Table>

          </div>
        );
}

export default Neft
