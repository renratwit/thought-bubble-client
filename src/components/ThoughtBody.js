import React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios';
import Thoughts from './Thoughts'
import Form from './Form'
import {TextField, Button} from '@material-ui/core'
import { createThought, getThoughts, getNeabyThoughts} from './../api';
import jwt from 'jsonwebtoken';


export default function ThoughtBody() {
    const [messages, setMessages] = useState([]);

  let myLong = 0, myLat = 0;
  const getNearMessages = async () => {

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

          myLong = position.coords.longitude
          myLat = position.coords.latitude
          console.log("My Coords: " + myLong + " " + myLat)

          getNeabyThoughts(myLong, myLat).then((res) => {
            setMessages(res.data)
          })
      })
    } else {
        console.log("Geolocation Not Available")
    }

    
  }

  useEffect(async () => {
    getNearMessages();
    
    const token = localStorage.getItem('token');
    if (token) {
      const user = jwt.decode(token);
      console.log(user)
      if (!user) {
        localStorage.removeItem(token);
        alert('no user found error')
      }
    }
  }, [])

  const submittingRequest = async (p) => {
    console.log("SUBMITTING REQUEST " + p)
    await createThought(p)
    getNearMessages()
    window.location.reload(false);
  }
  return (
    <div>
        <h1 className="title">Thought Bubble</h1>
        <Form submittingRequest={submittingRequest}/>
        <Thoughts messages={messages}/>
    </div>
  );
}
