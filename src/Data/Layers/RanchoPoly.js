import { GeoJSON, LayersControl } from "react-leaflet";
import { useRef, useEffect} from "react";

export const RanchoPolyLayer = ({data}) => {

    const geoJsonRef = useRef();

    const onEachClick = (feature, layer) => {
        const Precinct = feature.properties.PRECINCT;
        const CLARK = feature.properties.CLARK;
        const OLMSTED = feature.properties.OLMSTED;
        const STICKLER = feature.properties.STICKLER;
        const HANNAH = feature.properties.HANNAH;
        const  HENDERSON= feature.properties.HENDERSON;
        const  JIMENEZ= feature.properties.JIMENEZ;
        
        
        layer.bindPopup(
           "<b>" + "Precinct: " + Precinct + "</br>" + "</b>" +
           "<hr>" + 

           "Floyd Clark :" + CLARK + "</br>" +
           "Rose Stephens Olmsted :" + OLMSTED + "</br>" +
           "Ashley Stickler:" + STICKLER + "</br>" +
           "Mary Hannah :" + HANNAH + "</br>" +
           "Lawrence Henderson :" + HENDERSON + "</br>" +
           "Erick Jimenez :" + JIMENEZ
          

           
            
          );
      
          layer.on({ click: handleFeatureClick });     

    }

    const handleFeatureClick = (e) => {
        if (!geoJsonRef.current) return;
        geoJsonRef.current.resetStyle();
                          
    
        const layer = e.target;
        layer.setStyle({color:"yellow"})
        
      };

      const layer =  (<GeoJSON  data = {data}
        onEachFeature = {onEachClick}
        ref={geoJsonRef}
        
    ></GeoJSON>)

    return(
        <LayersControl.Overlay checked name="Rancho">{layer}</LayersControl.Overlay>
       
    )
}