import React, {useState, useEffect, useContext} from 'react';

function DataLoading(props){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState();

    useEffect(() => {
        setIsLoading(true);

        fetch(
          `${props.url}`
        )
        .then((response) => {
            return response.json();
          })
          .then((data) => {
            setIsLoading(false);
            setLoadedData(data);
          });
      }, []);

    return loadedData;
    }

    export default DataLoading;