import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  SubMenuStyles,
  SubMenuListStyles,
  SubMenuListAnchorStyles,
} from "./style";

import { whiteText } from "../../styles";

const LinkGroupHeadingStyles = {
  fontFamily: "PFHandbookPro-bold, sans-serif",
  fontSize: "26px",
  color: `${whiteText}`,
  lineHeight: "45px",
  textAlign: "right",
  textTransform: "uppercase",
  paddingRight: "20px",
};

const MainMenuStyles = {
  display: "block",
  height: "100%",
  marginLeft: "12px",
};

const MainMenuListStyles = {
  position: "relative",
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "16px",
  lineHeight: "48px",
  color: `${whiteText}`,
  wordSpacing: "normal",
  padding: "0px 12px",
};

function LinkGroupThird() {
  return (
    <div className="row">
      <div className="col-3 no-padding">
        <h3 style={LinkGroupHeadingStyles}>Wealth Management</h3>
      </div>
      <div className="col-6 no-padding">
        <ul className="main-menu" style={MainMenuStyles}>
          <li className="main-menu-third" style={MainMenuListStyles}>
            Our Solutions&nbsp;
            <FontAwesomeIcon icon={faAngleDown} />
            <ul className="sub-menu" style={SubMenuStyles}>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://wealthmanagement.adityabirlacapital.com/our-solutions/wealth-management"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wealth Management
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://wealthmanagement.adityabirlacapital.com/our-solutions/corporate-treasury-services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Corporate &amp; Treasury Services
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://mywealth.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Online Services
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://wealthmanagement.adityabirlacapital.com/partner-overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business Partners
                </a>
              </li>
            </ul>
          </li>

          <li className="main-menu-third" style={MainMenuListStyles}>
            <a
              style={SubMenuListAnchorStyles}
              href="https://wealthmanagement.adityabirlacapital.com/research"
              target="_blank"
              rel="noopener noreferrer"
            >
              Research
            </a>
          </li>

          <li className="main-menu-third" style={MainMenuListStyles}>
            <a
              style={SubMenuListAnchorStyles}
              href="https://wealthmanagement.adityabirlacapital.com/forms-and-downloads/application-form"
              target="_blank"
              rel="noopener noreferrer"
            >
              Forms &amp; Downloads
            </a>
          </li>

          <li className="main-menu-third" style={MainMenuListStyles}>
            About Us <FontAwesomeIcon icon={faAngleDown} />
            <ul className="sub-menu" style={SubMenuStyles}>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://wealthmanagement.adityabirlacapital.com/about-us/company-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Company Profile
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://wealthmanagement.adityabirlacapital.com/about-us/our-people"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our People
                </a>
              </li>
            </ul>
          </li>

          <li className="main-menu-third" style={MainMenuListStyles}>
            More <FontAwesomeIcon icon={faAngleDown} />
            <ul className="sub-menu" style={SubMenuStyles}>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://wealthmanagement.adityabirlacapital.com/partner-overview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Partner
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://wmlogin.adityabirlawealthmanagement.com/Login_Birla.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Partner Login
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="col-3 no-padding">
        <ul className="main-menu">
          <li className="main-menu-third" style={MainMenuListStyles}>
            <a
              href="https://wealthmanagement.adityabirlacapital.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LinkGroupThird;
