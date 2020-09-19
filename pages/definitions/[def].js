
import axios from 'axios';
import Wordcard from '../../components/wordcard'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import ListTopics from '../../components/topics';
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { withRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  
  box: {

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: '5%',
    marginLeft: '20%',
    marginRight: '20%',
    textAlign: "center"

  }
}));

function definitions({ definition, word }) {
  console.log(definition.definition[0].topics)
  let def = definition.definition[0].definition;
  let words = word
  let classes = useStyles();

  return (
    <>
    <ListTopics topics = {definition.definition[0].topics}></ListTopics>
    <Box Container className={classes.box}>
      <Card>
        <Wordcard word={words} definition={def} />
      </Card>
    </Box>
    </>
  )
}

const fetchData = async (query, auth) =>  await axios.get(`http://localhost:5050/api/definition/${query.def}`, {headers: {auth: auth} })
  .then(res => ({
    definition: res.data
  }))
  .catch(() => ({
    error: true
  }),
  );

export async function getServerSideProps(context) {

  let cookie = context.req.headers.cookie

  let auth  =  cookie.split('; ')
  .find(row => row.startsWith('auth'))
  .split('=')[1]
  console.log(auth)
  const definition = await fetchData(context.query, auth);

  return {
    props: {
      definition: definition,
      word: context.query.def
    }
  }
}

export default definitions