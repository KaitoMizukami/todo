import React from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ListTodo() {
  return (
    <List>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" sx={{ color: "red" }}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemIcon>
          <Checkbox edge="start" />
        </ListItemIcon>
        <ListItemText primary={`タスク`} />
      </ListItem>
    </List>
  );
}
