import React from "react";
import { Typography } from "@material-ui/core";

export default function Title({ label, ...props }) {
  return (
    <Typography variant="h6" gutterBottom {...props}>
      {label}
    </Typography>
  );
}
