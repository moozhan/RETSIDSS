import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import tutorial1 from '../components/images/tutorial1.jpg';
import one from '../components/images/1.gif';
import two from '../components/images/2.gif';
import three from '../components/images/3.gif';
import four from '../components/images/4.gif';


function Intro() {

    console.log("page loaded");

    return (
        <section className="main-section-intro">
            <h1>PLENUM: Paludiculture Decision Support System</h1>
            <div className="container-paragraph">
                <p>Does implementing energy transition plans mean abolishing argicultural acitivies? iI horticulture a viable solution in overcoming the impacts energy transition plans have on argicultural activities? PLENUM was developed as part of the RETSI project to help exploring such questions. As a decision support system, PLENUM allow you to explore the horticulture implication in your area.  </p>
            </div>
            <div className="intro-page-grid">
                <div className="intro-page-grid-item">
                    <img className="image-intro-page" src={one} alt="Logo" />
                    <div className="explanation">
                        <p>See the official Natuura2000 area's boundary</p>
                        <p>Use the already created buffer as a guiding line for distance from Natuura2000 area</p>
                        <p>If you have already planned buffer zone for your area, use the boundary icon on the left to recreate the boundary on the map</p>
                    </div>
                </div>
                <div className="intro-page-grid-item">
                    <img className="image-intro-page" src={two} alt="Logo" />
                    <div className="explanation">
                        <p>Activate the 'Areas You Planted' layer from the menu on the top right.</p>
                        <p>Choose a plant to crop from the left menu</p>
                        <p>Draw polygons on the map. If the polygon is not complete the system will automatically complete it by joining the first and the last added points.</p>
                    </div>
                </div>
                <div className="intro-page-grid-item">
                    <img className="image-intro-page" src={three} alt="Logo" />
                    <div className="explanation">
                        <p>Use the bin icon to delete the polygons and the boundary you have added.</p>
                        <p>Click the bin icon, click on one or more features, then click save button that appears close to the bin icon.</p>
                    </div>
                </div>
                <div className="intro-page-grid-item">
                    <img className="image-intro-page" src={four} alt="Logo" />
                    <div className="explanation">
                        <p>Use the icon on the top right at any time to hide or show elements on the map.</p>
                        <p>The order of making layers visible would change the order of maps being displayed.</p>
                        <p>All your created areas are saved in the 'Areas You Planted' layer.</p>
                    </div>
                </div>
            </div>
            <Link className="hyperlinked" to='/dss'><button className="button-click">Launch PLENUM</button></Link>
        </section>
    );
}

export default Intro;




