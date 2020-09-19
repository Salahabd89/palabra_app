import axios from 'axios';
import Link from 'next/link';
import Wordcard from '../components/wordcard';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import cookie  from 'js-cookie';
import { parseCookies, setCookie, destroyCookie } from 'nookies'

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



function listwords() {

  const classes = useStyles();

  const [words, Setwordlist] =  useState([]);

  function gotToDef(word) {
    console.log(word)
  }

  const cookies = parseCookies()

  const fetchData = async () => {
    let response = await axios.get(`/api/words`, { headers: { 'Content-Type': 'application/json' } })
    .then(res => res)
   
    Setwordlist(response.data.tempDoc) 

  }

  useEffect(()=>{

    fetchData()
  
  },[])

  return (
    <Box Container className={classes.box}>
    <div>
        {words.map(function (item, i) {
         return <Link  href= {{ pathname: '/definitions/[def]'}} as={`definitions/${item.word}`}>
          <Card key={i} className={classes.card} onClick={gotToDef("ff")}> <Wordcard
            word={item.word}
            definition={item.definition}
          >
          </Wordcard>
          </Card>
          </Link>
        })}
      </div>
    </Box>
  )
}

export default listwords

