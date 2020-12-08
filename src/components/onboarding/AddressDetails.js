import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {ReactComponent as AddressIcon} from '../../assets/images/transaction/address.svg';
import Title from './Title';
import FormGroup from './FormGroup';
import FileDropzone from './FileDropzone';
import SelectMenu from '../global/SelectMenu';

function BankDetails({currentStep}) {
        const addressProofs = ["Light Bill", "Tax Slip", "Adhar Card"]
        if(currentStep !== 4) {
                return null
        }
        return (
                <div>
                        <Title icon={<AddressIcon />} title="Address Details" />
                        <Row>
                                <Col md={4}>
                                        <FormGroup controlId="pinCode" label="Pin Code*" inputType="number" placeholder="Enter Your Pin code" />
                                </Col>
                                <Col md={4}>
                                        <FormGroup controlId="city" label="City" inputType="text" disabled />
                                </Col>
                                <Col md={4}>
                                        <FormGroup controlId="state" label="State" inputType="text" disabled />
                                </Col>
                                <Col md={4}>
                                        <FormGroup controlId="country" label="Country" inputType="text" disabled />
                                </Col>
                                <Col md={4}>
                                        <FormGroup controlId="address" label="Address*" inputType="text" placeholder="Please Enter Your Address" />
                                </Col>
                        </Row>
                        <hr style={{borderTop: '1px solid #cdcece', margin: '41px 0 31px 0'}} />
                        <Row>
                                <Col md={4}>
                                        {/* <FormGroup controlId="addressProof" label="Address Proof*" inputType="select" selectOptions={addressProofs} /> */}
                                        <SelectMenu options={addressProofs} optionType="Address Proof*" />
                                </Col>
                                <Col md={8}></Col>
                                <Col md={8} style={{marginTop: "20px"}}>
                                        <FileDropzone />
                                </Col>
                        </Row>
                </div>
        )
}

export default BankDetails
