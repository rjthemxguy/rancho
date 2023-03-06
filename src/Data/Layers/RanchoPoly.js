import { GeoJSON, LayersControl } from "react-leaflet";
import { useRef, useEffect} from "react";

export const RanchoPolyLayer = ({data}) => {

    const geoJsonRef = useRef();

    const onEachClick = (feature, layer) => {
        const Precinct = feature.properties.PRECINCT;

        layer.bindPopup(
           Precinct
            
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