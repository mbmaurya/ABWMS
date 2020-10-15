import React from "react";

//Bootstrap
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          <Link style={{
              ...btn,
              display: "inline-block",
              textAlign: "center",
              lineHeight: "50px"
            }} to={"/gold-transactions"}>
            Buy Now
          </Link>
        ) : (
          ""
        )}
      </Col>
    </Row>
  );
}

export default PageTitle;
