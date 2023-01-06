import React from "react";
import { Accordion, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import { algorithmDetails } from "../utils/helper";

type NoteItemProps = {
  item: algorithmDetails;
  expanded: string;
  onExpand: (algorithm: string, expanded: boolean) => void;
};
const NoteItem = (props: NoteItemProps) => {
  return (
    <Accordion
      expanded={props.expanded === props.item.name}
      onChange={(
        event: React.SyntheticEvent<Element, Event>,
        expanded: boolean
      ) => {
        props.onExpand(props.item.name, !expanded);
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {props.item.name.split(" ")[0][0].toUpperCase() +
          props.item.name.slice(1)}{" "}
        Sort
      </AccordionSummary>
      <AccordionDetails>
        <div>
          <p>{`Time Complexity : ${props.item.timeComplexity} `}</p>
          <p>{`Space Complexity : ${props.item.spaceComplexity} `}</p>
          <p>{props.item.isStable ? "Stable" : "Unstable"}</p>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default NoteItem;
