import L from 'leaflet';


function AddLegend(props) {
var legend = L.control({position: "bottomleft"});
legend.onAdd = function(map) {
    var div = L.DomUtil.create("div", "legend"); 
    div.innerHTML = props.legend
    return div;
};

}

export default AddLegend;
