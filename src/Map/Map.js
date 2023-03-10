import { React } from "react";
import {MapContainer, Popup, TileLayer, Marker, LayersControl} from "react-leaflet"
import {rancho} from "../Data/Rancho"
import { RanchoPolyLayer } from "../Data/Layers/RanchoPoly";
import { SticklerLayer } from "../Data/Layers/SticklerLayer.js";
import { OlmstedLayer } from "../Data/Layers/OlmstedLayer.js";
import { HannahLayer } from "../Data/Layers/HannahLayer";
import { HendersonLayer } from "../Data/Layers/HendersonLayer";


export const Map = () => {
    const position = [34.1406, -117.6100 ]
        
    return(
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <LayersControl position="topright">
         <LayersControl.BaseLayer checked name="Rancho District 1">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </LayersControl.BaseLayer>
         
        <RanchoPolyLayer data={rancho}/>
        <SticklerLayer data={rancho}/>
        <OlmstedLayer data={rancho}/>
        <HannahLayer data={rancho}/>
        <HendersonLayer data={rancho}/>
        </LayersControl>
      </MapContainer>
    )

}