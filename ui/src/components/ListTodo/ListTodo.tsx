import React, { useState, useEffect } from "react";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TodoType } from "../../common/type";
import { getTodo } from "../../mock/todo";

export default function ListTodo() {
  const [todo, setTodo] = useState<TodoType[]>();

  useEffect(() => {
    setTodo(getTodo());
  });

  return (
    <List>
      {todo?.map((td) => (
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" sx={{ color: "red" }}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemIcon>
            <Checkbox edge="start" checked={td.hasCompleted} />
          </ListItemIcon>
          <ListItemText primary={td.name} />
        </ListItem>
      ))}
    </List>
  );
}
