import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios';
import Thoughts from './components/Thoughts'
import Form from './components/Form'
import {TextField, Button} from '@material-ui/core'
import { createThought, getThoughts } from './api';
import { getUser } from './api';
import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react'



const App = () => {
  const { user , isAuthenticated, isLoading} = useAuth0();
  console.log(user)

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

  const handleGetUserData = async () => {
    if (isLoading || !isAuthenticated) return;

    try {
      const USER_DATA = user;
      let returnUserData = await getUser(USER_DATA);
      console.log(returnUserData)
    } catch (e) {console.error(e)}
    
  }

  // if (user) handleCreateUser();

  const getAllMessages = () => {
    axios.get('http://localhost:5000').then(res=> {
      console.log(res)
    })
  }

  useEffect(async () => {
    getNearMessages();
    console.log(isAuthenticated)
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
  if (isLoading) return <div>Loading</div>
  if (!isAuthenticated) return <LoginButton/>
  return (
    <div>
      <button onClick={() => handleGetUserData()}>Test</button>
      {authButton}
      <Profile/>
      <h1>Thought Bubble</h1>
      <Form submittingRequest={submittingRequest} user={user}/>
      <Thoughts messages={messages}/>
    </div>
  );
}

export default App;
