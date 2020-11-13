import React, { useState } from "react";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";

//components
import MyDashboard from "./mydashboard";
import DashboardMenu from "./dashboard-menu";
import MyProfile from "./myprofile";

//Styles
import { greyBackground, whiteText } from "../../styles";
import UserName from "./username";
import MyPassbook from "./mypassbook";

const DashboardMenuStyles = {
  backgroundColor: `${whiteText}`,
  boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.1)",
};

function Dashboard() {
  return (
    <Container
      fluid="md"
      style={{ backgrounndColor: greyBackground }}
      className="dashboard-container"
    >
      <Row noGutters={true}>
        <Col sm={12}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
            <Row noGutters={true}>
              <Col lg={1} style={DashboardMenuStyles}>
                <DashboardMenu />
              </Col>

              <Col lg={11}>
                <Tab.Content defaultActiveKey="dashboard" className="dashboard-cols">
                  <Tab.Pane eventKey="transaction">My Transaction</Tab.Pane>
                  <Tab.Pane eventKey="dashboard">
                    <MyDashboard />
                  </Tab.Pane>
                  <Tab.Pane eventKey="passbook">
                    <MyPassbook />
                  </Tab.Pane>
                  <Tab.Pane eventKey="profile">
                    <MyProfile />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
