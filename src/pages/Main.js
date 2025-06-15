import React, { useState } from 'react';
import { MapContainer, TileLayer, LayersControl, GeoJSON, FeatureGroup, LayerGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw";
import 'leaflet/dist/leaflet.css';
import Natuura2000 from '../components/mapLayers/Natuura2000';
import { multipleGeojson } from "../data/Natuurasingle";
import "leaflet-draw/dist/leaflet.draw.css";
import L from 'leaflet';
import './main.css';
import miscanthus from '../components/images/Miscanthus.png';
import maze from '../components/images/maze.png';
import cattail from '../components/images/cattail.png';
import reed from '../components/images/reed.png';
import buffer from "@turf/buffer";
import Bargraph from '../components/mapdetails/Graph';
import StackedBargraph from '../components/mapdetails/StackedGraph';

function TempLocation() {
    const [setMapLayers] = useState([]);
    const [totalMisArea, setTotalMisArea] = useState(0);
    const [totalMaizArea, setTotalMaizArea] = useState(0);
    const [totalCatArea, setTotalCatArea] = useState(0);
    const [totalReedArea, setTotalReedArea] = useState(0);
    const [settotalArea] = useState(0);
    const [totalMisEnergy, setTotalMisEnergy] = useState(0);
    const [totalMaizEnergy, setTotalMaizEnergy] = useState(0);
    const [totalCatEnergy, setTotalCatenergy] = useState(0);
    const [totalReedenergy, setTotalReedenergy] = useState(0);
    const [totalEnergy, settotalEnergy] = useState(0);
    const [totalMisCarbon, setTotalMisCarbon] = useState(0);
    const [totalMaizCarbon, setTotalMaizCarbon] = useState(0);
    const [totalCatCarbon, setTotalCatCarbon] = useState(0);
    const [totalReedCarbon, setTotalReedCarbon] = useState(0);
    const [settotalCarbon] = useState(0);
    const [setMap] = useState(0);
    // const [bufferValue, setBufferValue] = useState(0);
    const [setDraggable] = useState(false);
    // const [hidden, setHidden] = useState(false);
    // const [bufferzone, setBufferzone] = useState();

    // Buffer =====================//
    var buffered = buffer(multipleGeojson, 100, { units: 'meters' });

    //======ShapeOptions: setting the color of the polygon ===//
    var Miscanthus = {
        fillColor: '#caf270',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '2',
        fillOpacity: 0.5
    }
    var Maize = {
        fillColor: '#45c490',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '2',
        fillOpacity: 0.5
    }
    var Cattail = {
        fillColor: '#008d93',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '2',
        fillOpacity: 0.5
    }
    var Reed = {
        fillColor: '#2e5468',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '2',
        fillOpacity: 0.5
    }
    var Boundary = {
        fillColor: '#2a5aeb',
        weight: 4,
        opacity: 1,
        color: 'blue',
        dashArray: '5',
        fillOpacity: 0
    }

    L.DrawToolbar.include({
        getModeHandlers: function (map) {
            return [
                {
                    enabled: true,
                    handler: new L.Draw.Polygon(map, { shapeOptions: Miscanthus }),
                    title: 'Plant Miscanthus',
                },
                {
                    enabled: true,
                    handler: new L.Draw.Polygon(map, { shapeOptions: Maize }),
                    title: 'Plant Maize'
                },
                {
                    enabled: true,
                    handler: new L.Draw.Polygon(map, { shapeOptions: Cattail }),
                    title: 'Plant Cattail'
                },
                {
                    enabled: true,
                    handler: new L.Draw.Polygon(map, { shapeOptions: Reed }),
                    title: 'Plant Reed'
                },
                {
                    enabled: true,
                    handler: new L.Draw.Polygon(map, { shapeOptions: Boundary }),
                    title: 'Planned Buffer'
                }
            ];
        }
    });

    const _onCreate = e => {
        setDraggable(false);
        const { layerType, layer } = e;
        const { _leaflet_id } = layer;
        var color = layer.options.fillColor;
        var areameter = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
        var area = areameter / 10000;
        if (layerType === "polygon") {
            if (color === "#caf270") {
                //var popup = layer.bindPopup(popupContent);
                let energy = Math.round(246.15 * area);
                let carbon = Math.round(14.85 * area);
                setTotalMisEnergy(totalMisEnergy => totalMisEnergy + energy);
                setTotalMisArea(totalMisArea => totalMisArea + area);
                setTotalMisCarbon(totalMisCarbon => totalMisCarbon + carbon);
                settotalEnergy(totalEnergy => totalEnergy + energy);
                settotalCarbon(totalCarbon => totalCarbon + carbon);
                setMapLayers(layers => [...layers, { id: _leaflet_id, latLngs: layer.getLatLngs()[0], area: area, type: "Miscanthus" }]);
                console.log("white");
            } else if (color === "#45c490") {
                //var popup = layer.bindPopup(popupContent);
                let energy = Math.round(520.38 * area);
                let carbon = Math.round(29.453 * area);
                setTotalMaizArea(totalMaizArea => totalMaizArea + area);
                setTotalMaizEnergy(totalMaizEnergy => totalMaizEnergy + energy);
                setTotalMaizCarbon(totalMaizCarbon => totalMaizCarbon + carbon);
                settotalEnergy(totalEnergy => totalEnergy + energy);
                settotalCarbon(totalCarbon => totalCarbon + carbon);
                setMapLayers(layers => [...layers, { id: _leaflet_id, latLngs: layer.getLatLngs()[0], area: area, type: "Maize" }]);
                console.log("red");
            } else if (color === "#008d93") {
                //var popup = layer.bindPopup(popupContent);
                let energy = Math.round(128.32 * area);
                let carbon = Math.round(7.263 * area);
                setTotalCatArea(totalCatArea => totalCatArea + area);
                setTotalCatenergy(totalCatEnergy => totalCatEnergy + energy);
                setTotalCatCarbon(totalCatCarbon => totalCatCarbon + carbon);
                settotalEnergy(totalEnergy => totalEnergy + energy);
                settotalCarbon(totalCarbon => totalCarbon + carbon);
                setMapLayers(layers => [...layers, { id: _leaflet_id, latLngs: layer.getLatLngs()[0], area: area, type: "Cattail" }]);
                console.log("blue");
            } else if (color === "#2e5468") {
                //var popup = layer.bindPopup(popupContent);
                let energy = Math.round(262.46 * area);
                let carbon = Math.round(14.855 * area);
                setTotalReedArea(totalReedArea => totalReedArea + area);
                setTotalReedenergy(totalReedEnergy => totalReedEnergy + energy);
                setTotalReedCarbon(totalReedCarbon => totalReedCarbon + carbon);
                settotalEnergy(totalEnergy => totalEnergy + energy);
                settotalCarbon(totalCarbon => totalCarbon + carbon);
                setMapLayers(layers => [...layers, { id: _leaflet_id, latLngs: layer.getLatLngs()[0], area: area, type: "Reed" }]);
                console.log("blue");
            } else if (color === "#2a5aeb") {
                console.log("#2a5aeb");
                //var popup = layer.bindPopup(popupContent);
                setMapLayers(layers => [...layers, { id: _leaflet_id, latLngs: layer.getLatLngs()[0], area: area, type: "Boundary" }]);
            }
        };
        settotalArea(totalArea => totalArea + area);
    };


    const _onEdited = e => {
        const { layers: { _layers } } = e;
        Object.values(_layers).forEach((a) => {
            // var color = a.options.fillColor;
            // var area = L.GeometryUtil.geodesicArea(a.getLatLngs()[0]);
            setMapLayers(layers => layers.map(l => l.id === a._leaflet_id ? { ...l, latlngs: { ...a.editing.latlngs[0] } } : l));
        });
    };


    const _onDeleted = (e) => {
        const { layers: { _layers } } = e;
        Object.values(_layers).forEach((a) => {
            var areameter = L.GeometryUtil.geodesicArea(a.getLatLngs()[0]);
            var area = areameter / 10000;
            var color = a.options.fillColor;
            if (color === "#caf270") {
                //var popup = layer.bindPopup(popupContent);
                let energy = Math.round(246.15 * area);
                let carbon = Math.round(14.85 * area);
                setTotalMisEnergy(totalMisEnergy => totalMisEnergy - energy);
                setTotalMisArea(totalMisArea => totalMisArea - area);
                setTotalMisCarbon(totalMisCarbon => totalMisCarbon - carbon);
                settotalEnergy(totalEnergy => totalEnergy - energy);
                settotalCarbon(totalCarbon => totalCarbon - carbon);

            } else if (color === "#45c490") {
                //var popup = layer.bindPopup(popupContent);
                let energy = Math.round(520.38 * area);
                let carbon = Math.round(29.453 * area);
                setTotalMaizArea(totalMaizArea => totalMaizArea - area);
                setTotalMaizEnergy(totalMaizEnergy => totalMaizEnergy - energy);
                setTotalMaizCarbon(totalMaizCarbon => totalMaizCarbon - carbon);
                settotalEnergy(totalEnergy => totalEnergy - energy);
                settotalCarbon(totalCarbon => totalCarbon - carbon);

            } else if (color === "#008d93") {
                //var popup = layer.bindPopup(popupContent);
                let energy = Math.round(128.32 * area);
                let carbon = Math.round(7.263 * area);
                setTotalCatArea(totalCatArea => totalCatArea - area);
                setTotalCatenergy(totalCatEnergy => totalCatEnergy - energy);
                setTotalCatCarbon(totalCatCarbon => totalCatCarbon - carbon);
                settotalEnergy(totalEnergy => totalEnergy - energy);
                settotalCarbon(totalCarbon => totalCarbon - carbon);

            } else {
                console.log("else");
                //var popup = layer.bindPopup(popupContent);
                let energy = Math.round(262.46 * area);
                let carbon = Math.round(14.855 * area);
                setTotalReedArea(totalReedArea => totalReedArea - area);
                console.log(totalReedArea);
                console.log(totalReedCarbon);
                console.log(totalEnergy);

                setTotalReedenergy(totalReedenergy => totalReedenergy - energy);
                setTotalReedCarbon(totalReedCarbon => totalReedCarbon - carbon);
                settotalEnergy(totalEnergy => totalEnergy - energy);
                settotalCarbon(totalCarbon => totalCarbon - carbon);
            }

            setMapLayers(layers =>
                layers.filter(l => l.id !== a._leaflet_id));
        });
    };

    //total area
    //=========================================================
    // const infrastructures = mapLayers.length;


    // let myFilter = [
    //     'grayscale: 40%',
    // ];

    //Marker Setup
    //==============================================================================================
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdn4.iconfinder.com/data/icons/ecology-environmentalism-line/56/Untitled-1-34-512.png',
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/ecology-environmentalism-line/56/Untitled-1-34-512.png',
        shadowUrl: '',
    });


    //=======================Form =====================//
    // const getInputValue = (event) => {
    //     const userValue = event.target.value;
    //     setBufferValue(userValue);
    //     console.log(bufferValue);
    // }

    //========================== Update Buffer =================//


    return (
        <section>
            <div className="mapcontainerof">
                <MapContainer style={{ height: "100vh", width: "100vww" }} center={[52.473351, 6.667982]} zoom={13.5} zoomControl={false} scrollWheelZoom={true} crs={L.CRS.EPSG3857} whenCreated={setMap} draggable={false}>
                    <LayersControl position="topright">
                        <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                filter="myFilter"
                            />
                        </LayersControl.BaseLayer>
                        <LayerGroup>
                            <LayersControl.Overlay name="Natuura 2000 Buffer">
                                <FeatureGroup name="buffered">
                                    <GeoJSON
                                        data={buffered}
                                        style={{ color: "gold", opacity: 1, fillOpacity: 0.4 }}
                                    />
                                </FeatureGroup>
                            </LayersControl.Overlay>
                            <Natuura2000 />
                            <LayersControl.Overlay name="Areas You Planted">
                                <FeatureGroup>
                                    <EditControl
                                        position="topleft"
                                        onCreated={_onCreate}
                                        onEdited={_onEdited}
                                        onDeleted={_onDeleted}
                                        draw={{ rectangle: false, polyline: false, circle: false, circlemarker: false, marker: false }} />
                                </FeatureGroup>
                            </LayersControl.Overlay>
                        </LayerGroup>
                    </LayersControl>
                </MapContainer>
            </div>

            <div className="chartholder">
                <Bargraph totalMisArea={totalMisArea} totalMaizArea={totalMaizArea} totalCatArea={totalCatArea} totalReedArea={totalReedArea} />

                <div className='margin'>
                    <table>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th className="middle">Energy Production (KJ/hectare/year)</th>
                            <th className="middle">CO2 Reduction (Kg/hectare/year)</th>
                        </tr>
                        <tr>
                            <td><span> <img className="smallimage" alt="Miscanthus" src={miscanthus}></img></span></td>
                            <td>Miscanthus</td>
                            <td className="centered">239.59</td>
                            <td className="centered">13560.9</td>
                        </tr>
                        <tr>
                            <td><span> <img className="smallimage" alt="Maize" src={maze}></img></span></td>
                            <td>Maize</td>
                            <td className="centered">520.38</td>
                            <td className="centered">29453.3</td>
                        </tr>
                        <tr>
                            <td><span> <img className="smallimage" alt="Cattail" src={cattail}></img></span></td>
                            <td>Cattail</td>
                            <td className="centered">128.32</td>
                            <td className="centered">7262.9</td>
                        </tr>
                        <tr>
                            <td><span> <img className="smallimage" alt="Reed" src={reed}></img></span></td>
                            <td>Reed</td>
                            <td className="centered">262.46</td>
                            <td className="centered">14855</td>
                        </tr>
                    </table>
                </div>
                <StackedBargraph totalMisEnergy={totalMisEnergy} totalMaizEnergy={totalMaizEnergy} totalCatEnergy={totalCatEnergy} totalReedenergy={totalReedenergy} totalMisCarbon={totalMisCarbon} totalMaizCarbon={totalMaizCarbon} totalCatCarbon={totalCatCarbon} totalReedCarbon={totalReedCarbon} />
            </div>
            {/* <button onClick ={startdrawing}>test</button> */}
            {/* <pre className="text-left" >{JSON.stringify(mapLayers, 0, 2)}</pre> */}
        </section>
    );
}

export default TempLocation;




