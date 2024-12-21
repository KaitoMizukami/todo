import React from "react";
import { Button, TextField, Box } from "@mui/material";

export default function NewTask() {
  return (
    <Box sx={{ display: "flex", mb: 3 }}>
      <TextField
        fullWidth
        placeholder="新しいタスクを入力"
        variant="outlined"
        size="small"
      />
      <Button variant="contained" color="success" sx={{ ml: 2 }}>
        追加
      </Button>
    </Box>
  );
}
