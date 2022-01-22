import React from 'react'
import {TextField, Button} from '@material-ui/core'
import { postComment } from '../api';
import {useState} from 'react';

export default function CommentForm({thought, handleCommentPost}) {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(thought) 
        try {
            handleCommentPost(comment)
            postComment(comment, thought);
            setComment('')
        } catch(e){
            console.error(e)
        } 

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField onChange={(e)=>setComment(e.target.value)} value={comment}/>
                <Button varient="contained" onClick={(e)=>handleSubmit(e)}>Post Comment</Button>
            </form>
        </div>
    )
}
