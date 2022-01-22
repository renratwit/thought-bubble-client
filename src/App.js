import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import Thoughts from './components/Thoughts'
import Form from './components/Form'
import {TextField, Button} from '@material-ui/core'
import { createThought, getThoughts, getNeabyThoughts} from './api';
import { getUser } from './api';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react'



const App = () => {
  const { user , isAuthenticated, isLoading} = useAuth0();
  console.log(user)

  const [messages, setMessages] = useState([]);

  let myLong = 0, myLat = 0;
  const getNearMessages = async () => {

    if ("geolocation" in navigator) {
      console.log("Available")
      navigator.geolocation.getCurrentPosition((position) => {

          myLong = position.coords.longitude
          myLat = position.coords.latitude
          console.log("My Coords: " + myLong + " " + myLat)

          getNeabyThoughts(myLong, myLat).then((res) => {
            setMessages(res.data)
          })
      })
    } else {
        console.log("Not Available")
    }

    
  }

  useEffect(async () => {
    getNearMessages();
    console.log(isAuthenticated)
  }, [])

  const submittingRequest = async (p) => {
    console.log("SUBMITTING REQUEST " + p)
    await createThought(p)
    getNearMessages()
    window.location.reload(false);
  }


  return (
    <div>
      {/* {authButton} */}
      <Profile/>
      <h1 className="title">Thought Bubble</h1>
      <Form submittingRequest={submittingRequest} user={user}/>
      <Thoughts messages={messages}/>
    </div>
  );
}

export default App;
