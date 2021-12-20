import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import Thoughts from './components/Thoughts'
import Form from './components/Form'
import {TextField, Button} from '@material-ui/core'
import { createThought, getThoughts } from './api';
import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react'



const App = () => {
  const { user , isAuthenticated} = useAuth0();
  const [messages, setMessages] = useState([]);

  let myLong = 0, myLat = 0;
  const getNearMessages = () => {

    if ("geolocation" in navigator) {
      console.log("Available")
      navigator.geolocation.getCurrentPosition((position) => {

          myLong = position.coords.longitude
          myLat = position.coords.latitude
          console.log("My Coords: " + myLong + " " + myLat)

          axios.get(`http://localhost:5000/near/${myLong}/${myLat}`).then(res => {
          console.log("inside get() " + myLong + " " + myLat);
          console.log(res.data)
          const allMessages = res.data
          setMessages(allMessages)

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

  let authButton;
  if (isAuthenticated) {
    authButton = <LogoutButton/>
  } else {
    authButton = <LoginButton/>
  }

  console.log("AUTH " , isAuthenticated)
  return (
    <div>
      {authButton}
      <Profile/>
      <h1>Thought Bubble</h1>
      <Form submittingRequest={submittingRequest}/>
      <Thoughts messages={messages}/>
    </div>
  );
}

export default App;
