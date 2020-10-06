import React, { useState } from "react";
import { Image, Button, Card, Accordion } from "react-bootstrap";
import { boxTitle, stepsDiv, stepsListItem, listIcon } from "../../styles";

function StepLists({ listTitle, stepsList }) {
  const isMobile = window.innerWidth <= 992;

  const BoxTitle = () => {
    return (
      <h3 style={{ ...boxTitle, color: "black", marginBottom: 18 }}>
        {listTitle}
      </h3>
    );
  };

  const Lists = () => {
    return (
      <ul>
        {stepsList.map((list, i) => {
          return (
            <li key={i} style={stepsListItem} className="stepListItem">
              <div style={listIcon}>
                <Image
                  src={list.icon}
                  style={{ marginTop: -2, marginLeft: -2 }}
                />
              </div>
              <div>
                <p>
                  <span
                    style={{
                      color: "black",
                      fontFamily: `PFHandbookPro-medium, "san-serif"`,
                    }}
                  >
                    Step 0{i + 1}:{" "}
                  </span>
                  {list.text}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div style={stepsDiv} className="steps">
      {isMobile ? (
        <Accordion defaultActiveKey="0">
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <BoxTitle />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Lists />
          </Accordion.Collapse>
        </Accordion>
      ) : (
        <section>
          <BoxTitle />
          <Lists />
        </section>
      )}
    </div>
  );
}

export default StepLists;
