import Signup from '../components/signup'
import axios from 'axios';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export default function signup() {

  const useStyles = makeStyles((theme) => ({

    box: {

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: '5%',
      marginLeft: '20%',
      marginRight: '20%',
      textAlign: "center"
    },
    card: {

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: '5%',
      marginLeft: '20%',
      marginRight: '20%',
      textAlign: "center"
    }
  }));

  const classes = useStyles();

  const createUserWithEmailAndPasswordHandler = async (displayName, email, password) => {
    try {
      console.log({ displayName, email, password })
      await axios.get(`/api/auth/signup`, { params: { displayName, email, password } }, 
                                          { headers: { 'Content-Type': 'application/json' } })
        .then(response => (console.log(response)))

    }
    catch (error) {

    }
  };

  return (
    <div>
      <Box Container className={classes.box}>
        <Card>
          <Signup signupDetails={createUserWithEmailAndPasswordHandler} ></Signup>
        </Card>
      </Box>
    </div>
  )

}