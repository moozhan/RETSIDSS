import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

function Main(){

    return(
        <Layout>
            <section className="centerpage">
                <div className="center-container">
                <div className="long"></div>
                    <h1 className="EVselectormenu">Regional Energy Transition Tool</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="short"></div>
                    <Link to='/Areas' className="no-decoration"><h4 className="learnmore">Start </h4></Link>
                </div>
            </section>
        </Layout>
    );
}

export default Main;