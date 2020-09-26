import React from 'react'
import FileDropzone from './FileDropzone'

function NotVerified() {
        return (
                <div style={{paddingLeft: 65, paddingRight: 65}}>
                        <h4 style={{fontSize: 21}}>Your account could not be verified through the digital process.</h4>
                        <p style={{fontSize: 16, marginBottom: 33}}>But please do not worry, we are here to help. Please upload the cheque copy and we will verify it for you.</p>
                        <FileDropzone />
                </div>
        )
}

export default NotVerified
