import React from 'react'
import FileDropzone from './FileDropzone';
import { useViewport } from '../../styles';


function NotVerified({isVerified, currentStep}) {
        const {width} = useViewport();
        const breakpoint = 767;
        if(currentStep !== 3) {
                return null
        }
        return (
                !isVerified ? (
                        <div style={(width < breakpoint) ? null : {paddingLeft: 65, paddingRight: 65}}>
                        <h4 style={{fontSize: 21}}>Your account could not be verified through the digital process.</h4>
                        <p style={{fontSize: 16, marginBottom: 33}}>But please do not worry, we are here to help. Please upload the cheque copy and we will verify it for you.</p>
                        <FileDropzone />
                </div>
                ) : null
        )
}

export default NotVerified
