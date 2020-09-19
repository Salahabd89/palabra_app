import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    top: "0px",
    left: "0px",
    background: "#202020",
    border: "1px solid #707070",
    opacity: "1",
    position: "static",
  },
  rightside: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
    primary: {
      main: "white",
    },
  },
  leftside: {
    marginLeft: theme.spacing(2),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const loggedInStatus = () => {
    setLoggedInUser(null);

    props.logout(true);
  };

  const handleChange = () => {};

  useEffect(() => {
    setLoggedInUser(props.user);
    setLoggedIn(props.loggedInState);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.rightside}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              underline="none"
              href="./"
            >
              Palabra
            </Link>
          </Typography>

          {props.loggedInState == false ? (
            <Typography>
              <Link
                className={classes.leftside}
                style={{ textDecoration: "none", color: "white" }}
                underline="none"
                href="../login"
              >
                Login
              </Link>
              <Link
                className={classes.leftside}
                style={{ textDecoration: "none", color: "white" }}
                underline="none"
                href="../signup"
              >
                Sign Up
              </Link>
            </Typography>
          ) : (
            <>
              <Select
                variant={"outlined"}
                onChange={handleChange}
                className={classes.select}
              ></Select>
              <Button href="../userprofile" color="inherit">
                {props.user}
              </Button>
              <Button href="../console" color="inherit">
                {"Console"}
              </Button>
              <Button color="inherit" onClick={loggedInStatus}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

/*         {teamMenu(teamCol)}*/
