import React, {useContext, useState} from 'react';
import { Marker, Popup, LayersControl, FeatureGroup } from 'react-leaflet';
import {priorityStateContext, typeofChargerStateContext, LAStateContext} from '../../Store';
import L from 'leaflet';
import {  iconEV  } from './Marker.js';

function LayergeoMarker(props) {
    const [priorities, setPriorities] = useContext(priorityStateContext);
    const [chargerType, setchargerType] = useContext(typeofChargerStateContext);   
    const [LAs, setLAs] = useContext(LAStateContext);

    //Marker Setup
    //==============================================================================================
    const indexed = props.mapdata.map((item, id) => Object.assign(item, {id}));
    // let url = 'https://cleanstreetserver.herokuapp.com/v1' + LAs;
    // let finalcalledURL = priorities.map(string => {
        //add the priorities at the end of the endpoint
    // }
    // );  
    // let loadeddata = priorities.map(
    //     if (prioirities.type === 'point') {
    //         DataLoading (url={finalcalledURL){
    //             return data;
    //         }
    //         //create the layer of point
    //     } else {
    //         if (priorities.type === 'polygon')
    //     }
    // );

    console.log("here");

    return(
        <LayersControl.Overlay name={props.dataName}>
        <FeatureGroup name= {props.dataName}>
          {indexed.map(data => (
            <Marker 
                key = {data.id}
                icon = {iconEV}
                position={[data.Latitude, data.Longitude]}> 
            </Marker>
            ))}
        </FeatureGroup>
        </LayersControl.Overlay>
    );
}

export default LayergeoMarker;