import React from "react";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";

//components
import MyDashboard from "./mydashboard/MyDashboard";

//Styles
import { greyBackground } from "../../styles";

function Dashboard() {
  return (
    <Container fluid="md" style={{ backgrounndColor: greyBackground }}>
      <Row noGutters={true}>
        <Col lg={2}>Menu</Col>
        <Col lg={10}>
          <MyDashboard />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
