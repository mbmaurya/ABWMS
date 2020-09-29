import React, {useState} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { formContainer, box, formBox, btn, clearBtn, buttonGroup } from '../../styles';
import AddBank from './AddBank';
import BankDetails from './BankDetails';
import NotVerified from './NotVerified';
import VerifyKyc from './VerifyKyc';
import AddressDetails from './AddressDetails';
import Steps from './Steps';

function Onboarding() {
        const [currentStep, setCurrentStep] = useState(1);
        const [isVerified, setIsVerified] = useState(false);

        const prev = () => {
                currentStep <=1 ?setCurrentStep(1) : setCurrentStep(currentStep - 1);
        }

        const next = () => {
                currentStep >=3 ? setCurrentStep(4) : setCurrentStep(currentStep + 1);
        }

        return (
                <Container style={formContainer}>
                        <Steps currentStep={currentStep} isVerified={isVerified}/>
                        <Form style={(width < breakpoint) ? formBoxMobile : formBox}>
                                <VerifyKyc currentStep={currentStep} />
                                <BankDetails currentStep={currentStep} />
                                <NotVerified currentStep={currentStep} isVerified={isVerified} />
                                <AddBank currentStep={currentStep} isVerified={isVerified} />
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
