import React from 'react'
import {Circle, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Icon} from 'leaflet';
//https://blog.logrocket.com/react-leaflet-tutorial/

import { getThoughts } from '../api';
import Map from './Map'
import Thought from './Thought';

const Thoughts = ({messages}) => {
    console.log("THOUGHTS ", messages)

    const handleButtonClick = async() => {
        const thoughts = await getThoughts();
        console.log(thoughts)
        try {

        }catch(e) {
            console.error(e)
        }
    }
    
    return (
        <div>
            {
                messages.map((thought) => (
                    <Thought thought={thought}/>
                ))
            }
            {/* <button onClick={handleButtonClick}>Refresh</button> */}
        </div>    
    )
}

export default Thoughts