import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import Thoughts from './components/Thoughts'
import Form from './components/Form'
import {TextField, Button} from '@material-ui/core'
import { createThought, getThoughts } from './api';

const App = () => {

  const [messages, setMessages] = useState([]);

  let myLong = 0, myLat = 0;
  const getNearMessages = () => {

    if ("geolocation" in navigator) {
      console.log("Available")
      navigator.geolocation.getCurrentPosition((position) => {
          // console.log(position.coords)
          // currentPost.coordinates = [position.coords.longitude, position.coords.latitude]
          myLong = position.coords.longitude
          myLat = position = position.coords.latitude
          console.log("My Coords: " + myLong + " " + myLat)

          axios.get(`http://localhost:5000/near/${myLong}/${myLat}`).then(res => {
          console.log("inside get() " + myLong + " " + myLat);
          console.log(res.data)
          const allMessages = res.data
          setMessages(allMessages)
          // console.log("messages", messages)
    })
      })
    } else {
        console.log("Not Available")
    }

    
  }

  const getAllMessages = () => {
    axios.get('http://localhost:5000').then(res=> {
      console.log(res)
    })
  }

  useEffect(async () => {
    getNearMessages();
  }, [])

  const submittingRequest = async (p) => {
    console.log("SUBMITTING REQUEST " + p)
    await createThought(p)
    getNearMessages()
  }

  return (
    <div>
      <h1>Thought Bubble</h1>
      <Form submittingRequest={submittingRequest}/>
      <Thoughts messages={messages}/>
    </div>
  );
}

export default App;
