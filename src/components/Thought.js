import React from 'react'
import Map from './Map'
import {useState, useEffect} from 'react'
import { upVote, downVote } from '../api'
// import { useAuth0 } from '@auth0/auth0-react'

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
        // console.log("In useEffect ", thought)
        // let upVotedArr = thought.upVoted;
        // let downVotedArr = thought.downVoted;
        // let email = user.email;

        // if (upVotedArr.includes(email)) setDisableUpVote(true)
        // if (downVotedArr.includes(email)) setDisableDownVote(true)
        
    }, [])

    let handleCommentPost = (comment) => {
        setComments([... comments, comment])
        console.log(comments)
    }

    // const handleUpVote = async () => {
    //     try {
    //         setRating(rating + 1); // set rating in DOM

    //         let returnPostData = await upVote(thought, user); // send data
    //         setDisableUpVote(true)
    //         setDisableDownVote(false)
            
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    // const handleDownVote = async() => {
    //     try {
    //         setRating(rating - 1); // subtract rating in DOM

    //         let returnPostData = await downVote(thought, user)
    //         setDisableDownVote(true)
    //         setDisableUpVote(false)

    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    return (
        <div className="thought">
            <h1>{thought.message}</h1>
            {
                comments.map(c => 
                    (<p key={c}>{c}</p>)
                )
            }
            <CommentForm thought={thought} handleCommentPost={handleCommentPost}/>
            <Map location={thought}/>
        </div>
    )
}
