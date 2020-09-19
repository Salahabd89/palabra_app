
import { useState, useContext } from 'react'
import Addwordform from '../components/add'
import axios from 'axios';
import Router from 'next/router';
import { UserContext } from '../providers/userProvider';

export default function addword() {

  const [wordanddef, setWordandDef] = useState({ word: '', definition: '', topics:[] });
  const [topics, setTopics] = useState([]);
  const user = useContext(UserContext);

  const getData = async (word) => {

    let termtoadd = { word: word.word, definition: word.definition, topics: topics };
    setWordandDef({ termtoadd })

    await axios.get(`/api/add`, { params: termtoadd }, { headers: { 'Content-Type': 'application/json' }, credentials: 'include' })
      .then(function (response) {

        if (response.data.added == true) {
          Router.push('/congrats')
        }
      })
      
      .catch(function (error) {
        console.log(error);
      });
  }

  const getTopics= async (definition) => {
    
    let topics  = []

    await axios.get(`/api/topics/`, { params: definition }, { headers: { 'Content-Type': 'application/json' }})
      .then(function (response) {
     
        {response.data.result[0].map((data, i) => {
          topics.push(data.term)
          console.log(topics)
        })}

        setTopics(topics)

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
      <Addwordform returnData={getData} returnTopics={getTopics} topics={topics}></Addwordform>
  )
}
