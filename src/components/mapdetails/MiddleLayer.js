import LayergeoPolygon from './LayergeoPolygon';
import LayergeoMarker from "./LayergeoMarker";

function MiddleLayer(props) {
    var dataset = props.data
    if (dataset.type == "point"){
        return(
            <LayergeoMarker key = {dataset.name} dataName={dataset.name} mapdata={dataset[0][1]}/> 
        )
        
    } else {
        return (
            <LayergeoPolygon key = {dataset.name} dataName={dataset.name} mapdata={dataset[0]}/> 
        )
        
    }
}


export default MiddleLayer;