import React, {useState, useEffect, useContext} from 'react';
import {priorityStateContext, typeofChargerStateContext, LAStateContext} from '../../Store';
import DataLoading from './Data';

import { MapContainer, MapConsumer, TileLayer, LayersControl, FeatureGroup, LayerGroup} from 'react-leaflet';
import MapDraw from "./MapDraw";
import Layout from '../layout/Layout';
import { layerGroup } from 'leaflet';
<<<<<<< Updated upstream
=======

import MiddleLayer from './MiddleLayer'
>>>>>>> Stashed changes

function MapDataLoad(){
    const [priorities, setPriorities] = useContext(priorityStateContext);
    const [chargerType, setchargerType] = useContext(typeofChargerStateContext);   
    const [LAs, setLAs] = useContext(LAStateContext);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState();
    const [calledDatasets, setcalledDatasets] = useState([]);

    const[counter, setCounter] = useState(0);


    useEffect(() => {
        var modifiedNames = LAs.map(element => {
           var stringed = element.replace(/\s/g, '%20');
           console.log(stringed);
           return stringed;
        });

        var tempString = "";
        var tempLength = modifiedNames.length;    
        var i = 0 ;
        while ( i < tempLength - 1){
            tempString = tempString + modifiedNames[i] + ".";
            i++
        } 
        tempString = tempString + modifiedNames[i];

<<<<<<< Updated upstream

        let urlwithLAs = 'https://cleanstreetserver.herokuapp.com/v1/point/GBLayer/' + tempString;        
        //let urltest = urlwithLAs + '/'+ priorities[0];
        //console.log(urltest);
=======
        //tempString
        //apiLink


        let urlwithLAs = 'https://cleanstreetserver.herokuapp.com/v1/point/GBLayer/' + tempString;        
        var apiLink = 'https://cleanstreetserver.herokuapp.com/v1/';

>>>>>>> Stashed changes
        setIsLoading(true);
        var allDatasets = [];
        var count = 0;
        for ( var j=0; j < priorities.length; j++) {
<<<<<<< Updated upstream
            const url = urlwithLAs +"/" + priorities[j];
=======
            console.log(priorities[j]);
            let type;
            var temp = "";
            if (priorities[j] == "Stops" || priorities[j] == "durhamCarParks" || priorities[j] == "TCP"){
                temp = apiLink + "point/GBLayer/" + tempString + "/" + priorities[j];
                type = "point";
                console.log("Marker PRIOITY");
            } else {
                temp = apiLink + "dataFetch/GBLayer/" + tempString + "/" + priorities[j];
                type = "geo";
                console.log("GEO PRIOITY");
            }
            const url = temp;

            //do not remove!
>>>>>>> Stashed changes
            let x = j;
            
            fetch(
            `${url}`
            )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(x);
                console.log(priorities[x]);
                data["name"] = priorities[x];
                data["id"] = x;
<<<<<<< Updated upstream
=======
                data["type"] = type;
>>>>>>> Stashed changes
                allDatasets.push(data);
                console.log("Count: " + count);
                if (count + 1 == priorities.length){
                    setIsLoading(false);
                }
                count = count + 1;
                
                
            });
        }
<<<<<<< Updated upstream
        // var c = 0;
        // allDatasets.map(dataset => {
        //     dataset["name"] = "Moozhan";
        //     c++;
        //     return dataset;
        // });

        
            
        //const indexed = allDatasets.map((item, id) => Object.assign(item, {id}));
        setcalledDatasets(allDatasets);
        console.log(allDatasets.length);
        console.log(allDatasets);
=======
       
        setcalledDatasets(allDatasets);
        // console.log(allDatasets.length);
        // console.log(allDatasets);
>>>>>>> Stashed changes
        

        
        }, []);
        // console.log(calledDatasets);
        // const indexed = calledDatasets.map((item, id) => Object.assign(item, {id}));
        // console.log(indexed);

    if (isLoading) {
        return (
          <Layout>
          <section>
            <p>Loading...</p>
          </section>
          </Layout>
        );
    } else {
 
    // let data =[];
    // let data = priorities.map(link => {
    //     let url = urlwithLAs + '/'+ link;
    //     let dataloaded = <DataLoading url = {url} />;
    //     //create the layer
    //     if (priorities.type === 'point'){
    //        //create all the necessary props
    //     }
    //     if (priorities.type === 'polygon'){
    //        //create all the necessary props
    //     }
    // });

    return (
        <LayersControl position= "topright">
            <LayerGroup>
<<<<<<< Updated upstream
            {calledDatasets.map(dataset => (  
                <LayergeoMarker key = {dataset.name} dataName={dataset.name} mapdata={dataset[0][1]}/> 
                // <LayerGroup key = {dataset.name}  position="topright" name = {dataset.name}>
                    
                // </LayerGroup>
=======
            {calledDatasets.map(dataset => ( 
                <MiddleLayer key = {dataset.name} data = {dataset}/>
>>>>>>> Stashed changes
            ))}
            
            </LayerGroup>
            <LayerGroup>
<<<<<<< Updated upstream
                <MapDraw data = {calledDatasets[0][0][1]} />
=======
                <MapDraw data = {calledDatasets} />
>>>>>>> Stashed changes
            </LayerGroup>
            
            
            
        </LayersControl>
       
        

    );
    }
}

//[0][0][1]

export default MapDataLoad;