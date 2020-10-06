import React from "react";

//Components
import LockerBalance from "./LockerBalance";
import DigitalGoldGraph from "./DigitalGoldGraph";
import Deliver from "./Deliver";
import UserName from "../username";

//Bootstrap
import { Col, Row } from "react-bootstrap";

//Styles
import Sold from "./Sold";
import Transfer from "./Transefer";

import PageTitle from "../pagetitle";

function MyDashboard() {
  return (
    <section className="my-dashboard dashboard-element">
      <UserName assignClass="dashboard-username-desktop" />
      <PageTitle
        title="My Dashboard"
        display={true}
        clickFunction={() => console.log("Clicked")}
      />

      {/** Row 3 */}
      <Row noGutters={true} style={{ marginTop: "15px" }}>
        <Col lg={6}>
          <LockerBalance />
        </Col>
        <Col lg={6}>
          <DigitalGoldGraph />
        </Col>
      </Row>

      {/* Row 4 */}
      <Row noGutters={true} style={{ marginTop: "15px" }}>
        <Col lg={4}>
          <Sold />
        </Col>

        <Col lg={4}>
          <Deliver />
        </Col>

        <Col lg={4}>
          <Transfer />
        </Col>
      </Row>
    </section>
  );
}

export default MyDashboard;
