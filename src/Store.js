import React, {useState} from 'react';

const LAInitialState = {LAs: [], setLAs: undefined};
const priorityInitialState = {priorities: ["air quality"], setPriorities: undefined};
const typeofChargerState = {chargerType: [], setchargerType: undefined};
const allocatedPointsState = {allocatedpoints: [], setallocatedpoints: undefined};
const selectedMarkerState = {selectedMarker: "fast charger", setselectedMarker: undefined};
const rooftopenergyState = {rooftopenergy: 0, setrooftopenergy: undefined};
const turbinenergyValueState = {turbinenergyValue: 3.5, setturbinenergyValue: undefined};

export const LAStateContext = React.createContext(LAInitialState);
export const priorityStateContext = React.createContext(priorityInitialState);
export const typeofChargerStateContext = React.createContext(typeofChargerState);
export const allocatedPointsStateContext = React.createContext(allocatedPointsState);
export const selectedMarkerStateContext = React.createContext(selectedMarkerState);
export const rooftopenergyStateContext = React.createContext(rooftopenergyState);
export const turbinenergyValueStateContext = React.createContext(turbinenergyValueState);

const Store = ({ children }) => {
    const [LAs, setLAs] = useState(LAInitialState.LAs);
    const [priorities, setPriorities] = useState(priorityStateContext.priorities);
    const [chargerType, setchargerType] = useState(typeofChargerStateContext.chargerType);
    const [allocatedpoints, setallocatedpoints] = useState(allocatedPointsStateContext.allocatedpoints);
    const [selectedMarker, setselectedMarker] = useState(selectedMarkerStateContext.selectedMarker);
    const [rooftopenergy, setrooftopenergy] = useState(rooftopenergyStateContext.rooftopenergy);
    const [turbinenergyValue, setturbinenergyValue] = useState(turbinenergyValueStateContext.turbinenergyValue);

    return (
        <LAStateContext.Provider value={[LAs, setLAs]}>
          <typeofChargerStateContext.Provider value ={[chargerType, setchargerType]}>
            <priorityStateContext.Provider value ={[priorities, setPriorities]}>
              <allocatedPointsStateContext.Provider value ={[allocatedpoints, setallocatedpoints]}>
                <selectedMarkerStateContext.Provider value ={[selectedMarker, setselectedMarker]}>
                  <turbinenergyValueStateContext.Provider value ={[rooftopenergy, setrooftopenergy]}>
                  <rooftopenergyStateContext.Provider value ={[turbinenergyValue, setturbinenergyValue]}>

                      {children}
                      </rooftopenergyStateContext.Provider>
                  </turbinenergyValueStateContext.Provider>
                </selectedMarkerStateContext.Provider>
              </allocatedPointsStateContext.Provider>
            </priorityStateContext.Provider>
          </typeofChargerStateContext.Provider>
        </LAStateContext.Provider>
    );
};

export default Store;