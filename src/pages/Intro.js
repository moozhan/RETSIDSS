import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import tutorial1 from '../components/images/tutorial1.jpg';


function Intro() {

    console.log("page loaded");

    return (
        <section>
            <h1>Sustainable Agriculture Decision Support System</h1>
            <div className="container-paragraph">
                <p>Does implementing energy transition mean abolishing argicultural acitivies? is horticulture a viable solution to overcome the impacts energy transition plans have on argicultural activities? SADSS was designed to help exploring such questions. As a decision support system, SADSS allow you to explore the horticulture implication in your area.  </p>
            </div>
            <div className="grid">
                <div className="grid-item">
                    <img src={tutorial1} alt="Logo" />
                </div>
                <div className="grid-item">
                    <img src={tutorial1} alt="Logo" />
                </div>
                <div className="grid-item">
                    <img src={tutorial1} alt="Logo" />
                </div>
                <div className="grid-item">
                    <img src={tutorial1} alt="Logo" />
                </div>
            </div>
            <button><Link to='/dss'>Click me</Link></button>
        </section>
    );
}

export default Intro;




