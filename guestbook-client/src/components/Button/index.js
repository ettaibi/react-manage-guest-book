import React from "react";
import { Button } from "@material-ui/core";

export default function MaterialButton({ label, ...props }) {
  return (
    <Button variant="contained" color="primary" {...props}>
      {label}
    </Button>
  );
}
