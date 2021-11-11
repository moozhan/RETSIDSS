
import React, {useState, useContext, useEffect} from 'react';
import L from 'leaflet';
import { MapContainer, MapConsumer, TileLayer, LayersControl, FeatureGroup, LayerGroup, useMap } from 'react-leaflet';
import { EditControl} from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import axios from 'axios';
//import turf , { distance, point, featureCollection, nearestPoint } from '@turf/turf'
import * as turf from '@turf/turf'
import {allocatedPointsStateContext, selectedMarkerStateContext} from '../../Store'

function MapDraw(props){
    const [allocatedpoints, setallocatedpoints] = useContext(allocatedPointsStateContext);
    const [selectedMarker, setselectedMarker] = useContext(selectedMarkerStateContext);

    const [theArray, setTheArray] = useState([]);    
    const [mapLayers, setMapLayers] = useState([]);
    const [finaldistance, setFinalDistance] = useState(0);

    var data = props.data;
    //console.log(data);

    var lookThroughArr = [];
    data.forEach(dataset =>{
        if (dataset.type == "geo"){
            lookThroughArr.push(dataset);
        }
    })
    //console.log(lookThroughArr);

    console.log(selectedMarker);
    var map = useMap();

    //Marker Setup
    //==============================================================================================
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://icon-library.com/images/charging-station-icon/charging-station-icon-26.jpg',
        iconUrl: 'https://icon-library.com/images/charging-station-icon/charging-station-icon-26.jpg',
        shadowUrl: '',
    });

    
    const _onCreate = e => {
        console.log("oncreate");
        //console.log(e);
        var typeselected = selectedMarker;
        const {layerType, layer} = e;
        if(layerType === "polygon"){
            const{_leaflet_id} = layer;
            //const popupContent = ReactDOMServer.renderToString(<ClientChoice />);
            //var popup = layer.bindPopup(popupContent);
            setMapLayers(layers => [...layers, {id: _leaflet_id, latLngs: layer.getLatLngs()[0], area: L.GeometryUtil.geodesicArea(layer.getLatLngs()[0])}]);
            //setTotalEnergy(added => added + layer.area);
            //layer.openPopup();
        };
        if(layerType === "marker"){
            const{_leaflet_id} = layer;
            axios.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${layer._latlng.lat}&lon=${layer._latlng.lng}&zoom=18&addressdetails=1`)
                .then(res => {               
                    const all_addresses = res.data;
                    setTheArray(address => [...address, {id: _leaflet_id, latLngs: layer._latlng, type: typeselected, address: all_addresses.display_name}]);
                });
            //calculating the distance using turf library
            //===================================================================================
            // var targetPoint = point([layer._latlng.lat, layer._latlng.lng]);
            // var nearest = nearestPoint(targetPoint, points);
            // console.log(nearest);
            setMapLayers(layers => [...layers, {id: _leaflet_id, latLngs: layer._latlng, type: typeselected, area: 0},]);
            console.log(layer._latlng);
            //console.log(map);

            //turf 
            var data2Return =[]
            var turfPoint = turf.point([layer._latlng.lng, layer._latlng.lat]);

            console.log(turfPoint);
            
            lookThroughArr.forEach(dataset => {
                console.log("lookThru");
                var type = dataset.name;
                dataset[0].forEach(feature => {

                    var turfFeature;
                    if (feature.geometry.type == "Polygon"){
                        turfFeature = turf.polygon(feature.geometry.coordinates);
                    }
                    else if (feature.geometry.type == "MultiPolygon"){
                        turfFeature = turf.multiPolygon(feature.geometry.coordinates);
                    }

                    if (turf.booleanPointInPolygon(turfPoint, turfFeature)){
                        console.log("PIP");
                        console.log("type: " + type);
                        if (type == "BlueBadge"){
                            data2Return.push([["Blue Badges: ",feature.TotalBBIssued], feature.properties.LAD13NM]);
                            console.log("Blue Badges");
                        } else if (type == "cityPopExports"){
                            data2Return.push([["Population: ",feature.Population], feature.properties.LAD13NM]);
                            console.log("Population");
                        } else if (type == "HouseholdActivity"){
                            data2Return.push([["Working Houses: ",feature.Working], feature.properties.LAD13NM]);
                            console.log("Working Houses");
                        } else if (type == "vehicleTypeJSON"){
                            data2Return.push([["Car Count: ",feature.Cars], feature.properties.LAD13NM]);
                            console.log("Car Count");
                        } else if (type == "walkingCyclingData"){
                            data2Return.push([["Walking Activty: ",feature.Any_walking_or_cycling_3pw], feature.properties.LAD13NM]);
                            console.log("Walking Activty");
                        }
                    }
                })
            })
            console.log("Placed Point Data:");
            console.log(data2Return);

            var popupContent = "";
            popupContent = "<b>" + data2Return[0][1] + "</b>" + "<br>";
            data2Return.forEach(indivData => {
                popupContent += indivData[0][0] + indivData[0][1]  +"<br>";
            })

            //const popupContent = "content";
            var popup = layer.bindPopup(popupContent);
            layer.openPopup();

    };
    };
    const _onEdited = e => {
        const {layers: {_layers}} = e;
        Object.values(_layers).map(({_leaflet_id, editing}) => {
            setMapLayers( layers => layers.map( l => l.id === _leaflet_id ? {...l, latlngs: { ...editing.latlngs[0]}}: l));
        });
    };

    const _onDeleted = (e) => {
        const { layers: {_layers}} = e;
        Object.values(_layers).map(({_leaflet_id}) => {
            setMapLayers( layers => 
                layers.filter( l => l.id !== _leaflet_id));
        });
    };
    if (theArray.length > 1) {
        var from = turf.point([theArray[0].latLngs.lat, theArray[0].latLngs.lng]);
        var to = turf.point([theArray[1].latLngs.lat, theArray[1].latLngs.lng]);
        var options = {units: 'miles'};
        var distanceed = turf.distance(from, to, options);
        console.log(distanceed);
    }
    return(
        <FeatureGroup>
            <EditControl position="topleft" onCreated={_onCreate} onEdited={_onEdited} onDeleted={_onDeleted} draw={{rectangle: false, polyline:false, circle: false, circlemarker: false, marker: true}}/>
        </FeatureGroup>
    );

}

export default MapDraw;