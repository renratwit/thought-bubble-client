import React from 'react'
import {Circle, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Icon} from 'leaflet';
import {useState} from 'react'
export default function Map({location}) {
    const [isCollapsed, setCollapsed] = useState(false)

    let buttonText = isCollapsed ? 'Show Map' : 'Hide Map'
    return (
        <div>
            <button onClick={() => setCollapsed(!isCollapsed)}>{buttonText}</button>
            <div className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                <MapContainer center={[location.location.coordinates[1], location.location.coordinates[0]]} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Circle center={[location.location.coordinates[1], location.location.coordinates[0]]} radius={350}></Circle>
                </MapContainer>
            </div>

        </div>
    )
}
