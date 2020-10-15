import React from "react";

//Bootstrap
import { Col, Row, Button } from "react-bootstrap";

//Styles
import { btn, blackText } from "../../styles";

const BlockTitleStyles = {
  fontFamily: "PFHandbookPro-medium, sans-serif",
  fontSize: "36px",
  lineHeight: "40px",
  color: `${blackText}`,
  letterSpacing: "1px",
};

function PageTitle(props) {
  return (
    <Row noGutters={true} style={{ alignItems: "flex-end", marginTop: "15px" }}>
      <Col lg={6}>
        <h2 style={BlockTitleStyles} className="BlockTitleStyles">
          {props.title}
        </h2>
      </Col>
      <Col lg={6} className="buy-now">
        {props.display ? (
          <Button style={btn} onClick={props.clickFunction}>
            Buy Now
          </Button>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
}

export default PageTitle;
