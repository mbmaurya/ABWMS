import React, {useState} from 'react';
import { bankDetail, addBankLink } from '../../styles';
import {ReactComponent as BankDetailsIcon} from '../../assets/images/transaction/bank-account-details.svg';
import Title from './Title';
import { Col, Row } from 'react-bootstrap';
import BankDetailsInputs from './BankDetailsInputs';
import AddBankIcon from "../../assets/images/transaction/add-bank.png";

function AddBank({currentStep, isVerified}) {
        const [addBank, setAddBank] = useState(false);
        if(currentStep !== 3) {
                return null
        }
        return (
                isVerified ? 
                (<div>
                        {
                                <div>
                                        <Title icon={<BankDetailsIcon />} title="Bank Account Details" />
                                        <Row>
                                                <Col md={4}>
                                                        <p style={bankDetail}>HDFC Bank Ltd. - 123456789</p>
                                                </Col>
                                        </Row>
                                        <hr style={{borderTop: '1px solid #cdcece', margin: '41px 0 31px 0'}} />
                                        {
                                                !addBank ? 
                                                <p style={addBankLink} onClick={() => setAddBank(!addBank)}><img src={AddBankIcon} style={{ verticalAlign: "top"}} />Add Bank</p> : 
                                                <div className="add-new-bank">
                                                        <Row>
                                                                <Col>
                                                                        <Title title = "Add Bank" />
                                                                </Col>
                                                        </Row>
                                                        <BankDetailsInputs />
                                                </div>
                                        }
                                </div>
                        }
                </div>) : null
        )
}

export default AddBank
