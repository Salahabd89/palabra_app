import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';
import ShowMoreText from "react-show-more-text";
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';



const Wordcard = props => {
  const { word, definition, topics } = props;
  const [expand, setExpand] = useState(false);
  const onClick = () => {
    setExpand(!expand);
  };


  return (
    <>
    <CardContent>
      <Typography variant="h5" component="h1">
        {word}
      </Typography>
      <br />

      <Typography align='left' paragraph variant="body1">
        <ShowMoreText
          lines={15}
          more="Show More"
          less="Show Less"
          onClick={onClick}
          expanded={false}
        >
          {definition.split('\n').map((i, key) => {
            return <Typography align='left' key={key} paragraph variant="body1">{i}</Typography>;
          })}
        </ShowMoreText>
      </Typography>
    </CardContent>
    </>
  );
};

export default Wordcard;