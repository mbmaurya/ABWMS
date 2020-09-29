import React from 'react';
import {useDropzone} from 'react-dropzone';
import {Button} from 'react-bootstrap';
import {ReactComponent as UploadIcon} from '../../assets/images/transaction/upload.svg'
import { dropzone, dropzoneBtn, dropzoneHint, dropzonePara, dropzoneSpan } from '../../styles';

function FileDropzone(props) {
        const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

        const files = acceptedFiles.map(file => (
                <li key={file.path}>
                  {/* {file.path} - {file.size} bytes */}
                  {file.path}
                </li>
              ));

        return (
                <div>
                       <div {...getRootProps({className: 'dropzone'})} style={dropzone}>
                                <input {...getInputProps()} />
                                <p style={dropzonePara}>Drag and drop or <span style={dropzoneSpan}>browse</span></p>
                                <UploadIcon />
                                <div><Button style={dropzoneBtn}>Browser</Button></div>
                        </div>
                        <p style={dropzoneHint}>Only JPEG, PNG, GIF and PDF files with max size of 1 MB</p>
                        <div>
                                <ul>{files}</ul>
                        </div> 
                </div>
        )
}

export default FileDropzone
