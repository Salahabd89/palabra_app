
import {useAuth} from '../utils/auth';
import SignIn from "../components/signin";
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
  const auth = useAuth();

  const signInWithEmailAndPassword = async (email, password) => {

    auth.signin(email, password)
    .then(() => {
        Router.push('/');
        Router.reload();
    })

    
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




