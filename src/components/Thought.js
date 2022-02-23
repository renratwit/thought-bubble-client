import {React, useContext} from 'react'
import Map from './Map'
import {useState, useEffect} from 'react'
import { upVote, downVote, likePost } from '../api'
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "../style/thought.css"

import CommentForm from './CommentForm'
import { UserContext } from './context/UserContext';
import Favorite from '@mui/icons-material/Favorite';

export default function Thought({thought}) {
    const [comments, setComments] = useState(thought.comments)
    const [rating, setRating] = useState(thought.rating);

    const user = useContext(UserContext);

    useEffect(() => {
        console.log(user)
    }, [])

    let handleCommentPost = (comment) => {
        setComments([... comments, comment])
        console.log(comments)
    }

    let isMyPost = thought.creator === user.email;

    let handleLike = async () => {
        console.log("Clicked Heart")
        let res = await likePost(thought, user)
        console.log(res)
        setRating(rating+1)

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

            {/* {
                !isMyPost ? <FavoriteIcon className="like-button" onClick={handleLike}/> : <></>
            } */
                <Favorite className='like-button' onClick={handleLike}/>
            }
            {rating}
            <CommentForm thought={thought} handleCommentPost={handleCommentPost}/>
            <Map location={thought}/>
        </div>
    )
}
