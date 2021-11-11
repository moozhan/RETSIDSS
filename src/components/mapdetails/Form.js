import React, {useState, useContext} from 'react';
import {typeofChargerStateContext} from '../../Store';


const Form = () => {
        const [chargerType, setchargerType] = useContext(typeofChargerStateContext);
        const [checkedbox, setcheckedbox] = useState('fast charger');
        console.log(checkedbox);

        const handleChange = (event) => {
            setcheckedbox(event.target.value)
        }
    
        const resetRadioState = () => {
            setcheckedbox('');
        }
    return(
            <form>
            {chargerType.map(items => (
            <div>
                <input
                type="radio"
                value={items}
                checked={checkedbox === {items}}
                onChange={handleChange}
                /> {items}
            </div>
            ))}
            <div>
                <button
                type="reset"
                onClick={resetRadioState}
                />
            </div>
            </form> 

        )
    }
  export default Form;