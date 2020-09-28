import React, { useState } from "react";

import { ReactComponent as HeaderMobileLogo } from "../../..//assets/images/header/logo-mobile.svg";
import { primaryRed, whiteText } from "../../../styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import SlideMenu from "./slidemenu";

const RowOneStyles = {
  backgroundColor: `${primaryRed}`,
  padding: "15px 0px",
};

const ListStyles = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  height: "100%",
  paddingTop: "5px",
};

const ListItemStyles = {
  display: "inline-block",
  textAlign: "right",
};

const ListItemLinkStyles = {
  display: "inline-block",
  color: `${whiteText}`,
  fontSize: "30px",
};

function MobileLinkGroupFirst() {
  const [slideMenuToggle, switchSlideMenuToggle] = useState(false);
  return (
    <div>
      <div className="container-fluid">
        <div className="row" style={RowOneStyles}>
          <div className="col-6 mobile-logo">
            <HeaderMobileLogo />
          </div>
          <div className="col-6">
            <ul style={ListStyles}>
              <li style={{ ...ListItemStyles, paddingRight: "15px" }}>
                <a
                  style={ListItemLinkStyles}
                  href="https://mywealth.adityabirlacapital.com/registration/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
              <li style={ListItemStyles}>
                <a
                  style={ListItemLinkStyles}
                  onClick={() => switchSlideMenuToggle(!slideMenuToggle)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {slideMenuToggle ? (
        <SlideMenu
          closeFunction={() => switchSlideMenuToggle(!slideMenuToggle)}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default MobileLinkGroupFirst;
