import React from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "react-bootstrap";
import { ReactComponent as UploadIcon } from "../../assets/images/transaction/upload.svg";
import {
  dropzone,
  dropzoneMobile,
  dropzoneBtn,
  dropzoneHint,
  dropzonePara,
  dropzoneSpan,
  useViewport,
  uploadIcon,
  dropzoneParaMobile,
} from "../../styles";

function FileDropzone(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const { width } = useViewport();
  const breakpoint = 767;

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {/* {file.path} - {file.size} bytes */}
      {file.path}
    </li>
  ));

  return (
    <div>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={width < breakpoint ? dropzoneMobile : dropzone}
      >
        <input {...getInputProps()} />
        <p style={width < breakpoint ? dropzoneParaMobile : dropzonePara}>
          Drag and drop or <span style={dropzoneSpan}>browse</span>
        </p>
        <UploadIcon style={width < breakpoint ? uploadIcon : null} />
        <div>
          <Button style={dropzoneBtn}>Browse</Button>
        </div>
      </div>
      <p style={dropzoneHint}>
        Only JPEG, PNG, GIF and PDF files with max size of 1 MB
      </p>
      <div>
        <ul>{files}</ul>
      </div>
    </div>
  );
}

export default FileDropzone;
