import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import SelectMenu from '../global/SelectMenu';
import FormGroup from './FormGroup';

function BankDetailsInputs() {
        const selectOptions = ['Savings Account', "Current Account"];
        return (
                <Row>
                        <Col md={4}>
                                <FormGroup controlId="IFSCCode" label="IFSC Code" inputType="text" placeholder="Enter IFSC Code" />
                        </Col>
                        <Col md={4}>
                                <FormGroup controlId="bankName" label="Bank Name" inputType="text" disabled />
                        </Col>
                        <Col md={4}>
                                <FormGroup controlId="branchName" label="Branch Name" inputType="text" disabled />
                        </Col>
                        <Col md={4}>
                                <FormGroup controlId="bankAccountNumber" label="Bank Account Number*" inputType="number" placeholder="xxxxxxxxxxxxxxx" />
                        </Col>
                        <Col md={4}>
                                <FormGroup controlId="confirmBankAccountNumber" label="Confirm Bank Account Number*" inputType="number" placeholder="xxxxxxxxxxxxxxx" />
                        </Col>
                        <Col md={4}>
                                {/* <FormGroup controlId="accountType" label="Account Type" inputType="select" selectOptions={selectOptions} /> */}
                                <SelectMenu />
                        </Col>
                </Row>
        )
}

export default BankDetailsInputs
