import { Button, TextField, Box } from "@mui/material";

export default function NewTask() {
  return (
    <Box sx={{ display: "flex", mb: 3 }}>
      <TextField
        fullWidth
        placeholder="Add new todo"
        variant="outlined"
        size="small"
      />
      <Button variant="contained" color="success" sx={{ ml: 2 }}>
        Add
      </Button>
    </Box>
  );
}
