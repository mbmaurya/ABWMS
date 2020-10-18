import React from "react";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as PersonalDetailsIcon } from "../../../assets/images/profile/personal-details.svg";
import { ReactComponent as EditDetailsIcon } from "../../../assets/images/profile/edit-icon.svg";
import { ReactComponent as BankDetailsIcon } from "../../../assets/images/profile/bank-account-details.svg";
import { ReactComponent as AddressDetailsIcon } from "../../../assets/images/profile/address.svg";
import AddBankIcon from "../../../assets/images/transaction/add-bank.png";

import UserName from "../username";
import {
  accentYellow,
  whiteText,
  blackText,
  mediumGrey,
  greenText,
  redText,
  addBankLink,
} from "../../../styles";
import PageTitle from "../pagetitle";

//Styles
const MyProfileContainerStyles = {
  width: "100%",
  backgroundColor: `${whiteText}`,
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 1px 0px",
  borderRadius: "2px",
  marginTop: "30px",
};

const MyProfileHeaderStyles = {
  padding: "6px 30px",
  borderBottom: `1px solid ${accentYellow}`,
};

const MyProfileHeadingStyles = {
  display: "inline-block",
  verticalAlign: "middle",
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "24px",
  color: `${greenText}`,
  letterSpacing: "2px",
  textTransform: "uppercase",
};

const MyProfileBodyStyles = {
  padding: "15px 15px 25px 90px",
};

const PersonalDetailsListStyles = {
  display: "inline-block",
  width: "25%",
  marginTop: "10px",
  verticalAlign: "top",
};
const MyProfileBodyListStyles = {
  display: "inline-block",
  width: "20%",
  marginTop: "10px",
  verticalAlign: "top",
};
const AddressDetailListStyles = {
  display: "inline-block",
  width: "20%",
  marginTop: "10px",
  verticalAlign: "top",
};

const MyProfileBodyTitleStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "21px",
  color: `${mediumGrey}`,
  letterSpacing: "initial",
};

const MyProfileBodyValueStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "16px",
  lineHeight: "21px",
  color: `${blackText}`,
  letterSpacing: "initial",
};

const EditIconStyles = {
  float: "right",
  marginTop: "15px",
};

const pill = {
  display: "inline-block",
  padding: "2px 8px",
  borderRadius: "14px",
  marginTop: "5px",
};

const greenPill = {
  color: `${greenText}`,
  border: `1px solid ${greenText}`,
};

const redPill = {
  color: `${redText}`,
  border: `1px solid ${redText}`,
};

const Icon = {
  width: 64,
  height: 64,
};

function MyProfile() {
  return (
    <div className="personal-details dashboard-element">
      <PageTitle title="My Profile" display={false} />
      <Row>
        <Col style={{ padding: 0 }}>
          <div className="myprofile-container" style={MyProfileContainerStyles}>
            <div className="myprofile-header" style={MyProfileHeaderStyles}>
              <PersonalDetailsIcon style={Icon} />
              <h3 style={MyProfileHeadingStyles}>Personal Details</h3>
              <a href="#" style={EditIconStyles}>
                <EditDetailsIcon />
              </a>
            </div>
            <div className="myprofile-body" style={MyProfileBodyStyles}>
              <ul>
                <li style={PersonalDetailsListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Name</p>
                  <p style={MyProfileBodyValueStyles}>Nilesh Patel</p>
                </li>
                <li style={PersonalDetailsListStyles}>
                  <p style={MyProfileBodyTitleStyles}>PAN No.</p>
                  <p style={MyProfileBodyValueStyles}>ABCDE4556F</p>
                </li>
                <li style={PersonalDetailsListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Email ID</p>
                  <p style={MyProfileBodyValueStyles}>xxxxxxxxxx@gmail.com</p>
                </li>
                <li style={PersonalDetailsListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Mobile Number</p>
                  <p style={MyProfileBodyValueStyles}>9966332255</p>
                </li>
              </ul>
              <ul style={{ marginTop: "15px", marginBottom: "15px" }}>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>
                    KYC Compliance <br className="textBreaker" />
                    Status
                  </p>
                  <p
                    style={{
                      ...MyProfileBodyValueStyles,
                      ...pill,
                      ...greenPill,
                      width: "auto",
                    }}
                  >
                    Verified
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col style={{ padding: 0 }}>
          <div className="myprofile-container" style={MyProfileContainerStyles}>
            <div className="myprofile-header" style={MyProfileHeaderStyles}>
              <BankDetailsIcon style={Icon} />
              <h3 style={MyProfileHeadingStyles}>BANK DETAILS</h3>
              <a href="#" style={EditIconStyles}>
                <EditDetailsIcon />
              </a>
            </div>
            <div className="myprofile-body" style={MyProfileBodyStyles}>
              <ul>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Bank Name</p>
                  <p style={MyProfileBodyValueStyles}>HDFC BANK</p>
                </li>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Bank Type</p>
                  <p style={MyProfileBodyValueStyles}>Primary</p>
                </li>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Activated On</p>
                  <p style={MyProfileBodyValueStyles}>DD/MM/YYYY</p>
                </li>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Account Type</p>
                  <p style={MyProfileBodyValueStyles}>Saving</p>
                </li>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Account Holder Name</p>
                  <p style={MyProfileBodyValueStyles}>Nilesh Patel</p>
                </li>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Account Number</p>
                  <p style={MyProfileBodyValueStyles}>00000000000</p>
                </li>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Branch Name</p>
                  <p style={MyProfileBodyValueStyles}>XXXXXXX</p>
                </li>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>IFSC Code </p>
                  <p style={MyProfileBodyValueStyles}>0000000</p>
                </li>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>MICR Code</p>
                  <p style={MyProfileBodyValueStyles}>00000000</p>
                </li>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Bank Address</p>
                  <p style={MyProfileBodyValueStyles}>XXXXXXXXX</p>
                </li>
              </ul>
              <ul style={{ marginTop: "15px", marginBottom: "15px" }}>
                <li style={MyProfileBodyListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Status</p>
                  <p
                    style={{
                      ...MyProfileBodyValueStyles,
                      ...pill,
                      ...greenPill,
                      width: "auto",
                    }}
                  >
                    Active
                  </p>
                </li>
              </ul>
              <p>
                <img
                  src={AddBankIcon}
                  style={{ transform: "translateY(-3px)" }}
                />

                <span style={addBankLink}>Add Bank</span>
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col style={{ padding: 0 }}>
          <div className="myprofile-container" style={MyProfileContainerStyles}>
            <div className="myprofile-header" style={MyProfileHeaderStyles}>
              <AddressDetailsIcon style={Icon} />
              <h3 style={MyProfileHeadingStyles}>Address Details</h3>
              <a href="#" style={EditIconStyles}>
                <EditDetailsIcon />
              </a>
            </div>
            <div className="myprofile-body" style={MyProfileBodyStyles}>
              <ul>
                <li style={{ ...AddressDetailListStyles, width: "40%" }}>
                  <p style={MyProfileBodyTitleStyles}>Address</p>
                  <p style={{ ...MyProfileBodyValueStyles, width: "60%" }}>
                    xxxxx xxxxx xxxxxx xxxxxxx, xxxxx xxxx, xxxxxx.
                  </p>
                </li>

                <li style={AddressDetailListStyles}>
                  <p style={MyProfileBodyTitleStyles}>City</p>
                  <p style={MyProfileBodyValueStyles}>Mumbai</p>
                </li>
                <li style={AddressDetailListStyles}>
                  <p style={MyProfileBodyTitleStyles}>State</p>
                  <p style={MyProfileBodyValueStyles}>Maharashtra</p>
                </li>
                <li style={AddressDetailListStyles}>
                  <p style={MyProfileBodyTitleStyles}>Pincode</p>
                  <p style={MyProfileBodyValueStyles}>400096</p>
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MyProfile;
