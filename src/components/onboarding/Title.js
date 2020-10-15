import React from "react";
import { boxParagraph, titleContainer } from "../../styles";

function Title({ icon, title }) {
  return (
    //     <p style={boxTitle}>
    //       <span className="underline-logo">{icon}</span>
    //       {title}
    //     </p>
    <div style={titleContainer}>
      <div className="underline-logo">{icon}</div>
      <p style={boxParagraph}>{title}</p>
    </div>
  );
}

export default Title;
