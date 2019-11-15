import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    width: "500px",
    margin: theme.spacing(1)
  }
}));

export default function ComposedTextField({ label, valid, ...props }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <TextField {...props} label={label} />
      </FormControl>
    </div>
  );
}
