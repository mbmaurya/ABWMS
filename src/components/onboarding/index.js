import React, {useState} from 'react';
import { Container, Form } from 'react-bootstrap';
import { formContainer, formBox, formBoxMobile, useViewport } from '../../styles';
import AddBank from './AddBank';
import BankDetails from './BankDetails';
import NotVerified from './NotVerified';
import VerifyKyc from './VerifyKyc';
import AddressDetails from './AddressDetails';
import Steps from './Steps';
import BtnGroup from '../global/BtnGroup';

function Onboarding({currentStepValue, Verified}) {
        const [currentStep, setCurrentStep] = useState(currentStepValue); // set it to 1
        const [isVerified, setIsVerified] = useState(Verified);

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
                        <Steps currentStep={currentStep} isVerified={isVerified}/>
                        <Form style={(width < breakpoint) ? formBoxMobile : formBox}>
                                <VerifyKyc currentStep={currentStep} />
                                <BankDetails currentStep={currentStep} />
                                <NotVerified currentStep={currentStep} isVerified={isVerified} />
                                <AddBank currentStep={currentStep} isVerified={isVerified} />
                                <AddressDetails currentStep={currentStep} />
                        </Form>
                        <BtnGroup prev={prev} next={next} />
                </Container>
        )
}

export default Onboarding;
