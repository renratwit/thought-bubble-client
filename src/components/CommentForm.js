import React from 'react'
import {TextField, Button} from '@material-ui/core'
import { postComment } from '../api';
import {useState} from 'react';

export default function CommentForm({thought}) {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(thought) 
        try {
            postComment(comment, thought)
        } catch(e){
            console.error(e)
        } 

    }
    return (
        <div>
            <form>
                <TextField onChange={(e)=>setComment(e.target.value)}/>
                <Button varient="contained" onClick={(e)=>handleSubmit(e)}>Post Comment</Button>
            </form>
        </div>
    )
}
