import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import imageHelp from "./../../../assets/images/nbn-account@3x.jpg";
import ArrowDownSvgIcon from "./../../../components/arrowDownSvgIcon";
import AccordionComponent from "../../../components/Accordion-component";
// import AccordionComponent from "../../../components/Accordion-component";

const AccordionHelp = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {/* <AccordionComponent summary="fff" details="det" panelName="panel5" defaultPanel="panel1"></AccordionComponent> */}

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownSvgIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ flexShrink: 0, color:"black" }} variant="subtitle1">
            How to login with nbn. Mobile broadband or Home internet
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            If you have an nbn™, mobile broadband or home internet service, and
            a mobile phone service with us, you can log in using your mobile
            phone number. Once you've logged in, you can switch to your other
            service on the My Vodafone dashboard.
          </Typography>
          <img src={imageHelp} alt="" width="400px"></img>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownSvgIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ flexShrink: 0 }} variant="subtitle1">
            I'm having issues logging in.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownSvgIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ flexShrink: 0 }} variant="subtitle1">
            I didn't receive an SMS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ArrowDownSvgIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ flexShrink: 0 }} variant="subtitle1">
            I have a corporate or government account
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle2">
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionHelp;
