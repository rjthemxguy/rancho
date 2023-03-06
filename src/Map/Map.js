import { React } from "react";
import {MapContainer, TileLayer} from "react-leaflet"
import {rancho} from "../Data/Rancho"
import { RanchoPolyLayer } from "../Data/Layers/RanchoPoly";

export const Map = () => {
    const position = [34.1406, -117.6100 ]
        
    return(
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <RanchoPolyLayer data={rancho}/>
      </MapContainer>
    )

}