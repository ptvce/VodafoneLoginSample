import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ArrowDownSvgIcon from "./arrowDownSvgIcon";

const AccordionComponent = ({ accordionInfo }) => {
  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {accordionInfo.map((item, index) => (
        <div id={`panel${index}`}>
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ArrowDownSvgIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                sx={{ flexShrink: 0, color: "black" }}
                variant="subtitle1"
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="subtitle2">{item.summary}</Typography>
              <img src={item.image} alt="" width="400px"></img>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default AccordionComponent;
