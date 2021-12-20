import React from 'react'
import {Circle, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Icon} from 'leaflet';
//https://blog.logrocket.com/react-leaflet-tutorial/

import { getThoughts } from '../api';
import Map from './Map'

const Thoughts = ({messages}) => {
    console.log("THOUGHTS ", messages)

    const handleButtonClick = async() => {
        const thoughts = await getThoughts();
        console.log(thoughts)
    }
    const elements = []

    messages.forEach(e => {
        console.log(e)
        elements.push(
            <div>
                <li key={e._id}>{e.message}</li>
                <Map location={e}/>
            </div>
            )
        console.log(elements)
    })
    
    return (
        <div>
            <h1>THOUGHTS</h1>
            {
              elements
            }
            <button onClick={handleButtonClick}>Refresh</button>
        </div>    
    )
}

export default Thoughts