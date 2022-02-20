import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';

//import FavoritesContext from '../store/favorites-context';
import { MapContainer, TileLayer, LayersControl, FeatureGroup, LayerGroup} from 'react-leaflet';
import { EditControl} from "react-leaflet-draw";
import 'leaflet/dist/leaflet.css';
// import Boundary from "../components/mapLayers/Boundary.js";
// import Neighbourhood from "../components/mapLayers/Neighbourhoods.js";
// import Landuse from '../components/mapLayers/Landuse';
// import ReactDOM from "react-dom";
// import ReactDOMServer from "react-dom/server";
// import Rooftop from '../components/mapLayers/Rooftop';
// import Suitablesolar from '../components/mapLayers/Suitablesolar';
// import Suitablewind from '../components/mapLayers/Suitablewind';
// import Delayed from '../components/messagesingame/Delayed';
// import SecondMessage from '../components/messagesingame/SecondMessage';
//import ClientChoice from '../components/meetups/Formfarm';

import Natuura2000 from '../components/mapLayers/Natuura2000';
import "leaflet-draw/dist/leaflet.draw.css";
import L, { map } from 'leaflet';
import { useEffect } from 'react/cjs/react.development';
import Layout from '../components/layout/Layout';
import './main.css';
import {rooftopenergyStateContext, turbinenergyValueStateContext} from '../Store';
import miscanthus from '../components/images/Miscanthus.png';
import maze from '../components/images/maze.png';
import cattail from '../components/images/cattail.png';
import reed from '../components/images/reed.png';


function TempLocation() {
    // const [rooftopenergy, setrooftopenergy] = useContext(rooftopenergyStateContext);
    // const [turbinenergyValue, setturbinenergyValue] = useContext(turbinenergyValueStateContext);

    //const favoritesCtx = useContext(FavoritesContext);
    const [mapLayers, setMapLayers] = useState([]);
    // const [added, setTotalEnergy] = useState(0);
    // const [seconds, setSeconds] = useState(0);
    // const [years, setYears] = useState(2021);
    // const [hidden, setHidden] = useState(false);
    // const [hiddentoo, setHiddentoo] = useState(false);
    // const [turbinvalue, setturbinvalue] = useState(3.5);
    // const totalArea = mapLayers.reduce((totalarea, area) => totalarea + area.area, 0);
    // const energyfarm = totalArea* 750/10000;
    // const agriculture = totalArea/10000;
    // const totalEnergy = energyfarm + added + rooftopenergy;
    // const lefttogoal =  147000 - totalEnergy;
    // const farm = energyfarm.toFixed(2);
    // const smalltotalEnergy = totalEnergy.toFixed(2);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setYears(year => year + 1);
    //       if (added !==0){
    //       setTotalEnergy(added => added + turbinenergyValue);
    //       }
    //       setSeconds(seconds => seconds + 1);
    //     }, 480000);
    //     return () => clearInterval(interval);
    //   }, []);
    //console.log(turbinenergyValue);

    //======ShapeOptions: setting the color of the polygon ===//
    var Miscanthus = {            
        fillColor: 'white',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '2',
        fillOpacity: 0.5
    }
    var Maize = {            
        fillColor: 'red',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '2',
        fillOpacity: 0.5
    }
    var Cattail = {            
        fillColor: 'blue',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '2',
        fillOpacity: 0.5
    }
    var Reed = {            
        fillColor: 'green',
        weight: 1,
        opacity: 1,
        color: 'black',
        dashArray: '2',
        fillOpacity: 0.5
    }

    L.DrawToolbar.include({
        getModeHandlers: function (map) {
            return [
                {
                    enabled: true,
                    handler: new L.Draw.Polygon(map, {shapeOptions: Miscanthus}),
                    title: 'Place restaurant marker',
                },
                {
                    enabled: true,
                    handler: new L.Draw.Polygon(map, {shapeOptions: Maize}),
                    title: 'Place gas station marker'
                },
                {
                    enabled: true,
                    handler: new L.Draw.Polygon(map, {shapeOptions: Cattail}),
                    title: 'Place hospital marker'
                },
                {
                    enabled: true,
                    handler: new L.Draw.Polygon(map, {shapeOptions: Reed}),
                    title: 'Place hospital marker'
                }
            ];
        }
    });
    const _onCreate = e => {
        //console.log(e);
        const {layerType, layer} = e;
        // const values = turbinenergyValue;
        if(layerType === "polygon"){
            const{_leaflet_id} = layer;
            var area = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
            // var smallarea = area.toFixed(2);
            // var energyproduced = smallarea*750/1000;
            // var smallenergyproduced = energyproduced.toFixed(2);
            const popupContent = 'information';
            var popup = layer.bindPopup(popupContent);
            setMapLayers(layers => [...layers, {id: _leaflet_id, latLngs: layer.getLatLngs()[0], area: area, type: "Intensive Farm"},]);
            //setTotalEnergy(added => added + layer.area);
            //layer.openPopup();
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

    //total area
    //=========================================================
    const infrastructures = mapLayers.length;


    let myFilter =[
        'grayscale: 40%',
    ];

    //Marker Setup
    //==============================================================================================
        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdn4.iconfinder.com/data/icons/ecology-environmentalism-line/56/Untitled-1-34-512.png',
            iconUrl: 'https://cdn4.iconfinder.com/data/icons/ecology-environmentalism-line/56/Untitled-1-34-512.png',
            shadowUrl: '',
        });
    
    //Button control
    //==============================================================================================
        // function accept() {
        //     setTotalEnergy(added => added + 50);
        //     setHidden(true);

        //   }
        //   function reject() {
        //     setTotalEnergy(added => added );
        //     setHidden(true);
        //   }
        
        // function accepttoo() {
        //     setTotalEnergy(added => added + 20);
        //     setHiddentoo(true);
            
        //   }
        //   function rejecttoo() {
        //     setHiddentoo(true);
        //   }


    //list of Wind Turbines control
    //==============================================================================================
    function TurbineList(props) {
        const turbines = props.numbers;
        const listTurbines = turbines.map((number) =>
            <li className="infralist"key={number.id}>
                <p>Infrastrucutre Type: {number.type}</p>
                <p>Infrastrucutre ID: {number.id}</p>
                <p>Infrastructure Location/area: {number.latLngs.lat} {number.latLngs.lng} {number.area}</p>
                {/* <p>{number.popup}</p> */}
            </li>
        );
        return (
            <ul className="turbine"> {listTurbines}</ul>
        );
    }

//    let img = '../components/images/Miscanthus.png';
//    let img2 ='https://toppng.com/uploads/preview/open-wind-power-icon-115632282795bzfxyao19.png';
//    let img3 ='https://static.thenounproject.com/png/81668-200.png';
//    let img4 ='https://icon-library.com/images/solar-power-icon/solar-power-icon-12.jpg';

    //Lists
    //==========================================================================
    // function Farms(props) {
    //     const infrastructures = props.numbers;
    //     console.log(infrastructures);
    //     useEffect(() => {
    //         const listTurbines = infrastructures.map(number =>
    //             {
    //                 if (number.type == "Intensive Farm") {
    //                     const newfarmEnergy = number.area* 750/10000;
    //                     setfarmEnergy(farmEnergy => farmEnergy + newfarmEnergy);
    //                 }
    //             }
    //         );
    //       }, []);

        
    //     return (
    //         <p className="totalEnergy">The total energy you have produced from farms: {farmEnergy} MWh</p>
    //     );
    // }
    // let textInput = React.createRef();

    // const handleSubmit = (evt) => {
    //     evt.preventDefault();
    //     setturbinvalue(textInput.current.value);
    // }
    return(
        <Layout>
        <section>
        <div className="mapcontainerof">
        <MapContainer style={{ height: "90vh", width: "100vww" }} center={[52.473351, 6.667982]} zoom={13.5} scrollWheelZoom={true} crs={L.CRS.EPSG3857}>
        <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            filter= "myFilter"
            />
        </LayersControl.BaseLayer>
            <FeatureGroup>
                <EditControl 
                    position="topleft" 
                    onCreated={_onCreate} 
                    onEdited={_onEdited} 
                    onDeleted={_onDeleted} 
                    draw={{rectangle: false, polyline:false, circle: false, circlemarker: false, marker: false}}/>
            </FeatureGroup>
            <LayerGroup>
                <Natuura2000 />
                {/* <Boundary/>
                <Neighbourhood/>
                <Landuse />
                <Rooftop/>
                <Suitablesolar />
                <Suitablewind /> */}
            </LayerGroup>
        </LayersControl>
        </MapContainer>
        </div>
        <div className="detailsofmap">
            <div className="icons">
                <img src={miscanthus} className="logosolarfarm"></img>
            </div>
            <div className="icons">
                <img src={maze} className="logosolarfarm"></img>
            </div>
            <div className="icons">
                <img src={cattail} className="logosolarfarm"></img>
            </div>
            <div className="icons">
                <img src={reed} className="logosolarfarm"></img>
            </div>
            <div className="icons">
                <p><span>Total Energy Produced:</span></p>
            </div>
            <div className="icons">
                <p><span>Total Co2 Emission Saving:</span></p>
            </div>
        </div>
        <div className="details">
            <div>
                {/* <p className="totallist">Overall Goal for Energy produced in a year <span className="bold">by 2030 </span>is set to be <span className="bold">147,000 MWh</span></p>
                <p className="totallist">The year is now <span className="bold">{years}</span></p>
                <p className="totalEnergy"><span className="bold">The total energy you have produced is: </span>{totalEnergy} MWh</p>
                <p className="totalEnergy">The need to produce <span className="bold">{lefttogoal} MWh</span> energy per year to reach the goal</p>
                <p className="totalEnergy"><span className="bold">The total energy you have produced from farms is:</span> {energyfarm} MWh</p>
                <p className="totalEnergy"><span className="bold">The total energy you have produced from wind turbines is: </span>{added} MWh</p>
                <p className="totallist"><span className="bold">Lost hectares of agriculture land: </span> {agriculture}  </p>
                <p className="totallist"><span className="bold">Here is the list of your proposed infrastructure:  </span></p>
                
                <TurbineList numbers= {mapLayers} /> */}

            </div>
        </div>
        <pre className="text-left">{JSON.stringify(mapLayers, 0, 2)}</pre>
        </section>


        {/* <Link to='/configure' className="no-decoration"><h4 className="learnmore-right">Configure </h4></Link> */}
        {/* <section>
        <form>
            <label>
                Wind Turbine Energy:
                <input ref={textInput} type="number" name="name" />
                </label>
        </form>
        <button onClick={handleSubmit}>Save</button>
        </section> */}
        </Layout>

    );
}

export default TempLocation;




