import React from 'react'
import {TextField, Button} from '@material-ui/core'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { createThought, getThoughts } from '../api'
import { useAuth0 } from '@auth0/auth0-react'

const Form = ({submittingRequest, user}) => {
    const [messages, setMessages] = useState([]);
    const [loggedUser, setLoggedUser] = useState(user.email);

    // console.log(user)

    const [currentPost, setCurrentPost] = useState({
        message: '',
        creator: loggedUser,
        rating: 0,
        upvoted: [],
        downVoted: [],
        location: {
            type: "Point",
            coordinates: []
        },
        dateCreated: Date.now(),
      })
      
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentPost.message.length === 0) return;
        currentPost.creator = user.email;
        submittingRequest(currentPost)
        currentPost.message = ''
      }

      useEffect(() => {
        if ("geolocation" in navigator) {
            // console.log("Available")
            navigator.geolocation.getCurrentPosition((position) => {
                // console.log(position.coords)
                setCurrentPost({... currentPost, location: {type: "Point", coordinates: [position.coords.longitude, position.coords.latitude]}})
            })
        } else {
            console.log("Not Available")
        }

        if(user) {
            setLoggedUser(user.email)
        }
        console.log("In Form: ", user.email)
      }, [])

    return (
        <div>
            <form onSubmit={handleSubmit} className="postForm">
                {user ? <h1>Logged in as {user.name}</h1> : <h1>Not logged in</h1>}
                <TextField value={currentPost.message} onChange={e => setCurrentPost({...currentPost, message: e.target.value})}/>
                <Button varient="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Form