import React, {useState, useEffect, useContext} from 'react';
import {priorityStateContext, typeofChargerStateContext, LAStateContext} from '../../Store';
import DataLoading from './Data';

import { MapContainer, MapConsumer, TileLayer, LayersControl, FeatureGroup, LayerGroup} from 'react-leaflet';
import MapDraw from "./MapDraw";
import Layout from '../layout/Layout';
import { layerGroup } from 'leaflet';
import LayergeoPolygon from './LayergeoPolygon';
import MiddleLayer from './MiddleLayer'

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

        //tempString
        //apiLink


        let urlwithLAs = 'https://cleanstreetserver.herokuapp.com/v1/point/GBLayer/' + tempString;        
        var apiLink = 'https://cleanstreetserver.herokuapp.com/v1/';

        setIsLoading(true);
        var allDatasets = [];
        var count = 0;
        for ( var j=0; j < priorities.length; j++) {
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
                data["type"] = type;
                allDatasets.push(data);
                console.log("Count: " + count);
                if (count + 1 == priorities.length){
                    setIsLoading(false);
                }
                count = count + 1;
                
                
            });
        }
       
        setcalledDatasets(allDatasets);
        // console.log(allDatasets.length);
        // console.log(allDatasets);
        

        
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
            {calledDatasets.map(dataset => ( 
                <LayergeoPolygon key = {dataset.name} data = {dataset}/>
            ))}
            
            </LayerGroup>
            <LayerGroup>
                <MapDraw data = {calledDatasets} />
            </LayerGroup>
            
            
            
        </LayersControl>
       
        

    );
    }
}

//[0][0][1]

export default MapDataLoad;