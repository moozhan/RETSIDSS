import React, {useState, useContext} from 'react';
import {typeofChargerStateContext, selectedMarkerStateContext} from '../../Store';
import '../../pages/main.css';


const Form = () => {
        const [chargerType, setchargerType] = useContext(typeofChargerStateContext);
        const [selectedMarker, setselectedMarker] = useContext(selectedMarkerStateContext);
        
        const [checkedbox, setcheckedbox] = useState('fast charger');

        const handleChange = (event) => {
            setcheckedbox(event.target.value);
            setselectedMarker(event.target.value);
        }


    return(
            <form>
            {chargerType.map(items => (
            <div key = {items}>
                <input
                type="radio"
                value={items}
                checked={checkedbox === {items}}
                onChange={handleChange}
                /> 
                <label>{items}</label>
            </div>
            ))}
            </form> 
        )

    }
  export default Form;
