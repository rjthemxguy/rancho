import { GeoJSON, LayersControl } from "react-leaflet";
import { useRef, useEffect} from "react";

export const OlmstedLayer = ({data}) => {

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

        if(feature.properties.olmstedPercent < 46 && feature.properties.olmstedPercent > 40) {
            return({color:"Peru"}) }

        if(feature.properties.olmstedPercent < 41 && feature.properties.olmstedPercent > 35) {
            return({color:"RoyalBlue"}) }

        if(feature.properties.olmstedPercent < 36 && feature.properties.olmstedPercent > 30) {
            return({color:"YellowGreen"}) }
        
        if(feature.properties.olmstedPercent < 31 && feature.properties.olmstedPercent > 25) {
            return({color:"red"}) }

        if(feature.properties.olmstedPercent < 26 && feature.properties.olmstedPercent > 20) {
            return({color:"aqua"}) }

        if(feature.properties.olmstedPercent < 21 && feature.properties.olmstedPercent > 15) {
            return({color:"orange"}) }

        if(feature.properties.olmstedPercent < 16 && feature.properties.olmstedPercent > 10) {
            return({color:"green"}) }

        if(feature.properties.olmstedPercent < 11 && feature.properties.olmstedPercent > 5) {
            return({color:"darkgray"}) }

        if(feature.properties.olmstedPercent < 6 && feature.properties.sticklerPercent > 0) {
            return({color:"maroon"}) }

        
    })

      const layer =  (<GeoJSON  data = {data}
        onEachFeature = {onEachClick}
        ref={geoJsonRef}
        style = {precinctColor}
        
    ></GeoJSON>)

    return(
        <LayersControl.Overlay name="Olmsted">{layer}</LayersControl.Overlay>
       
    )
}