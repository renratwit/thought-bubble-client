import React from 'react'
import {TextField, Button} from '@material-ui/core'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { createThought, getThoughts } from '../api'
import { useAuth0 } from '@auth0/auth0-react'

const Form = ({submittingRequest, user}) => {
    const [messages, setMessages] = useState([]);
    const [loggedUser, setLoggedUser] = useState('undefined creator');

    // console.log(user)

    const [currentPost, setCurrentPost] = useState({
        message: '',
        creator: user.name || '',
        rating: 0,
        upvoted: [],
        downVoted: [],
        location: {
            type: "Point",
            coordinates: []
        }
      })

    const getAllMessages = () => {
        axios.get('http://localhost:5000').then(res => {
            //console.log("inside get()");
            const allMessages = res.data
            setMessages(allMessages)
            //console.log("messages", messages)
        })
    }
      
    const handleSubmit = (e) => {
        e.preventDefault();
        submittingRequest(currentPost)
        // console.log("submitting ", currentPost)
        currentPost.message = ''
      }

      useEffect(() => {
        if (user) setLoggedUser(user.name)
        if ("geolocation" in navigator) {
            // console.log("Available")
            navigator.geolocation.getCurrentPosition((position) => {
                // console.log(position.coords)
                setCurrentPost({... currentPost, location: {type: "Point", coordinates: [position.coords.longitude, position.coords.latitude]}})
            })
        } else {
            console.log("Not Available")
        }
      }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField value={currentPost.message} onChange={e => setCurrentPost({...currentPost, message: e.target.value})}/>
                <Button varient="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Form