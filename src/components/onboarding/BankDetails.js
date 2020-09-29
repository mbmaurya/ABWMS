import React from 'react';
import {ReactComponent as BankDetailsIcon} from '../../assets/images/transaction/bank-account-details.svg';
import Title from './Title';
import BankDetailsInputs from './BankDetailsInputs';

function BankDetails({currentStep}) {
        if(currentStep !== 2) {
                return null
        }
        return (
                <div>
                        <Title icon={<BankDetailsIcon />} title="Bank Account Details" />
                       <BankDetailsInputs />
                </div>
        )
}

export default BankDetails
