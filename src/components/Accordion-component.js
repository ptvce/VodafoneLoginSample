import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import imageHelp from "./../assets/images/nbn-account@3x.jpg";
import ArrowDownSvgIcon from "./arrowDownSvgIcon";

const AccordionComponent = ({ summary, details, panelName, defaultPanel }) => {
  const [expanded, setExpanded] = useState(defaultPanel);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(!isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === { panelName }}
        onChange={handleChange(panelName)}
      >
        <AccordionSummary
          expandIcon={<ArrowDownSvgIcon />}
          aria-controls={`${panelName} bh-content`}
          id={`${panelName} bh-header`}
        >
          <Typography sx={{ flexShrink: 0 }}>{summary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{details}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
