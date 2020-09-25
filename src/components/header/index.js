import React from "react";
import {
  HeaderStyles,
  LinkGroupOneStyles,
  LinkGroupListStyles,
  LinkGroupAnchorStyles,
  LinkGroupAnchorLastStyles,
  ListGroupTwoStyles,
  MainMenuStyles,
  MainMenuLinkStyles,
  SubMenuStyles,
  SubMenuListStyles,
  SubMenuListAnchorStyles,
} from "./style";

import { ReactComponent as HeaderLogo } from "../../assets/images/header/logo.svg";

function Header() {
  return (
    <header className="header" style={HeaderStyles}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="links-grp-1" style={LinkGroupOneStyles}>
              <li style={LinkGroupListStyles}>
                <a
                  style={LinkGroupAnchorStyles}
                  href="https://www.adityabirlacapital.com/corporate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Corporates
                </a>
              </li>
              <li style={LinkGroupListStyles}>
                <a
                  style={LinkGroupAnchorStyles}
                  href="https://www.adityabirlacapital.com/advisors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Advisors
                </a>
              </li>
              <li style={LinkGroupListStyles}>
                <a
                  style={LinkGroupAnchorStyles}
                  href="https://www.adityabirlacapital.com/customer-services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Customer Services
                </a>
              </li>
              <li style={LinkGroupListStyles}>
                <a
                  style={LinkGroupAnchorStyles}
                  href="https://www.adityabirlacapital.com/about-us/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
              <li style={LinkGroupListStyles}>
                <a
                  style={{
                    ...LinkGroupAnchorStyles,
                    ...LinkGroupAnchorLastStyles,
                  }}
                  href="https://www.adityabirlacapital.com/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row" style={ListGroupTwoStyles}>
          <div className="col-4 no-padding">
            <a href="/" className="header-logo">
              <HeaderLogo />
            </a>
          </div>
          <div className="col-6 no-padding">
            <ul className="main-menu" style={MainMenuStyles}>
              <li style={MainMenuLinkStyles}>
                Protecting
                <ul className="sub-menu" style={SubMenuStyles}>
                  <li style={SubMenuListStyles}>
                    <a
                      style={SubMenuListAnchorStyles}
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Life Insurance
                    </a>
                  </li>
                  <li style={SubMenuListStyles}>
                    <a
                      style={SubMenuListAnchorStyles}
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Life Insurance
                    </a>
                  </li>
                  <li style={SubMenuListStyles}>
                    <a
                      style={SubMenuListAnchorStyles}
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Life Insurance
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
