import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faPhoneAlt,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  MainMenuStyles,
  MainMenuLinkStyles,
  SubMenuStyles,
  SubMenuListStyles,
  SubMenuListAnchorStyles,
  ListGroupTwoStyles,
} from "./style";

import { ReactComponent as HeaderLogo } from "../../assets/images/header/logo.svg";

function LinkGroupSecond() {
  return (
    <div className="row" style={ListGroupTwoStyles}>
      <div className="col-3 no-padding">
        <a href="/" className="header-logo">
          <HeaderLogo />
        </a>
      </div>
      <div className="col-6 no-padding">
        <ul className="main-menu" style={MainMenuStyles}>
          <li style={MainMenuLinkStyles}>
            Protecting <FontAwesomeIcon icon={faAngleDown} />
            <ul className="sub-menu" style={SubMenuStyles}>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://lifeinsurance.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Life Insurance
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://www.adityabirlacapital.com/healthinsurance/#!/homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Health Insurance
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://www.adityabirlacapital.com/multiply-wellness/#!/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Multiply Wellness
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://motorinsurance.adityabirlacapital.com/Pages/Individual/Products/Motor-Insurance.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Motor Insurance
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://travelinsurance.adityabirlacapital.com/Pages/Individual/Products/Overseas-Travel.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Travel Insurance
                </a>
              </li>
            </ul>
          </li>

          <li style={MainMenuLinkStyles}>
            Investing <FontAwesomeIcon icon={faAngleDown} />
            <ul className="sub-menu" style={SubMenuStyles}>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://mutualfund.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mutual Funds
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://stocksandsecurities.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stock and Securities
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://wealthmanagement.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wealth Management
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://portfoliomanagementservices.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio Management Services
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://pensionfund.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pension Funds
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="http://realestateinvestment.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Real Estate Investments
                </a>
              </li>
            </ul>
          </li>

          <li style={MainMenuLinkStyles}>
            Financing <FontAwesomeIcon icon={faAngleDown} />
            <ul className="sub-menu" style={SubMenuStyles}>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://homefinance.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home Finance
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://personalfinance.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Personal Finance
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://smefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SME Finance
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://loanagainstsecurities.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Loan Against Securities
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://mortgagefinance.adityabirlacapital.com/Pages/Individual/Products/Overview.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mortgage Finance
                </a>
              </li>
            </ul>
          </li>

          <li style={MainMenuLinkStyles}>
            Advising <FontAwesomeIcon icon={faAngleDown} />
            <ul className="sub-menu" style={SubMenuStyles}>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://advising.adityabirlacapital.com/money-for-life-planner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MoneyForLife Planner
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://www.adityabirlacapital.com/abc-of-money"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ABC of Money
                </a>
              </li>
              <li style={SubMenuListStyles}>
                <a
                  style={SubMenuListAnchorStyles}
                  href="https://mywealth.adityabirlacapital.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MyUniverse
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="col-3 no-padding">
        <ul className="main-menu main-menu-right">
          <li style={MainMenuLinkStyles}>
            1800-270-7000
            <FontAwesomeIcon icon={faPhoneAlt} />
          </li>
          <li style={MainMenuLinkStyles}>
            <a
              href="https://www.adityabirlacapital.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
              <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
          <li style={MainMenuLinkStyles}>
            <a
              href="https://mywealth.adityabirlacapital.com/registration/sign-in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
              <FontAwesomeIcon icon={faUser} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LinkGroupSecond;
