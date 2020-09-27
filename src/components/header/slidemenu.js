import React from "react";

import { ReactComponent as HeaderMobileLogo } from "../../assets/images/header/logo-mobile.svg";
import { blackText, primaryRed, whiteText } from "../../styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTimes,
  faHome,
  faPhone,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const SlideMenuContainerStyles = {
  position: "absolute",
  width: "100%",
  height: "100vh",
  top: "0",
  backgroundColor: "rgb(0, 0, 0, 0.79)",
  zIndex: "1",
};

const SlideMenuStyles = {
  position: "absolute",
  width: "50%",
  right: "0",
  zIndex: "1",
  color: `${whiteText}`,
  top: "0",
};

const SlideMenuHeaderStyles = {
  backgroundColor: `${primaryRed}`,
  padding: "20px 15px",
};

const SlideMenuLogoStyles = {
  display: "inline-block",
  verticalAlign: "middle",
};

const SlideMenuCloseStyles = {
  display: "inline-block",
  textAlign: "right",
  width: "44%",
  fontSize: "30px",
};

const SlideMenuHeaderLinkStyles = {
  paddingTop: "20px",
};

const SlideMenuHeaderListStyles = {
  display: "inline-block",
  width: "33%",
  textAlign: "center",
  borderRight: `1px solid ${whiteText}`,
};

const SlideMenuBodyStyles = {
  backgroundColor: `${whiteText}`,
  padding: "30px 15px",
  zIndex: "3",
};

const SlideMenuBodyHeadingStyles = {
  fontFamily: "PFHandbookPro-bold, sans-serif",
  fontSize: "28px",
  color: `${primaryRed}`,
  textTransform: "uppercase",
  marginBottom: "10px",
};

const SlideMenuBodyListStyles = {
  display: "inline-block",
  width: "50%",
};

const SlideMenuBodyLinkStyles = {
  display: "inline-block",
  color: `${blackText}`,
  fontSize: "16px",
  marginBottom: "10px",
};

function SlideMenu() {
  return (
    <div className="slide-menu-container" style={SlideMenuContainerStyles}>
      <div className="slide-menu" style={SlideMenuStyles}>
        <div className="slide-menu-header" style={SlideMenuHeaderStyles}>
          <div className="slide-menu-logo" style={SlideMenuLogoStyles}>
            <HeaderMobileLogo />
          </div>
          <div style={SlideMenuCloseStyles}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div
            className="slide-menu-header-links"
            style={SlideMenuHeaderLinkStyles}
          >
            <ul>
              <li style={SlideMenuHeaderListStyles}>
                <a
                  style={{ color: whiteText }}
                  href="https://www.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faHome} />
                </a>
              </li>
              <li style={SlideMenuHeaderListStyles}>
                <a
                  style={{ color: whiteText }}
                  href="tel:18002707000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </a>
              </li>
              <li style={{ ...SlideMenuHeaderListStyles, borderRight: "0" }}>
                <a
                  style={{ color: whiteText }}
                  href="https://mywealth.adityabirlacapital.com/registration/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="slide-menu-body" style={SlideMenuBodyStyles}>
          <h3 style={SlideMenuBodyHeadingStyles}>Protecting</h3>
          <ul style={{ marginBottom: "30px" }}>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://lifeinsurance.adityabirlacapital.com/"
                target="_blank"
              >
                Life Insurance
              </a>
            </li>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://www.adityabirlacapital.com/healthinsurance/#!/homepage"
                target="_blank"
              >
                Health Insurance
              </a>
            </li>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://www.adityabirlacapital.com/multiply-wellness/#!/home"
                target="_blank"
              >
                Multiply Wellness
              </a>
            </li>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://motorinsurance.adityabirlacapital.com/Pages/Individual/Products/Motor-Insurance.aspx"
                target="_blank"
              >
                Motor Insurance
              </a>
            </li>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://travelinsurance.adityabirlacapital.com/Pages/Individual/Products/Overseas-Travel.aspx"
                target="_blank"
              >
                Travel Insurance
              </a>
            </li>
          </ul>

          <h3 style={SlideMenuBodyHeadingStyles}>Investing</h3>
          <ul style={{ marginBottom: "30px" }}>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://mutualfund.adityabirlacapital.com/"
                target="_blank"
              >
                Mutual Funds
              </a>
            </li>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://stocksandsecurities.adityabirlacapital.com/"
                target="_blank"
              >
                Stocks and Securities
              </a>
            </li>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://wealthmanagement.adityabirlacapital.com/"
                target="_blank"
              >
                Wealth Managment
              </a>
            </li>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://portfoliomanagementservices.adityabirlacapital.com/"
                target="_blank"
              >
                Portolio Management Services
              </a>
            </li>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://pensionfund.adityabirlacapital.com/"
                target="_blank"
              >
                Pension Funds
              </a>
            </li>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="http://realestateinvestment.adityabirlacapital.com/"
                target="_blank"
              >
                Real Estate Investment
              </a>
            </li>
          </ul>

          <h3 style={SlideMenuBodyHeadingStyles}>Advising</h3>
          <ul style={{ marginBottom: "30px" }}>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://advising.adityabirlacapital.com/money-for-life-planner"
                target="_blank"
              >
                MoneyForLife Planner
              </a>
            </li>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://www.adityabirlacapital.com/abc-of-money"
                target="_blank"
              >
                ABC of Money
              </a>
            </li>
            <li style={SlideMenuBodyListStyles}>
              <a
                style={SlideMenuBodyLinkStyles}
                href="https://www.myuniverse.in/"
                target="_blank"
              >
                MyUniverse
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SlideMenu;
