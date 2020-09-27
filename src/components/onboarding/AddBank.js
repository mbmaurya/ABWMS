import React, {useState} from 'react';
import NotVerified from './NotVerified';
import { bankDetail, addBankLink } from '../../styles';
import {ReactComponent as BankDetailsIcon} from '../../assets/images/transaction/bank-account-details.svg';
import Title from './Title';
import { Col, Row } from 'react-bootstrap';
import BankDetailsInputs from './BankDetailsInputs';

function AddBank({currentStep}) {
        const [isVerified, setIsVerified] = useState(true);
        const [addBank, setAddBank] = useState(false);
        if(currentStep !== 3) {
                return null
        }
        return (
                <div>
                        {
                                !isVerified ?
                                <NotVerified /> : 
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
                                                <p style={addBankLink} onClick={() => setAddBank(!addBank)}>Add Bank</p> : 
                                                <div>
                                                        <Title title = "Add Bank" />
                                                        <BankDetailsInputs />
                                                </div>
                                        }
                                </div>
                        }
                </div>
        )
}

export default AddBank
