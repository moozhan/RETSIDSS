import React, {useState} from 'react';

const LAInitialState = {LAs: [], setLAs: undefined};
const priorityInitialState = {priorities: ["air quality"], setPriorities: undefined};
const typeofChargerState = {chargerType: [], setchargerType: undefined};
const allocatedPointsState = {allocatedpoints: [], setallocatedpoints: undefined};

export const LAStateContext = React.createContext(LAInitialState);
export const priorityStateContext = React.createContext(priorityInitialState);
export const typeofChargerStateContext = React.createContext(typeofChargerState);
export const allocatedPointsStateContext = React.createContext(allocatedPointsState);

const Store = ({ children }) => {
    const [LAs, setLAs] = useState(LAInitialState.LAs);
    const [priorities, setPriorities] = useState(priorityStateContext.priorities);
    const [chargerType, setchargerType] = useState(typeofChargerStateContext.chargerType);
    const [allocatedpoints, setallocatedpoints] = useState(allocatedPointsStateContext.allocatedpoints);

    return (
        <LAStateContext.Provider value={[LAs, setLAs]}>
          <typeofChargerStateContext.Provider value ={[chargerType, setchargerType]}>
            <priorityStateContext.Provider value ={[priorities, setPriorities]}>
              <allocatedPointsStateContext.Provider value ={[allocatedpoints, setallocatedpoints]}>
                {children}
              </allocatedPointsStateContext.Provider>
            </priorityStateContext.Provider>
          </typeofChargerStateContext.Provider>
        </LAStateContext.Provider>
    );
};

export default Store;