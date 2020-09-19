import React, { useState } from 'react';
import Teamform from './../components/addteamform';
import axios from 'axios';

  export default function Teams() {

    const [team, setTeam] =  useState([]);

    const getData = async (team) => {

      setTeam({ team })
  
      await axios.get(`/api/teams/add`, { params: team }, { headers: { 'Content-Type': 'application/json' }, credentials: 'include' })
        .then(function (response) {
  
          if (response.data.added == true) {
           
          }
        })
        
        .catch(function (error) {
          console.log(error);
        });
    }
  
    return (

      <Teamform returnData={getData}></Teamform>
       
    )
  }