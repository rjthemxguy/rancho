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

      const precinctColor=((feature) => {

        if(feature.properties.clarkPercent < 46 && feature.properties.clarkPercent > 40) {
            return({color:"Peru"}) }

        if(feature.properties.clarkPercent < 41 && feature.properties.clarkPercent > 35) {
            return({color:"RoyalBlue", fillOpacity: ".4"}) }

        if(feature.properties.clarkPercent < 36 && feature.properties.clarkPercent > 30) {
            return({color:"YellowGreen", fillOpacity: ".4"}) }
        
        if(feature.properties.clarkPercent < 31 && feature.properties.clarkPercent > 25) {
            return({color:"red", fillOpacity: ".4"}) }

        if(feature.properties.clarkPercent < 26 && feature.properties.clarkPercent > 20) {
            return({color:"aqua", fillOpacity: ".4"}) }

        if(feature.properties.clarkPercent < 21 && feature.properties.clarkPercent > 15) {
            return({color:"orange", fillOpacity: ".4"}) }

        if(feature.properties.clarkPercent < 16 && feature.properties.clarkPercent > 10) {
            return({color:"green",fillOpacity: ".4" }) }

        if(feature.properties.clarkPercent < 11 && feature.properties.clarkPercent > 5) {
            return({color:"darkgray",fillOpacity: ".4" }) }

        if(feature.properties.clarkPercent < 6 && feature.properties.clarkPercent > 0) {
            return({color:"maroon",fillOpacity: ".4" }) }

        
    })

      const layer =  (<GeoJSON  data = {data}
        onEachFeature = {onEachClick}
        ref={geoJsonRef}
        style = {precinctColor}
        
    ></GeoJSON>)

    return(
        <LayersControl.Overlay checked name="Clark">{layer}</LayersControl.Overlay>
       
    )
}