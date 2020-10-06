import React from "react";

//Components
import LockerBalance from "./LockerBalance";
import DigitalGoldGraph from "./DigitalGoldGraph";
import Deliver from "./Deliver";

//Bootstrap
import { Col, Row } from "react-bootstrap";

//Styles
import Sold from "./Sold";
import Transfer from "./Transefer";

import PageTitle from "../pagetitle";

function MyDashboard() {
  return (
    <section className="my-dashboard dashboard-element">
      <PageTitle
        title="My Dashboard"
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
