import React from 'react';
import { LayersControl, GeoJSON, FeatureGroup } from 'react-leaflet';
import { multipleGeojson } from "../../data/Natuurasingle.js";


function Natuura2000() {
    const style = (feature => {
        return ({
            fillColor: 'white',
            weight: 1,
            opacity: 1,
            color: 'black',
            dashArray: '2',
            fillOpacity: 0.5
        });
    });
    // function onEachFeature(feature, layer) {
    //     if (feature.properties && feature.properties.SITETYPE) {
    //         //layer.bindPopup(feature.properties.SITETYPE);
    //         layer.bindTooltip(feature.properties.SITETYPE,
    //             { permanent: true, direction: "center", className: "my-label" }
    //         ).openTooltip()
    //     }
    // }
    console.log(multipleGeojson);


    var test = multipleGeojson.features;
    console.log(test);
    const feature = test.map(feature => {
        return (feature);
    });
    return (
        <LayersControl.Overlay name="Natuura 2000 Boundaries">
            <FeatureGroup name="Natuura 2000">
                {feature && (
                    <GeoJSON
                        data={feature}
                        style={style}
                    />
                )}
            </FeatureGroup>
        </LayersControl.Overlay>
    );
}

export default Natuura2000;