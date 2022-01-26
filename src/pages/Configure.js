import React, {useState, useEffect, useContext} from 'react';
import Layout from '../components/layout/Layout';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Link } from 'react-router-dom';
import './main.css';
import {LAStateContext} from '../Store';
import {features} from "../data/Neighbourhoods.json";
import {turbinenergyValueStateContext} from '../Store';


function Configure(){
    const [turbinenergyValue, setturbinenergyValue] = useContext(turbinenergyValueStateContext);
    setturbinenergyValue(3.5);
    let textInput = React.createRef();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        setturbinenergyValue(textInput.current.value);
    }
  return (
    <Layout>
        <section>
        <form>
            <label>
                Wind Turbine Energy:
                <input ref={textInput} type="number" name="name" />
                </label>
        </form>
        <button onClick={handleSubmit}>Save</button>
        <Link to='/templocation'> return</Link>
        </section>
    </Layout>

  );
}
export default Configure;