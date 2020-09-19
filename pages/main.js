import Head from 'next/head'

import Searchbar from '../components/search'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Container';
import {useStyles} from '../utils/style';


export default function Home() {

  const classes = useStyles();

  return (
    <>
      <Head>
        <link rel="stylesheet"  href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Box  className = {classes.box} >
         <Searchbar></Searchbar><br/>
        <Button className={classes.btn} href={'./addword'} >
          <Icon style={{ fontSize: 40 }} >add_circle</Icon>
        </Button>
      </Box>
    </>
  )
}

