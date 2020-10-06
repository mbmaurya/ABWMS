import React, { useState } from "react";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";

//components
import MyDashboard from "./mydashboard";
import DashboardMenu from "./dashboard-menu";

//Styles
import { greyBackground } from "../../styles";
import UserName from "./username";
import MyPassbook from "./mypassbook";

function Dashboard() {
  return (
    <Container fluid="md" style={{ backgrounndColor: greyBackground }}>
      <Row noGutters={true}>
        <Col sm={12}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
            <Row noGutters={true}>
              <Col lg={2}>
                <DashboardMenu />
              </Col>
              <Col lg={10}>
                <UserName assignClass="dashboard-username-desktop" />
                <Tab.Content defaultActiveKey="dashboard">
                  <Tab.Pane eventKey="transaction">My Transaction</Tab.Pane>
                  <Tab.Pane eventKey="dashboard">
                    <MyDashboard />
                  </Tab.Pane>
                  <Tab.Pane eventKey="passbook">
                    <MyPassbook />
                  </Tab.Pane>
                  <Tab.Pane eventKey="profile">
                    <MyDashboard />
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
