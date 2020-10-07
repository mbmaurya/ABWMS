import React from "react";
import { ReactComponent as EmailIcon } from "../../assets/images/transaction/email-invoice.svg";
import { greyText } from "../../styles";

const EmailInvoiceStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${greyText}`,
  textDecoration: "none",
  verticalAlign: "middle",
};

function EmailInvoice() {
  return (
    <a href="" style={EmailInvoiceStyles}>
      <EmailIcon />
      <span
        style={{
          display: "inline-block",
          paddingLeft: "5px",
          verticalAlign: "middle",
        }}
      >
        Email Invoice
      </span>
    </a>
  );
}

export default EmailInvoice;
