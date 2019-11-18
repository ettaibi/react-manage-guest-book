import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextareaAutosize, FormControl } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "30px"
  },
  formControl: {
    margin: theme.spacing(1)
  },
  textArea: {
    width: "500px"
  }
}));

export default function TextArea({ ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <FormControl className={classes.formControl}>
        <TextareaAutosize
          rows={10}
          className={classes.textArea}
          onChange={e => console.log(e)}
          {...props}
        />
      </FormControl>
    </div>
  );
}
