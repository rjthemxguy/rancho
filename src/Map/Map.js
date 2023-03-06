import { React } from "react";
import {MapContainer, Popup, TileLayer, Marker, LayersControl} from "react-leaflet"
import {rancho} from "../Data/Rancho"
import { RanchoPolyLayer } from "../Data/Layers/RanchoPoly";

export const Map = () => {
    const position = [34.1406, -117.6100 ]
        
    return(
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <LayersControl position="topright">
         <LayersControl.BaseLayer checked name="Legislative Map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </LayersControl.BaseLayer>
         
        <RanchoPolyLayer data={rancho}/>
        </LayersControl>
      </MapContainer>
    )

}