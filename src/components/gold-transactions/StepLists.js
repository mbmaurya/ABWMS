import React, { useState, useRef } from "react";
import { Image, Button, Card, Accordion } from "react-bootstrap";
import {
  goldTitle,
  stepsDiv,
  stepsListItem,
  listIcon,
  subTitle,
  box
} from "../../styles";
import AccordionArrow from "../../assets/images/transaction/accordion.png";

function StepLists({ listTitle, listSubTitle, stepsList, listSecondaryTitle, type }) {
  const isMobile = window.innerWidth <= 992;
  const refAccordionArrow = useRef("");
  const rotateArrow = () => {
    if(refAccordionArrow.current.style.transform === "rotate(180deg)") {
      refAccordionArrow.current.style.transform = "rotate(0deg)"
    } else {
      refAccordionArrow.current.style.transform = "rotate(180deg)"
    }
  }

  const BoxTitle = () => {
    return (
      <>
        <h3 style={{ ...goldTitle, color: "black", marginBottom: 0, paddingBottom: "10px", paddingTop: "5px", textDecoration: "none" }}>
          {listTitle}
        </h3>
        <img ref={refAccordionArrow} src={AccordionArrow} style={{position: "absolute", top: "10px", right: "0px"}}/>
        {type === "deliver" ?
          <p style={subTitle}>{listSubTitle}</p>:
          ""
    }
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
            style={{textAlign: "left", display: "block",
            width: "100%", padding: "0px", position: "relative" }}
            onClick={rotateArrow}
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
