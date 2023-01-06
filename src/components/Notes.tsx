import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";

import NoteItem from "./NoteItem";
import { sortingAlgorithmsDetails } from "../utils/helper";

type NotesProps = {
  onCloseNotes: () => void;
  isNotesShown: boolean;
  data: any;
};
const Notes = (props: NotesProps) => {
  const [expanded, setExpanded] = useState("");
  const handleExpand = (algorithm: string, expanded: boolean) => {
    if (expanded) {
      setExpanded("");
    } else {
      setExpanded(algorithm);
    }
  };
  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={props.isNotesShown}
      onClose={props.onCloseNotes}
      PaperProps={{
        sx: { width: 300, padding: 1 },
      }}
    >
      <button className="close-btn" onClick={props.onCloseNotes}>
        <CloseIcon />
      </button>
      <h2>Sorting Algorithms</h2>
      {sortingAlgorithmsDetails.map((item) => (
        <NoteItem
          onExpand={handleExpand}
          expanded={expanded}
          key={item.name}
          item={item}
        />
      ))}
    </Drawer>
  );
};

export default Notes;
