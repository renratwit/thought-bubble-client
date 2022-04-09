import {React, useContext} from 'react'
import {TextField, Button} from '@material-ui/core'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { createThought, getThoughts } from '../api'
import { useAuth0 } from '@auth0/auth0-react'
import { UserContext } from './context/UserContext'

const Form = ({submittingRequest}) => {
    const MAX_WORD_COUNT = 150;
    const [messages, setMessages] = useState([]);
    const user = useContext(UserContext);
    const [loggedUser, setLoggedUser] = useState(user);

    // console.log(user)

    const [currentPost, setCurrentPost] = useState({
        message: '',
        creator: loggedUser.email,
        rating: 0,
        upvoted: [],
        downVoted: [],
        location: {
            type: "Point",
            coordinates: []
        },
        dateCreated: Date.now(),
      })

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
    console.log("In Form: ", user.email)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentPost.message.length === 0) return;
        currentPost.creator = user.email;
        submittingRequest(currentPost)
        currentPost.message = ''
    }

    const handleUserInput = (e) => {
        if (currentPost.message.length === 10) return;
        setCurrentPost({...currentPost, message: e.target.value})
    }

    // const handleBackSpace = (e) => {
    //     if (e.keyCode !== 8) return;
    //     setCurrentPost({...currentPost, message: currentPost.message.substring(0, currentPost.message.length)})
    // }

    return (
        <div>
            <form onSubmit={handleSubmit} className="postForm">
                {user ? <h1>Logged in as {user.name}</h1> : <h1>Not logged in</h1>}
                <TextField value={currentPost.message} onChange={handleUserInput}/>
                <p>{currentPost.message.length}/150</p>
                <Button varient="contained" type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default Form