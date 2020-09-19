import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Wordcard from '../components/wordcard';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import ListTopics from './topics';



const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '0%',
    marginRight: '50%',
    marginLeft: '50%'
  },
  grid: {
    spacing: 24,
    direction: "column",
    alignItems: "center",
    justify: "center"
  },
  defInput: {

    opacity: '1',
    marginBottom: '5%'

  },
  preview: {

    width: '105px',
    height: '25px',
    background: '#202020 0% 0% no-repeat padding-box',
    borderRadius: '80px',
    opacity: '1',
    display: "flex",
    justifyContent: "center",
    margin: 'auto',
    marginTop: '5%',
    color: 'white'

  },
  add: {

    width: '105px',
    height: '25px',
    background: '#202020 0% 0% no-repeat padding-box',
    borderRadius: '80px',
    opacity: '1',
    display: "flex",
    justifyContent: "center",
    margin: 'auto',
    marginBottom: '5%',
    marginTop: '5%',
    color: 'white'

  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '500px'
  },
  termInput: {

    opacity: '1',
    marginBottom: '5%'

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 38,
  },
  pos: {
    marginBottom: 32,
  },
  topics:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: '5%'
  },
  box: {

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: '5%',
    marginLeft: '20%',
    marginRight: '20%',
    textAlign: "center"

  },
  chip: {
    margin: theme.spacing(0.5),
  }
}));

export default function addwordform(props) {

  const classes = useStyles();
  const [ispreview, setPreview] = useState(false);
  const [all, setAll] = useState({ word: "", definition: "" });
  const [topics, getTopics] = useState([]);

  const sendPreview = (e) => {

    e.preventDefault();
    props.returnTopics(all.definition);
    setPreview(true)

  }

  async function addWord(e) {

    e.preventDefault();
    props.returnData(all);
  }

  const cancelPreview = (e) => {

    e.preventDefault();
    setPreview(false)

  }

  const edit = (e) => {

    e.preventDefault();
    setPreview(false)

  }

  useEffect(() => {

    if (props.clear == true) {
      clear()
    }

  }, [props.clear])

  function clear() {

    setAll({ word: "", definition: "" });
  }

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };


  return (
    <>
      {ispreview == false ?

        <Box Container className={classes.box}>
          <TextField name="word"
            variant="outlined"
            value={all.word}
            fullWidth
            className={classes.termInput}
            onChange={e => setAll({ ...all, [event.target.name]: event.target.value })} label="Word" />

          <TextField name="definition"
            variant="outlined"
            className={classes.defInput}
            value={all.definition}
            onChange={e => setAll({ ...all, [event.target.name]: event.target.value })} multiline rows={10} label="Definition" />

          <Button variant="outlined" className={classes.preview} onClick={sendPreview}  >
            <Typography >
              Preview
          </Typography>
          </Button>
        </Box>
        :
        <>
          <ListTopics topics= {props.topics}></ListTopics>
          <Box Container className={classes.box}>
            <Card>
              <Wordcard word={all.word} definition={all.definition} />
              <CardActions>
                <Button className={classes.add} variant="outlined" onClick={addWord} >
                  add
                 </Button>
                <Button className={classes.add} variant="outlined" onClick={cancelPreview} >
                  cancel
                 </Button>
                <Button className={classes.add} variant="outlined" onClick={edit} >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Box>
        </>
      }
    </>
  );
}

