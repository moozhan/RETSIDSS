import React, { useContext } from "react";
import {priorityStateContext, typeofChargerStateContext, LAStateContext} from '../Store';
import Layout from '../components/layout/Layout';

function Test(){
    const [priorities, setPriorities] = useContext(priorityStateContext);
    const [chargerType, setchargerType] = useContext(typeofChargerStateContext);   
    const [LAs, setLAs] = useContext(LAStateContext);

    const types = JSON.stringify(chargerType);
    const prio = JSON.stringify(priorities);

    return(
        <Layout>
        <p>the chosen LAs are: {LAs}</p>
        <p>the chosen type of charger: {types}</p>
        <p>the chosen priorities: {prio}</p>
        </Layout>
    );
}

export default Test;