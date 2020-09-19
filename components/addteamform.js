import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    box: {
  
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: '5%',
      textAlign: "center",
      marginLeft:'10%',
      marginRight:'10%'
    },
    card: {
  
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: '5%',
      width:'100%',
      textAlign: "center",


    },
    textfield:{
      width: '50%',
      marginTop:'5%',

    },
    button: {

      width: '155px',
      height: '45px',
      background: '#202020 0% 0% no-repeat padding-box',
      borderRadius: '80px',
      opacity: '1',
      display: "flex",
      justifyContent: "center",
      margin: 'auto',
      marginTop: '10%',
      marginBottom: '10%',
      color: 'white'
  }
  }));

  export default function AddTeam(props) {

    async function addTeam(e) {
  
        e.preventDefault();
        console.log(all)
        props.returnData(all);

    }
  
    const [all, setAll] = useState({ org: "", dept: "", team:"", ind:"", subind:"" });
    const classes = useStyles();
  
    return (
        <Box Container className={classes.box}>
        <Card>
        <TextField name ="org" value={all.org} onChange={e => setAll({ ...all, [event.target.name]: event.target.value })} 
                     className={classes.textfield}  label="Organisation" variant="outlined" />
        <br/>
        <TextField name ="dept" value={all.dept} onChange={e => setAll({ ...all, [event.target.name]: event.target.value })} 
                     className={classes.textfield}   className={classes.textfield}   label="Department" variant="outlined" />
        <br/>
        <TextField name ="team" value={all.team} onChange={e => setAll({ ...all, [event.target.name]: event.target.value })} 
                     className={classes.textfield}  className={classes.textfield}  label="Team Name" variant="outlined" />
        <br/>
        <TextField name ="ind" value={all.ind} onChange={e => setAll({ ...all, [event.target.name]: event.target.value })} 
                     className={classes.textfield}  className={classes.textfield}  label="Industry" variant="outlined" />
        <br/>
        <TextField name ="subind" value={all.subind} onChange={e => setAll({ ...all, [event.target.name]: event.target.value })} 
                     className={classes.textfield}  className={classes.textfield}  label="Sub Industry" variant="outlined" />
        <br/>
        <Button variant="contained" onClick={addTeam} className={classes.button} color="primary" >
           Create Team
        </Button>
        </Card>
        </Box>
    );
  }