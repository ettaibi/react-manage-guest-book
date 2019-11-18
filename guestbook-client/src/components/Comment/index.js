import React from "react";
import { Card, CardContent, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../Button";

const useStyles = makeStyles({
  card: {
    width: 345,
    padding: "5px",
    border: "solid 1px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Comment({
  form: { id, full_name, email, comment },
  created_at,
  last_updated,
  onDelete,
  onUpdate
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary" gutterBottom>
          {full_name.value}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          {email.value}
        </Typography>
        <Typography variant="body2" component="p">
          created At:{created_at}
        </Typography>
        <Typography variant="body2" component="p">
          last updated At:{last_updated}
        </Typography>
        <CardContent>
          <Box fontWeight="fontWeightBold">{comment.value}</Box>
        </CardContent>
      </CardContent>
      <CardContent>
        <Button
          label="Edit"
          onClick={() =>
            onUpdate({ created_at, id, full_name, email, comment })
          }
        />
        <Button label="delete" color="secondary" onClick={() => onDelete(id)} />
      </CardContent>
    </Card>
  );
}
