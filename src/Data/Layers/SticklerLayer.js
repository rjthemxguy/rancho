import { GeoJSON, LayersControl } from "react-leaflet";
import { useRef, useEffect} from "react";

export const SticklerLayer = ({data}) => {

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

        if(feature.properties.sticklerPercent < 46 && feature.properties.sticklerPercent > 40) {
            return({color:"Peru", fillOpacity: ".4"}) }

        if(feature.properties.sticklerPercent < 41 && feature.properties.sticklerPercent > 35) {
            return({color:"RoyalBlue", fillOpacity: ".4"}) }

        if(feature.properties.sticklerPercent < 36 && feature.properties.sticklerPercent > 30) {
            return({color:"YellowGreen", fillOpacity: ".4"}) }
        
        if(feature.properties.sticklerPercent < 31 && feature.properties.sticklerPercent > 25) {
            return({color:"red", fillOpacity: ".4"}) }

        if(feature.properties.sticklerPercent < 26 && feature.properties.sticklerPercent > 20) {
            return({color:"aqua", fillOpacity: ".4"}) }

        if(feature.properties.sticklerPercent < 21 && feature.properties.sticklerPercent > 15) {
            return({color:"orange", fillOpacity: ".4"}) }

        if(feature.properties.sticklerPercent < 16 && feature.properties.sticklerPercent > 10) {
            return({color:"green", fillOpacity: ".4"}) }

        if(feature.properties.sticklerPercent < 11 && feature.properties.sticklerPercent > 5) {
            return({color:"darkgray",fillOpacity: ".4"}) }

        if(feature.properties.sticklerPercent < 6 && feature.properties.sticklerPercent > 0) {
            return({color:"maroon", fillOpacity: ".4"}) }

        
    })

      const layer =  (<GeoJSON  data = {data}
        onEachFeature = {onEachClick}
        ref={geoJsonRef}
        style = {precinctColor}
        
    ></GeoJSON>)

    return(
        <LayersControl.Overlay name="Stickler">{layer}</LayersControl.Overlay>
       
    )
}