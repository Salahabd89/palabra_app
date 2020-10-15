import { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { useStyles } from "../utils/style";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";

export default function Console() {
  const classes = useStyles();

  return (
    <>
      <Grid
        style={{ padding: "105px" }}
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} md={3}>
          <Link href={{ pathname: "addword" }} as={`addword`}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Add Word
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Define a word that you think may benfifit yourself or those
                    in your teams
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>
        <Link href={{ pathname: "listwords" }} as={`listwords`}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    View Glossary
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Check out words you and your team has defined
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Link>
        <Link href={{ pathname: "teams" }} as={`teams`}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Create a Team
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Create a new team to beging sharing important words with
                    each other
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Link>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Team Settings
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Create a new team to beging sharing important words with each
                  other
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

const fetchData = async (query, auth) =>
  await fetch(`/api/console/${query.def}`, { headers: { auth: auth } })
    .then((res) => ({
      team: res.data,
    }))
    .catch(() => ({
      error: true,
    }));

export async function getServerSideProps(context) {
  let cookie = context.req.headers.cookie;
  const teams = [];

  if(typeof cookie !== 'undefined'){

  let auth = cookie
    .split("; ")
    .find((row) => row.startsWith("auth"))
    .split("=")[1];
 

  const teams = await fetchData(context.query, auth);
}

  return {
    props: {
      team: teams,
    },
  };
}
