import {React, useContext} from 'react'
import Map from './Map'
import {useState, useEffect} from 'react'
import { upVote, downVote, likePost } from '../api'
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "../style/thought.css"
import Comments from "./Comments"
import CommentForm from './CommentForm'
import { UserContext } from './context/UserContext';
import Favorite from '@mui/icons-material/Favorite';

export default function Thought({thought}) {
    const user = useContext(UserContext);
    
    const [comments, setComments] = useState(thought.comments)
    const [rating, setRating] = useState(thought.rating);
    const [likedUsers, setLikedUsers] = useState(thought.upVoted);
    const [isLikedPost, setIsLikedPost] = useState(Array.from(likedUsers).includes(user.email))
    
    useEffect(() => {
        console.log(user)
    }, [])

    let handleCommentPost = (comment) => {
        setComments([... comments, comment])
        console.log(comments)
    }

    let handleLike = async () => {
        console.log("Clicked like")
        let res = await likePost(thought, user)
        console.log(res)
        setRating(rating+1)
        setLikedUsers(Array.from(likedUsers).push(user.email))
        setIsLikedPost(!isLikedPost)
        console.log(likedUsers)
    }

    let handleUnlike = async() => {
        console.log('Clicked unlike')
        
        setRating(rating - 1);
        setLikedUsers(Array.from(likedUsers).filter(email => email !== user.email))
        setIsLikedPost(!isLikedPost)
        console.log(likedUsers)
    }

    let handleHeartClick = () => {
        if (!isLikedPost) {
            handleLike();
        } else {
            handleUnlike();
        }
    }

    return (
        <div className="thought">
            <h1>{thought.message}</h1>

            <button disabled={false} onClick={handleHeartClick} className='heart-button'>
                <Favorite className='like-button'/>
            </button>
            {rating}

            <p>{thought.creator}</p>
            <Comments comments={comments}/>
            {
                // comments.map(c => 
                //     (<p key={c}>{c}</p>)
                // )
            }

            {/* {
                !isMyPost ? <FavoriteIcon className="like-button" onClick={handleLike}/> : <></>
            } */
            }
            
            <CommentForm thought={thought} handleCommentPost={handleCommentPost}/>
            <Map location={thought}/>
        </div>
    )
}
