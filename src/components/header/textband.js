import React from "react";

import { whiteText, darkGreen } from "../../styles";

const ParagraphStyles = {
  fontFamily: "PFHandbookPro-light, sans-serif",
  fontSize: "18px",
  lineHeight: "24px",
  color: `${whiteText}`,
  paddingLeft: "26px",
};

function TextBand() {
  return (
    <div style={{ backgroundColor: `${darkGreen}` }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p style={ParagraphStyles}>Aditya Birla Finance Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextBand;
