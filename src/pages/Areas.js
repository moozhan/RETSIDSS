import React, {useState, useEffect, useContext} from 'react';
import Layout from '../components/layout/Layout';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { Link } from 'react-router-dom';
import './main.css';
import {LAStateContext} from '../Store';

function LAsearch(){
    const [LAs, setLAs] = useContext(LAStateContext);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedDatasearch, setLoadedData] = useState();
    const [items, setItems] = useState();

    useEffect(() => {
        setIsLoading(true);
        fetch(
          'https://cleanstreetserver.herokuapp.com/v1/LACoords'
        )
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            setIsLoading(false);
            setLoadedData(data);
            const LAnames = []
            for(let i=0; i< data.length;i++){
                var names = data[i].lad17nm;
                LAnames[i] = {'name':names, 'id': i};
            }
            setItems(LAnames);
          });
      }, []);

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

    if (isLoading) {
        return (
          <Layout>
          <section>
            <p>Loading...</p>
          </section>
          </Layout>
        );
    }
  return (
    <Layout>
    <section className="content-main">
        <div className="container">
        <div className="title">
            <h1 className="main-title content-main">EV Charging Point Site Selector</h1>
            <h3 className="sub-title content-main">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h3>
        </div>
        </div>
    </section>
    <section>
        <h2 className="left">Where?</h2>
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
        <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
        />
        </div>   
        </section>     
        <Link to='/TypeofCharger'><h4 className="learnmore">Next </h4></Link>
    </Layout>

  );
}
export default LAsearch;