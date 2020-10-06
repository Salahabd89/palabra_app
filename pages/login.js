import SignIn from "../components/signin";
import axios from "axios";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "5%",
    marginLeft: "20%",
    marginRight: "20%",
    textAlign: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "5%",
    marginLeft: "20%",
    marginRight: "20%",
    textAlign: "center",
  },
}));

function Signin() {
  const classes = useStyles();

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      const useruid = await axios
        .get(
          `/api/auth/signin`,
          { params: { email, password } },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => response);

      if (useruid.data.userInfo.uid.length > 0) {
        localStorage.setItem("displayName", useruid.data.userInfo.displayName);
        localStorage.setItem(
          "teams",
          JSON.stringify(useruid.data.userInfo.team)
        );

        Router.push({
          pathname: "/console",
        });
        Router.reload();
      }
    } catch (error) {}
  };

  return (
    <div>
      <Box Container className={classes.box}>
        <Card>
          <SignIn Signin={signInWithEmailAndPassword}></SignIn>
        </Card>
      </Box>
    </div>
  );
}

export default Signin;
