import { React } from "react";
import {MapContainer, Popup, TileLayer, Marker, LayersControl} from "react-leaflet"
import {rancho} from "../Data/Rancho"
import { RanchoPolyLayer } from "../app/layers/RanchoPoly";
import { SticklerLayer } from "../app/layers/SticklerLayer.js";
import { OlmstedLayer } from "../app//layers/OlmstedLayer.js";
import { HannahLayer } from "../app/layers/HannahLayer";
import { HendersonLayer } from "../app/layers/HendersonLayer";
import { JimenezLayer } from "../app/layers/JimenezLayer";


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
        <JimenezLayer data={rancho}/>
        </LayersControl>
      </MapContainer>
    )

}