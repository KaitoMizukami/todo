import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Todo from "./components/Todo/Todo";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <Todo />
  </StrictMode>
);
