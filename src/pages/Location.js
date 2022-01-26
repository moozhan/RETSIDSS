import React, {useState, useEffect, useContext} from 'react';
import Map from '../components/mapdetails/BaseMap';
import Layout from '../components/layout/Layout';
import '../pages/main.css';
import { Link } from 'react-router-dom';
import Form from '../components/mapdetails/Form';

function Location() {
    
    var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
    var cities = L.layerGroup([littleton, denver, aurora, golden]);



  return(
    <Layout>
        <section className="content-main">
            <div className="container">
            <div className="title">
                <h1 className="main-title content-main">Where?</h1>
                <h3 className="sub-title content-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
            </div>
            </div>
        </section>
        <section className="content-main">
            <div className="container">
            <div className="title">
                <Form />
            </div>
            </div>
        </section>
        <section className="content-main">
            <div className="mapcontainerof">
            <Map />
            </div>
        </section>
        <Link to='/test'><h4 className="learnmore">Next </h4></Link>

    </Layout>

    );
}

export default Location;