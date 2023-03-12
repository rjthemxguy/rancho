import { GeoJSON, LayersControl } from "react-leaflet";
import { useRef, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

import {
    setData,
    selectCount,
  } from "../chartSlice"

export const HannahLayer = ({data}) => {

    const geoJsonRef = useRef();
    const dispatch = useDispatch();

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

        const labels = ["Clark", "Stickler", "Olmsted", "Hannah", "Henderson", "Jimenez"]
        const newData = {
            labels,
            datasets: [
              {
                label: '% of Vote Total',
                data: [e.target.feature.properties.clarkPercent,
                    e.target.feature.properties.sticklerPercent,
                    e.target.feature.properties.olmstedPercent,
                    e.target.feature.properties.hannahPercent,
                    e.target.feature.properties.hendersonPercent,
                    e.target.feature.properties.jimenezPercent],
                backgroundColor: ["red", "blue", "green", "orange", "yellow", "teal"]
              }
             
            ],
            };
            
            dispatch(setData(newData))

        if (!geoJsonRef.current) return;
        geoJsonRef.current.resetStyle();
                          
    
        const layer = e.target;
        layer.setStyle({color:"yellow"})
        
      };

      const precinctColor=((feature) => {

        if(feature.properties.hannahPercent < 46 && feature.properties.hannahPercent > 40) {
            return({color:"Peru", fillOpacity: ".4"}) }

        if(feature.properties.hannahPercent < 41 && feature.properties.hannahPercent > 35) {
            return({color:"RoyalBlue" ,fillOpacity: ".4"}) }

        if(feature.properties.hannahPercent < 36 && feature.properties.hannahPercent > 30) {
            return({color:"YellowGreen", fillOpacity: ".4"}) }
        
        if(feature.properties.hannahPercent < 31 && feature.properties.hannahPercent > 25) {
            return({color:"red", fillOpacity: ".4"}) }

        if(feature.properties.hannahPercent < 26 && feature.properties.hannahPercent > 20) {
            return({color:"aqua", fillOpacity: ".4"}) }

        if(feature.properties.hannahPercent < 21 && feature.properties.hannahPercent > 15) {
            return({color:"orange", fillOpacity: ".4"}) }

        if(feature.properties.hannahPercent < 16 && feature.properties.hannahPercent > 10) {
            return({color:"green", fillOpacity: ".4"}) }

        if(feature.properties.hannahPercent < 11 && feature.properties.hannahPercent > 5) {
            return({color:"darkgray", fillOpacity: ".4"}) }

        if(feature.properties.hannahPercent < 6 && feature.properties.hannahPercent > 0) {
            return({color:"maroon", fillOpacity: ".4"}) }

        
    })

      const layer =  (<GeoJSON  data = {data}
        onEachFeature = {onEachClick}
        ref={geoJsonRef}
        style = {precinctColor}
        
    ></GeoJSON>)

    return(
        <LayersControl.Overlay name="Hannah">{layer}</LayersControl.Overlay>
       
    )
}