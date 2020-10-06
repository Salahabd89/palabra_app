import React, { useState } from "react";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: "5%",
    marginLeft: "5%",
    textAlign: "center",
    width: "50%",
  },
  button: {
    width: "105px",
    height: "25px",
    background: "#202020 0% 0% no-repeat padding-box",
    borderRadius: "80px",
    opacity: "1",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    marginTop: "5%",
    color: "white",
  },
}));

const SignIn = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    props.Signin(email, password);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <div>
      <Typography>Sign In</Typography>
      <TextField
        id="outlined-basic"
        label="Email"
        value={email}
        name="userEmail"
        className={classes.field}
        onChange={(event) => onChangeHandler(event)}
        variant="outlined"
      />
      <br />
      <TextField
        id="outlined-basic"
        label="password"
        value={password}
        type="password"
        className={classes.field}
        name="userPassword"
        onChange={(event) => onChangeHandler(event)}
        variant="outlined"
      />
      <br />
      <Button
        variant="contained"
        className={classes.button}
        color="primary"
        onClick={(event) => {
          signInWithEmailAndPasswordHandler(event, email, password);
        }}
      >
        Log On
      </Button>
      <br />
      <Typography>
        Don't have an account?
        <br />
        <Link href="/signup" as="/signup">
          Sign up here
        </Link>
      </Typography>
    </div>
  );
};

export default SignIn;
