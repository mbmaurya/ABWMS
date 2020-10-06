import React, { useRef } from "react";

//Components
import { Nav } from "react-bootstrap";
import UserName from "./username";

//Icons
import { ReactComponent as TransactionIcon } from "../../assets/images/dashboard/my-transaction.svg";
import { ReactComponent as DashboardIcon } from "../../assets/images/dashboard/my-dashboard.svg";
import { ReactComponent as PassbookIcon } from "../../assets/images/dashboard/my-passbook.svg";
import { ReactComponent as ProfileIcon } from "../../assets/images/dashboard/my-profile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//Styles
import { greyText, whiteText } from "../../styles";

const DashboardMenuStyles = {
  width: "120px",
  backgroundColor: `${whiteText}`,
  height: "580px",
  boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.1)",
};

const MenuListStyles = {
  width: "120px",
  padding: "15px",
  backgroundColor: `${whiteText}`,
  textAlign: "center",
};

const MenuListNameStyles = {
  fontFamily: "PFHandbookPro-regular, sans-serif",
  fontSize: "14px",
  lineHeight: "17px",
  color: `${greyText}`,
};

function DashboardMenu() {
  const menuRef = useRef(null);
  const openMenu = () => {
    menuRef.current.style.left = 0;
  };

  const closeMenu = () => {
    menuRef.current.style.left = "-100%";
  };

  return (
    <div>
      <div
        ref={menuRef}
        className="dashboard-menu-container"
        onClick={closeMenu}
      >
        <UserName assignClass="dashboard-username-mobile" />
        <div className={`dashboard-menu`} style={DashboardMenuStyles}>
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey="transaction">
                <div style={MenuListStyles}>
                  <TransactionIcon />
                  <p style={MenuListNameStyles}>My Transaction</p>
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="dashboard">
                <div style={MenuListStyles}>
                  <DashboardIcon />
                  <p style={MenuListNameStyles}>My Dashboard</p>
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="passbook">
                <div style={MenuListStyles}>
                  <PassbookIcon />
                  <p style={MenuListNameStyles}>My Passbook</p>
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="profile">
                <div style={MenuListStyles}>
                  <ProfileIcon />
                  <p style={MenuListNameStyles}>My Profile</p>
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <div className="dashboard-mobile-menu" onClick={openMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}

export default DashboardMenu;
