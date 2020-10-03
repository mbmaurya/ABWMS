import React from "react";

//Components
import LockerBalance from "./LockerBalance";
import DigitalGoldGraph from "./DigitalGoldGraph";
import Deliver from "./Deliver";
//Bootstrap
import { Col, Container, Row, Button } from "react-bootstrap";

//Styles
import { btn } from "../../../styles";
import { UserNameStyles, BlockTitleStyles } from "./style";
import Sold from "./Sold";
import Transfer from "./Transefer";

function MyDashboard() {
  return (
    <section className="my-dashboard">
      {/** Row 1 */}
      <Row noGutters={true}>
        <Col>
          <h3 style={UserNameStyles}>Hello Nilesh Patel!</h3>
        </Col>
      </Row>

      {/** Row 2 */}
      <Row noGutters={true} style={{ alignItems: "flex-end" }}>
        <Col md={6}>
          <h2 style={BlockTitleStyles}>Dashboard</h2>
        </Col>
        <Col md={6} className="buy-now">
          <Button style={btn}>Buy Now</Button>
        </Col>
      </Row>

      {/** Row 3 */}
      <Row noGutters={true} style={{ marginTop: "15px" }}>
        <Col md={6}>
          <LockerBalance />
        </Col>
        <Col md={6}>
          <DigitalGoldGraph />
        </Col>
      </Row>

      {/* Row 4 */}
      <Row noGutters={true} style={{ marginTop: "15px" }}>
        <Col md={4}>
          <Sold />
        </Col>

        <Col md={4}>
          <Deliver />
        </Col>

        <Col md={4}>
          <Transfer />
        </Col>
      </Row>
    </section>
  );
}

export default MyDashboard;
