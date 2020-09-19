import axios from 'axios';
import Link from 'next/link';
import Profile from './../components/profile';
import { fade, makeStyles } from '@material-ui/core/styles';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

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

function UserProfile() {

  const [userinfo, getuserinfo] =  useState({displayName: "", email: ""})

  const fetchData = async () => {

    let response  = await axios.get(`/api/auth/user`,  { headers: { 'Content-Type': 'application/json' }, credentials: 'include' })
      .then(res =>  res )
      .catch(() => ({
        error: true,
        wordlist: null}));
    }

  useEffect(()=>{

    fetchData()

  },[])

  return (
    <Profile props={userinfo}></Profile>
  )
}



export default UserProfile

