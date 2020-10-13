import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useSelector } from "react-redux";
import jsCookie from "js-cookie";

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
    marginRight: theme.spacing(2),
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
  const [avialableTeams, setTeams] = useState([]);
  const [currentTeam, setCurrentTeams] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const loggedInStatus = () => {
    setLoggedInUser(null);

    props.logout(true);
  };

  const handleChange = (event) => {
    jsCookie.set("team", event.target.value);
    setCurrentTeams(event.target.value);
  };

  const ButtonLink = ({ className, href,pathname, hrefAs, children }) => (
    <Link href={href} pathname={pathname} as={hrefAs}>
      <a className={className}>{children}</a>
    </Link>
  );

  useEffect(() => {
    let displayName = localStorage.getItem("displayName");
    let teams = localStorage.getItem("teams");

    if (localStorage.getItem("selectedteams") != null) {
      setCurrentTeams(jsCookie.get("team"));
    }

    if (teams != "undefined") {
      let teamList = JSON.parse(teams);
      setTeams(teamList);
    }

    setLoggedInUser(displayName);

    setLoggedIn(props.loggedInState);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Button
            className={classes.rightside}
            component={ButtonLink}
            href={"/"}
            hrefAs={"/"}
            color="inherit"
          >
            Palabra
          </Button>
          {props.loggedInState == false ? (
            <Typography>
              <Button
                className={classes.leftside}
                component={ButtonLink}
                href={"/login"}
                color="inherit"
                hrefAs={"/login"}
                pathname={"/login"}
              >
                Login
              </Button>
              <Button
                className={classes.leftside}
                component={ButtonLink}
                href={"/signup"}
                color="inherit"
                hrefAs={"/signup"}
                pathname={"/signup"}
              >
                Sign Up
              </Button>
            </Typography>
          ) : (
            <>
              <Select
                value={currentTeam}
                style={{
                  background: "white",
                  width: "10%",
                  height: "25px",
                  marginRight: "25px",
                }}
                variant={"outlined"}
                onChange={handleChange}
              >
                {avialableTeams != null ? (
                  avialableTeams.map((teams) => {
                    return (
                      <MenuItem
                        selected
                        style={{ backgroundColor: "white" }}
                        value={teams}
                      >
                        {teams}
                      </MenuItem>
                    );
                  })
                ) : (
                  <MenuItem />
                )}
              </Select>
              <Button
                component={ButtonLink}
                href={"/userprofile"}
                color="inherit"
                hrefAs={"/userprofile"}
                pathname={"/userprofile"}
              >
                {props.user}
              </Button>
              <Button
                component={ButtonLink}
                href={"/console"}
                hrefAs={"/console"}
                color="inherit"
                pathname={"/console"}
              >
                Console
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
