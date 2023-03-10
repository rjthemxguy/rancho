import { GeoJSON, LayersControl } from "react-leaflet";
import { useRef, useEffect} from "react";

export const RanchoPolyLayer = ({data}) => {

    const geoJsonRef = useRef();

    const onEachClick = (feature, layer) => {
        const Precinct = feature.properties.PRECINCT;

        const CLARK = feature.properties.CLARK;
        const CLARKPERCENT = feature.properties.clarkPercent;
        const OLMSTED = feature.properties.OLMSTED;
        const OLMSTEDPERCENT = feature.properties.olmstedPercent;
        const STICKLER = feature.properties.STICKLER;
        const STICKLERPERCENT = feature.properties.sticklerPercent;
        const HANNAH = feature.properties.HANNAH;
        const HANNAHPERCENT = feature.properties.hannahPercent;
        const HENDERSON= feature.properties.HENDERSON;
        const HENDERSONPERCENT = feature.properties.hendersonPercent;
        const JIMENEZ= feature.properties.JIMENEZ;
        const JIMENEZPERCENT = feature.properties.jimenezPercent;
        
        
        layer.bindPopup(
           "<b>" + "Precinct: " + Precinct + "</br>" + "</b>" +
           "<hr>" + 

           "Floyd Clark : " + CLARK + " : <b>" + CLARKPERCENT + "%" + "</b></br>" +
           "Rose Stephens Olmsted : " + OLMSTED + " : <b>" + OLMSTEDPERCENT + "%" + "</b></br>" +
           "Ashley Stickler: " + STICKLER + " : <b>" + STICKLERPERCENT + "%" + "</b></br>" +
           "Mary Hannah :" + HANNAH + " : <b>" + HANNAHPERCENT + "%" + "</b></br>" +
           "Lawrence Henderson : " + HENDERSON + " : <b>" + HENDERSONPERCENT + "%" + "</b></br>" +
           "Erick Jimenez : " + JIMENEZ + " : <b>" + JIMENEZPERCENT + "%" + "</b>"
          

           
            
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