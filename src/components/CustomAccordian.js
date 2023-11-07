import { Accordion, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { useState } from "react";
const AccordionDetail = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0.9),
  marginLeft: ".6rem",
}));
export default function CustomAccordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  const AccordionStyle = {
    color: isActive ? "black" : "hsl(240, 6%, 50%)",
    border: "none",
    "&:hover": {
      color: isActive ? "black" : "hsl(14, 88%, 65%)",
    },
  };

  return (
    <Accordion onChange={() => setIsActive(!isActive)} disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="icon-color" />}
        aria-controls="panel-content"
        id="panel-header"
        sx={AccordionStyle}
      >
        <Typography sx={{ fontSize: "14px" }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetail>
        <Typography color={"hsl(240, 6%, 50%)"} style={{ fontSize: "12px" }}>
          {content}
        </Typography>
      </AccordionDetail>
    </Accordion>
  );
}
