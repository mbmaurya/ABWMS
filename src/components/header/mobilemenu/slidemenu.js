import React, { useState } from "react";

import { ReactComponent as HeaderMobileLogo } from "../../../assets/images/header/logo-mobile.svg";
import {
  blackText,
  darkGrey,
  lightGrey,
  primaryRed,
  whiteText,
} from "../../../styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTimes,
  faHome,
  faPhone,
  faPhoneAlt,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";

const SlideMenuContainerStyles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",
  backgroundColor: "rgb(0, 0, 0, 0.79)",
  zIndex: "1",
  overflowY: "scroll",
  transition: "0.3s all ease-in-out",
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
  position: "absolute",
  fontSize: "30px",
  right: "15px",
  top: "10px",
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

const SlideMenuBodyULStyles = {
  paddingTop: "15px",
  borderTop: `2px solid ${lightGrey}`,
  marginBottom: "25px",
};

const SlideMenuBodyListStylesTwo = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "20px",
  marginTop: "10px",
  color: `${darkGrey}`,
};

const SlideMenuBodyLinkStylesTwo = {
  color: `${darkGrey}`,
  textDecoration: "none",
};

const SlideMenuBodySubMenuListStyles = { marginTop: "10px" };

const SlideMenuBodySubMenuLinkStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "18px",
  lineHeight: "18px",
  color: `${darkGrey}`,
};

const SlideMenuFooterStyles = {
  padding: "20px",
  backgroundColor: `${primaryRed}`,
};

const SlideMenuFooterCopyrightStyles = {
  fontFamily: "PFEncoreSansPro-regular, sans-serif",
  fontSize: "16px",
  lineHeight: "25px",
  color: `${whiteText}`,
};

function SlideMenu({ closeFunction }) {
  const [subMenuToggle, switchSubMenuToggle] = useState(false);
  return (
    <div className="slide-menu-container" style={SlideMenuContainerStyles}>
      <div className="slide-menu" style={SlideMenuStyles}>
        <div className="slide-menu-header" style={SlideMenuHeaderStyles}>
          <div className="slide-menu-logo" style={SlideMenuLogoStyles}>
            <HeaderMobileLogo />
          </div>
          <div style={SlideMenuCloseStyles}>
            <FontAwesomeIcon icon={faTimes} onClick={closeFunction} />
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

          <ul style={SlideMenuBodyULStyles}>
            <li style={SlideMenuBodyListStylesTwo}>
              <a
                style={SlideMenuBodyLinkStylesTwo}
                href="https://www.adityabirlacapital.com/corporate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Corporates
              </a>
            </li>
            <li style={SlideMenuBodyListStylesTwo}>
              <a
                style={SlideMenuBodyLinkStylesTwo}
                href="https://www.adityabirlacapital.com/advisors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Advisors
              </a>
            </li>
            <li style={SlideMenuBodyListStylesTwo}>
              <a
                style={SlideMenuBodyLinkStylesTwo}
                href="https://www.adityabirlacapital.com/customer-services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Customer Services
              </a>
            </li>
            <li style={SlideMenuBodyListStylesTwo}>
              <a
                style={SlideMenuBodyLinkStylesTwo}
                href="https://www.adityabirlacapital.com/about-us/careers"
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </a>
            </li>
            <li style={SlideMenuBodyListStylesTwo}>
              <a
                style={SlideMenuBodyLinkStylesTwo}
                href="https://www.adityabirlacapital.com/about-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
            </li>
          </ul>

          <ul style={SlideMenuBodyULStyles}>
            <li style={SlideMenuBodyListStylesTwo}>
              <span
                className="sub-menu"
                onClick={() => switchSubMenuToggle(!subMenuToggle)}
              >
                Others
                {!subMenuToggle ? (
                  <FontAwesomeIcon icon={faAngleDown} />
                ) : (
                  <FontAwesomeIcon icon={faAngleUp} />
                )}
              </span>
              {subMenuToggle ? (
                <ul style={{ paddingLeft: "30px" }}>
                  <li style={SlideMenuBodySubMenuListStyles}>
                    <a
                      style={SlideMenuBodySubMenuLinkStyles}
                      href="https://www.adityabirlacapital.com/about-us/our-solutions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Solutions
                    </a>
                  </li>
                  <li style={SlideMenuBodySubMenuListStyles}>
                    <a
                      style={SlideMenuBodySubMenuLinkStyles}
                      href="https://www.adityabirlacapital.com/about-us/our-businesses"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Business
                    </a>
                  </li>
                  <li style={SlideMenuBodySubMenuListStyles}>
                    <a
                      style={SlideMenuBodySubMenuLinkStyles}
                      href="https://www.adityabirlacapital.com/about-us/financial-achievements"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Our Achievements
                    </a>
                  </li>
                  <li style={SlideMenuBodySubMenuListStyles}>
                    <a
                      style={SlideMenuBodySubMenuLinkStyles}
                      href="https://www.adityabirlacapital.com/about-us/csr-and-sustainability"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CSR
                    </a>
                  </li>
                  <li style={SlideMenuBodySubMenuListStyles}>
                    <a
                      style={SlideMenuBodySubMenuLinkStyles}
                      href="https://www.adityabirlacapital.com/investor-relations"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Investor Relations
                    </a>
                  </li>
                  <li style={SlideMenuBodySubMenuListStyles}>
                    <a
                      style={SlideMenuBodySubMenuLinkStyles}
                      href="https://www.adityabirlacapital.com/press-and-media"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Press and Media
                    </a>
                  </li>
                  <li style={SlideMenuBodySubMenuListStyles}>
                    <a
                      style={SlideMenuBodySubMenuLinkStyles}
                      href="https://www.adityabirlacapital.com/branch-locator"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Locate Us
                    </a>
                  </li>
                  <li style={SlideMenuBodySubMenuListStyles}>
                    <a
                      style={SlideMenuBodySubMenuLinkStyles}
                      href="https://www.adityabirlacapital.com/key-facts-on-tax-filing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ITR Filing
                    </a>
                  </li>
                </ul>
              ) : (
                ""
              )}
            </li>
            <li style={SlideMenuBodyListStylesTwo}>
              <a
                style={SlideMenuBodyLinkStylesTwo}
                href="https://www.adityabirlacapital.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li style={SlideMenuBodyListStylesTwo}>
              <a
                style={SlideMenuBodyLinkStylesTwo}
                href="https://www.adityabirlacapital.com/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        <div className="slide-menu-footer" style={SlideMenuFooterStyles}>
          <p style={SlideMenuFooterCopyrightStyles}>
            &copy; 2019, Aditya Birla Capital Inc.
            <br /> All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SlideMenu;
