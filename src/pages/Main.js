import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';

function Main(){

    return(
        <Layout>
        <h1>EV Selector Explanation</h1>
        <Link to='/Areas'><h4 className="learnmore">Next </h4></Link>
        </Layout>
    );
}

export default Main;