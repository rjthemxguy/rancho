import { GeoJSON } from "react-leaflet";

export const RanchoPolyLayer = ({data}) => {
    return(
        <GeoJSON key="geo-json-layer" data={data}>
        
        </GeoJSON>
    )
}