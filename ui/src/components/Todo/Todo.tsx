import Header from "../Header/Header";
import { Box, Container } from "@mui/material";
import NewTask from "../NewTodo/NewTodo";
import ListTodo from "../ListTodo/ListTodo";

export default function Todo() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <NewTask />
        <ListTodo />
      </Container>
    </Box>
  );
}
