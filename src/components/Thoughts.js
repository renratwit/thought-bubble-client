import React from 'react'
import {Circle, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Icon} from 'leaflet';
import { useEffect, useState } from 'react';
//https://blog.logrocket.com/react-leaflet-tutorial/

import { getThoughts } from '../api';
import Map from './Map'
import Thought from './Thought';

const Thoughts = ({messages}) => {
    console.log("THOUGHTS ", messages)
    return (
        <div className="thoughts">
            {
                messages.map((thought) => (
                    <Thought thought={thought}/>
                ))
            }

        </div>    
    )
}

export default Thoughts