import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

var StackedBargraph = ({totalMisEnergy,totalMaizEnergy,totalCatEnergy,totalReedenergy, totalMisCarbon, totalMaizCarbon, totalCatCarbon, totalReedCarbon}) => {

const [state,setState] = useState({
    labels:["Energy Produced","CO2 Saving"],
    datasets: [{
        label: 'Miscanthus',
        backgroundColor: "#caf270",
        data: [totalMisEnergy, totalMisCarbon],
      }, {
        label: 'Maize',
        backgroundColor: "#45c490",
        data: [totalMaizEnergy, totalMaizCarbon],
      }, {
        label: 'Cattail',
        backgroundColor: "#008d93",
        data: [totalCatEnergy, totalCatCarbon],
      }, {
        label: 'Reed',
        backgroundColor: "#2e5468",
        data: [totalReedenergy, totalReedCarbon],
      }]
})

useEffect(() => {
    setState({
        labels:["Energy Produced","CO2 Saving"],
        datasets: [{
            label: 'Miscanthus',
            backgroundColor: "#caf270",
            data: [totalMisEnergy, totalMisCarbon],
          }, {
            label: 'Maize',
            backgroundColor: "#45c490",
            data: [totalMaizEnergy, totalMaizCarbon],
          }, {
            label: 'Cattail',
            backgroundColor: "#008d93",
            data: [totalCatEnergy, totalCatCarbon],
          }, {
            label: 'Reed',
            backgroundColor: "#2e5468",
            data: [totalReedenergy, totalReedCarbon],
          }]
    })

}, [totalMisEnergy,totalMaizEnergy,totalCatEnergy,totalReedenergy, totalMisCarbon, totalMaizCarbon, totalCatCarbon, totalReedCarbon]);

    return ( 
<div className="StackedChartstyled">
<Bar data={state}
    options= {{
        tooltips: {
        displayColors: true,
        callbacks:{
            mode: 'x',
        },
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: 'bottom' },
    }}
 />
</div>
     );
}
 
export default StackedBargraph;