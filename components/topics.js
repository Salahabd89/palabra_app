import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  topics: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5%",
  },

  chip: {
    margin: theme.spacing(0.5),
  },
}));

function listTopics(props) {
  const classes = useStyles();

  var list_of_topics = "";

  if (props.topics != null) {
    var list_of_topics = props.topics.map((data, i) => {
      return <Chip label={data} className={classes.chip} />;
    });
  }

  return <Paper className={classes.topics}>{list_of_topics}</Paper>;
}

export default listTopics;
