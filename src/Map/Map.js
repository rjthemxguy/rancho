import { React } from "react";
import {MapContainer, TileLayer} from "react-leaflet"

export const Map = () => {
    const position = [34.1064, -117.5931 ]
        
    return(
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
      </MapContainer>
    )

}