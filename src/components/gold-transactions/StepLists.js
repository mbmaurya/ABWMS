import React, { useState } from "react";
import { Image, Button, Card, Accordion } from "react-bootstrap";
import {
  goldTitle,
  stepsDiv,
  stepsListItem,
  listIcon,
  subTitle,
} from "../../styles";

function StepLists({ listTitle, listSubTitle, stepsList, listSecondaryTitle }) {
  const isMobile = window.innerWidth <= 992;

  const BoxTitle = () => {
    return (
      <>
        <h3 style={{ ...goldTitle, color: "black", marginBottom: 0 }}>
          {listTitle}
        </h3>
        <p style={subTitle}>{listSubTitle}</p>
      </>
    );
  };

  const Lists = () => {
    return (
      <ul style={{ marginTop: "28px" }}>
        {(stepsList || []).map((list, i) => {
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
          <Accordion.Toggle
            as={Button}
            variant="link"
            eventKey="0"
            style={{ textAlign: "left" }}
          >
            <BoxTitle />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Lists />
          </Accordion.Collapse>
        </Accordion>
      ) : (
        <section>
          <BoxTitle />
          <h3
            style={{
              ...goldTitle,
              color: "black",
              marginBottom: 0,
              marginTop: 30,
            }}
          >
            {listSecondaryTitle ? listSecondaryTitle : null}
          </h3>
          <Lists />
        </section>
      )}
    </div>
  );
}

export default StepLists;
