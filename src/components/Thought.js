import React from 'react'
import Map from './Map'
import {useState} from 'react'
import { upVote, downVote } from '../api'

export default function Thought({thought}) {
    const [rating, setRating] = useState(thought.rating)

    console.log("Thought")

    const handleUpVote = async () => {
        try {
            setRating(rating + 1);
            await upVote(thought);
        } catch (e) {
            console.error(e)
        }
    }

    const handleDownVote = async() => {
        try {
            setRating(rating - 1);
            await downVote(thought)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div>
            <h1>{thought.message}</h1>
            <button onClick={() => handleUpVote()}>Vote up</button>
            <p>{rating}</p>
            <button onClick={() => handleDownVote()}>Vote Down</button>
            <Map location={thought}/>
        </div>
    )
}
