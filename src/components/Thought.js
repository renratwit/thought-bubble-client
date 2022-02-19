import React from 'react'
import Map from './Map'
import {useState, useEffect} from 'react'
import { upVote, downVote } from '../api'
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "../style/thought.css"

import CommentForm from './CommentForm'

export default function Thought({thought}) {
    // const { user , isAuthenticated, isLoading} = useAuth0();
    // const [rating, setRating] = useState(thought.rating)
    const [upVoted, setUpVoted] = useState(thought.upVoted)
    const [downVoted, setDownVoted] = useState(thought.downVoted)

    const [disableUpVote, setDisableUpVote] = useState(false)
    const [disableDownVote, setDisableDownVote] = useState(false)
    const [comments, setComments] = useState(thought.comments)

    useEffect(() => {
        
    }, [])

    let handleCommentPost = (comment) => {
        setComments([... comments, comment])
        console.log(comments)
    }

    return (
        <div className="thought">
            <h1>{thought.message}</h1>
            <p>{thought.creator}</p>
            {
                comments.map(c => 
                    (<p key={c}>{c}</p>)
                )
            }
            <FavoriteIcon className="like-button" onClick={()=>{console.log("Clicked Like")}}/>
            <CommentForm thought={thought} handleCommentPost={handleCommentPost}/>
            <Map location={thought}/>
        </div>
    )
}
