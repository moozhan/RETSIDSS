import React, {useState, useEffect, useContext} from 'react';
import Layout from '../components/layout/Layout';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Link } from 'react-router-dom';
import './main.css';
import {LAStateContext} from '../Store';
import {features} from "../data/Neighbourhoods.json";


function LAsearch(){
    const [LAs, setLAs] = useContext(LAStateContext);
    //const [isLoading, setIsLoading] = useState(true);
    //const [loadedDatasearch, setLoadedData] = useState();
    //const [items, setItems] = useState();

    const items = [];
    // const codes = [];
    const feature = features.map(feature => {
      items.push({'name': feature.properties.BU_NAAM, 'id': feature.properties.BU_CODE});
      // codes.push(feature.properties.BU_CODE);
    });

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch(
    //       'https://cleanstreetserver.herokuapp.com/v1/LACoords'
    //     )
    //     .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //         setIsLoading(false);
    //         setLoadedData(data);
    //         const LAnames = []
    //         for(let i=0; i< data.length;i++){
    //             var names = data[i].lad17nm;
    //             LAnames[i] = {'name':names, 'id': i};
    //         }
    //         setItems(LAnames);
    //       });
    //   }, []);

      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
      }
    
      const handleOnHover = (result) => {
        // the item hovered
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        setLAs(LAs => [...LAs, item.name]);
      }
      // console.log(selectedLA);


      const handleOnFocus = () => {
      }
      const formatResult = (item) => {
        return item;
       // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
      }

    // if (isLoading) {
    //     return (
    //       <Layout>
    //       <section>
    //         <p>Loading...</p>
    //       </section>
    //       </Layout>
    //     );
    // }
  return (
    <Layout>
    <section className="centerpage">
    <div className="center-container">

        <div className="medium"></div>
        <h1 className="EVselectortitle">Where?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
        <div className="short"></div>

    </div>
    </section>
    <section>
        <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
        />
        <br />
        </div>   
        </section> 
        <section className="centerpage">
        <div className="center-container">
        <Link to='/TypeofInfrastructure' className="no-decoration"><h4 className="learnmore-right">Choose What to Allocate > </h4></Link>
        </div>
        </section>
    </Layout>

  );
}
export default LAsearch;