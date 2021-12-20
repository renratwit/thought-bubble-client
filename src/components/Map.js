import React from 'react'
import {Circle, MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {Icon} from 'leaflet';

export default function Map({location}) {
    return (
        <div>
            <MapContainer center={[location.location.coordinates[1], location.location.coordinates[0]]} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Circle center={[location.location.coordinates[1], location.location.coordinates[0]]} radius={350}></Circle>
                </MapContainer>
        </div>
    )
}
