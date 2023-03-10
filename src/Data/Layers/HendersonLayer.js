import { GeoJSON, LayersControl } from "react-leaflet";
import { useRef, useEffect} from "react";

export const HendersonLayer = ({data}) => {

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

        if(feature.properties.hendersonPercent < 46 && feature.properties.hendersonPercent > 40) {
            return({color:"Peru"}) }

        if(feature.properties.hendersonPercent < 41 && feature.properties.hendersonPercentt > 35) {
            return({color:"RoyalBlue"}) }

        if(feature.properties.hendersonPercent < 36 && feature.properties.hendersonPercent > 30) {
            return({color:"YellowGreen"}) }
        
        if(feature.properties.hendersonPercent < 31 && feature.properties.hendersonPercent > 25) {
            return({color:"red"}) }

        if(feature.properties.hendersonPercent < 26 && feature.properties.hendersonPercent > 20) {
            return({color:"aqua"}) }

        if(feature.properties.hendersonPercent < 21 && feature.properties.hendersonPercent > 15) {
            return({color:"orange"}) }

        if(feature.properties.hendersonPercent < 16 && feature.properties.hendersonPercent > 10) {
            return({color:"green"}) }

        if(feature.properties.hendersonPercent < 11 && feature.properties.hendersonPercent > 5) {
            return({color:"darkgray"}) }

        if(feature.properties.hendersonPercent < 6 && feature.properties.hendersonPercent > 0) {
            return({color:"maroon"}) }

        
    })

      const layer =  (<GeoJSON  data = {data}
        onEachFeature = {onEachClick}
        ref={geoJsonRef}
        style = {precinctColor}
        
    ></GeoJSON>)

    return(
        <LayersControl.Overlay name="Henderson">{layer}</LayersControl.Overlay>
       
    )
}