import React from "react";
import { Row, Col, Table } from "react-bootstrap";

//Components
import PageTitle from "../pagetitle";

//Styles
import {
  btn,
  blackText,
  whiteText,
  mediumGrey,
  accentYellow,
} from "../../../styles";
const BlockTitleStyles = {
  fontFamily: "PFHandbookPro-medium, sans-serif",
  fontSize: "36px",
  lineHeight: "40px",
  color: `${blackText}`,
  letterSpacing: "1px",
};

const PassbookHeaderContainerStyles = {
  backgroundColor: `${whiteText}`,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
  borderRadius: "2px",
};

const PassbookHeaderStyles = {
  border: "none",
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${mediumGrey}`,
  borderBottom: `1px solid ${accentYellow}`,
};

const PassbookDataContainerStyles = {
  backgroundColor: `${whiteText}`,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
  borderRadius: "2px",
};

const PassbookDataStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${blackText}`,
  border: "none",
};

const PassbookMobileContainerStyles = {
  width: "100%",
  padding: "15px",
  backgroundColor: `${whiteText}`,
  marginTop: "15px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
  borderRadius: "2px",
};

const PassbookMobileDataStyles = {
  display: "inline-block",
  width: "50%",
  marginBottom: "15px",
};

const PassbookMobileDataTitleStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${mediumGrey}`,
};

const PassbookMobileDataValueStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${blackText}`,
};

const passbookData = [
  {
    date: "25-Aug-2020",
    orderType: "BUY",
    price: "5350",
    grams: "4.5327",
    amount: "25,000",
    transaction: "Credit Card",
  },
  {
    date: "25-Aug-2020",
    orderType: "BUY",
    price: "5350",
    grams: "4.5327",
    amount: "25,000",
    transaction: "Credit Card",
  },
  {
    date: "25-Aug-2020",
    orderType: "BUY",
    price: "5350",
    grams: "4.5327",
    amount: "25,000",
    transaction: "Credit Card",
  },
  {
    date: "25-Aug-2020",
    orderType: "BUY",
    price: "5350",
    grams: "4.5327",
    amount: "25,000",
    transaction: "Credit Card",
  },
  {
    date: "25-Aug-2020",
    orderType: "BUY",
    price: "5350",
    grams: "4.5327",
    amount: "25,000",
    transaction: "Credit Card",
  },
  {
    date: "25-Aug-2020",
    orderType: "BUY",
    price: "5350",
    grams: "4.5327",
    amount: "25,000",
    transaction: "Credit Card",
  },
  {
    date: "25-Aug-2020",
    orderType: "BUY",
    price: "5350",
    grams: "4.5327",
    amount: "25,000",
    transaction: "Credit Card",
  },
  {
    date: "25-Aug-2020",
    orderType: "BUY",
    price: "5350",
    grams: "4.5327",
    amount: "25,000",
    transaction: "Credit Card",
  },
  {
    date: "25-Aug-2020",
    orderType: "BUY",
    price: "5350",
    grams: "4.5327",
    amount: "25,000",
    transaction: "Credit Card",
  },
];

const printPassbookData = passbookData.map((data) => (
  <tr style={PassbookDataContainerStyles}>
    <td style={PassbookDataStyles}>{data.date}</td>
    <td style={PassbookDataStyles}>{data.orderType}</td>
    <td style={PassbookDataStyles}>{data.price}</td>
    <td style={PassbookDataStyles}>{data.grams}</td>
    <td style={PassbookDataStyles}>{data.amount}</td>
    <td style={PassbookDataStyles}>{data.transaction}</td>
  </tr>
));

const printPassbookDataMobile = passbookData.map((data) => (
  <li style={PassbookMobileContainerStyles}>
    <div style={PassbookMobileDataStyles}>
      <p style={PassbookMobileDataTitleStyles}>Date</p>
      <p style={PassbookMobileDataValueStyles}>{data.date}</p>
    </div>
    <div style={PassbookMobileDataStyles}>
      <p style={PassbookMobileDataTitleStyles}>Order Type</p>
      <p style={PassbookMobileDataValueStyles}>{data.orderType}</p>
    </div>
    <div style={PassbookMobileDataStyles}>
      <p style={PassbookMobileDataTitleStyles}>Price(&#x20B9;)</p>
      <p style={PassbookMobileDataValueStyles}>{data.price}</p>
    </div>
    <div style={PassbookMobileDataStyles}>
      <p style={PassbookMobileDataTitleStyles}>Grams</p>
      <p style={PassbookMobileDataValueStyles}>{data.grams}</p>
    </div>
    <div style={PassbookMobileDataStyles}>
      <p style={PassbookMobileDataTitleStyles}>Amount(&#x20B9;)</p>
      <p style={PassbookMobileDataValueStyles}>{data.amount}</p>
    </div>
    <div style={PassbookMobileDataStyles}>
      <p style={PassbookMobileDataTitleStyles}>Transaction</p>
      <p style={PassbookMobileDataValueStyles}>{data.transaction}</p>
    </div>
  </li>
));

function MyPassbook() {
  return (
    <div className="my-passbook dashboard-element">
      <PageTitle
        title="My Passbook"
        clickFunction={() => console.log("Clicked")}
      />
      <Row>
        <Col>
          <Table>
            <thead>
              <tr style={PassbookHeaderContainerStyles}>
                <th style={PassbookHeaderStyles}>Date</th>
                <th style={PassbookHeaderStyles}>Order Type</th>
                <th style={PassbookHeaderStyles}>Price(&#x20B9;)</th>
                <th style={PassbookHeaderStyles}>Grams</th>
                <th style={PassbookHeaderStyles}>Amount(&#x20B9;)</th>
                <th style={PassbookHeaderStyles}>Transaction</th>
              </tr>
              {printPassbookData}
            </thead>
          </Table>
          <div className="passbook-mobile">
            <ul>{printPassbookDataMobile}</ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MyPassbook;
