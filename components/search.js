import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useStyles} from '../utils/style'; 

export default function Searchbar() {

  const classes = useStyles();

  return (
            <TextField
            label="Search"
            className={classes.searchBar} 
            id="outlined-margin-dense"
            margin="dense"
            fullWidth
            variant="outlined"
          />
  );
}

