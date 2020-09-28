import React, {useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { formContainer, formBox, formBoxMobile, btn, clearBtn, buttonGroup, useViewport } from '../../styles';
import AddBank from './AddBank';
import BankDetails from './BankDetails';
import VerifyKyc from './VerifyKyc';
import AddressDetails from './AddressDetails';
import Steps from './Steps';

function Onboarding() {
        const [currentStep, setCurrentStep] = useState(1);

        const {width} = useViewport();
        const breakpoint = 767;

        const prev = () => {
                currentStep <=1 ?setCurrentStep(1) : setCurrentStep(currentStep - 1);
        }

        const next = () => {
                currentStep >=3 ? setCurrentStep(4) : setCurrentStep(currentStep + 1);
        }

        return (
                <Container style={formContainer}>
                        <Steps currentStep={currentStep} />
                        <Form style={(width < breakpoint) ? formBoxMobile : formBox}>
                                <VerifyKyc currentStep={currentStep} />
                                <BankDetails currentStep={currentStep} />
                                <AddBank currentStep={currentStep} />
                                <AddressDetails currentStep={currentStep} />
                        </Form>
                        <div className="button-group" style={buttonGroup}>
                                <Button style={clearBtn} onClick={() => prev()}>Back</Button>
                                <Button style={btn} onClick={() => next()}>Proceed</Button>
                        </div>
                </Container>
        )
}

export default Onboarding;
