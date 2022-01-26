import { feature } from '@turf/helpers';
import React, {useContext, useState} from 'react';
import { Marker, Popup, LayersControl, FeatureGroup, GeoJSON } from 'react-leaflet';
import {priorityStateContext, typeofChargerStateContext, LAStateContext} from '../../Store';
import {  iconEV  } from './Marker.js';



function Layergeo(props) {
    var dataSrc = props.dataName;

    //console.log("here");
    const [priorities, setPriorities] = useContext(priorityStateContext);
    const [chargerType, setchargerType] = useContext(typeofChargerStateContext);   
    const [LAs, setLAs] = useContext(LAStateContext);

    var data = props.mapdata;
    //console.log(data);
    var myFeatures = [];
    // LAs.forEach(la => {
    //     data.forEach(feature => {
    //         if (feature.properties.LAD13NM == la){
    //             myFeatures.push(feature);
    //         }
    //     })
    // })
    


    function getColour(d, x) {
        
        
        switch(x){
            case "BlueBadge":
                return d > 21000 ? '#800026' :
                        d > 19000  ? '#BD0026' :
                        d > 15000  ? '#E31A1C' :
                        d > 11000 ? '#FC4E2A' :
                        d > 7000   ? '#FD8D3C' :
                        d > 3000   ? '#FEB24C' :
                        d > 1000   ? '#FED976' :
                                    '#FFEDA0';
            case "cityPopExports":
                return d > 500000 ? '#800026' :
                        d > 400000  ? '#BD0026' :
                        d > 300000  ? '#E31A1C' :
                        d > 200000 ? '#FC4E2A' :
                        d > 100000   ? '#FD8D3C' :
                        d > 50000   ? '#FEB24C' :
                        d > 25000   ? '#FED976' :
                                    '#FFEDA0';
            case "HouseholdActivity":
                return d > 21000 ? '#800026' :
                        d > 19000  ? '#BD0026' :
                        d > 15000  ? '#E31A1C' :
                        d > 11000 ? '#FC4E2A' :
                        d > 7000   ? '#FD8D3C' :
                        d > 3000   ? '#FEB24C' :
                        d > 1000   ? '#FED976' :
                                    '#FFEDA0';
            case "vehicleTypeJSON":
                return d > 21000 ? '#800026' :
                        d > 19000  ? '#BD0026' :
                        d > 15000  ? '#E31A1C' :
                        d > 11000 ? '#FC4E2A' :
                        d > 7000   ? '#FD8D3C' :
                        d > 3000   ? '#FEB24C' :
                        d > 1000   ? '#FED976' :
                                    '#FFEDA0';
            case "walkingCyclingData":
                return d > 60 ? '#800026' :
                        d > 50  ? '#BD0026' :
                        d > 45  ? '#E31A1C' :
                        d > 40 ? '#FC4E2A' :
                        d > 30   ? '#FD8D3C' :
                        d > 20   ? '#FEB24C' :
                        d > 10   ? '#FED976' :
                                    '#FFEDA0';
        }
    }

    const style = (feature => {
        switch(dataSrc){
            case "BlueBadge":
                return ({
                    fillColor: getColour(feature.TotalBBIssued, "BlueBadge"),
                    weight: 1,
                    opacity: 1,
                    color: 'black',
                    dashArray: '2',
                    fillOpacity: 0.5
                });
            case "cityPopExports":
                return ({
                    fillColor: getColour(feature.Population, "cityPopExports"),
                    weight: 1,
                    opacity: 1,
                    color: 'black',
                    dashArray: '2',
                    fillOpacity: 0.5
                });
            case "HouseholdActivity":
                return ({
                    fillColor: getColour(feature.Working, "HouseholdActivity"),
                    weight: 1,
                    opacity: 1,
                    color: 'black',
                    dashArray: '2',
                    fillOpacity: 0.5
                });
            case "vehicleTypeJSON":
                return ({
                    fillColor: getColour(feature.Cars, "vehicleTypeJSON"),
                    weight: 1,
                    opacity: 1,
                    color: 'black',
                    dashArray: '2',
                    fillOpacity: 0.5
                });
            case "walkingCyclingData":
                return ({
                    fillColor: getColour(feature.Any_walking_or_cycling_3pw, "walkingCyclingData"),
                    weight: 1,
                    opacity: 1,
                    color: 'black',
                    dashArray: '2',
                    fillOpacity: 0.5
                });
        }
        
    });
    //get features from dataset
    //change string based on dataSRC


    return(
        <LayersControl.Overlay name={props.dataName}>
        <FeatureGroup name = {props.dataName}>
            {myFeatures && (
                <GeoJSON data={myFeatures} 
                    style={style} 
                />
            )}
        </FeatureGroup>
        </LayersControl.Overlay>
    );

    // /////////////////////////////////////
    // return(
    //     <LayersControl.Overlay name={props.dataName}>
    //     <FeatureGroup name= {props.dataName}>
    //       {indexed.map(data => (
    //         <Marker 
    //             key = {data.id}
    //             icon = {iconEV}
    //             position={[data.Latitude, data.Longitude]}> 
    //         </Marker>
    //         ))}
    //     </FeatureGroup>
    //     </LayersControl.Overlay>
    // );
    // /////////////////////////////////////////////
}

export default Layergeo;