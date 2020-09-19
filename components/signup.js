import React, { useContext, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  field: {

    marginTop: '5%',
    marginLeft: '5%',
    textAlign: "center",
    width: '50%'
  },
  button: {

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
  }
}));


const SignUp = (props) => {

  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, displayName, email, password) => {
    event.preventDefault();
    try {
      props.signupDetails(displayName, email, password);
    }
    catch (error) {
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (

    <div>
      <Typography>Sign Up</Typography>
      <TextField id="outlined-basic"
        type="text"
        className={classes.field}
        name="displayName"
        variant="outlined"
        placeholder="Display Name"
        value={displayName}
        id="displayName"
        onChange={event => onChangeHandler(event)} />
      <br />
      <TextField id="outlined-basic"
        type="email"
        variant="outlined"
        className={classes.field}
        name="userEmail"
        value={email}
        placeholder="Email"
        id="userEmail"
        onChange={event => onChangeHandler(event)}
      />
      <br />
      <TextField id="outlined-basic"
        type="password"
        variant="outlined"
        className={classes.field}
        name="userPassword"
        value={password}
        placeholder="Password"
        id="userPassword"
        onChange={event => onChangeHandler(event)}
      />
      <br />
      <Button
        variant="contained"
        className={classes.button}
        color="primary" 

        onClick={event => {
          createUserWithEmailAndPasswordHandler(event, displayName, email, password);
        }}>
        Log On
     </Button>
    </div>

  );
};

export default SignUp;