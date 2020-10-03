import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import FormGroup from '../../onboarding/FormGroup';

function Upi() {
        return (
                <div>
                       <Form>
                                <Row>
                                        <Col md={12}>
                                                <FormGroup controlId="upiId" label="UPI ID" inputType="email" placeholder="Enter username" />
                                        </Col>
                                </Row>
                        </Form>  
                </div>
        )
}

export default Upi
