import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

var Bargraph = ({totalMisArea,totalMaizArea,totalCatArea,totalReedArea}) => {

const [state,setState] = useState({

    labels:["Planted area"],
    datasets:[{
        label: 'Miscanthus',
        backgroundColor: "#caf270",
        data: [totalMisArea],
      }, {
        label: 'Maize',
        backgroundColor: "#45c490",
        data: [totalMaizArea],
      }, {
        label: 'Cattail',
        backgroundColor: "#008d93",
        data: [totalCatArea],
      }, {
        label: 'Reed',
        backgroundColor: "#2e5468",
        data: [totalReedArea]
      }]
})

useEffect(() => {
    setState({
        labels:["Planted area"],
        datasets:[{
            label: 'Miscanthus',
            backgroundColor: "#caf270",
            data: [totalMisArea],
          }, {
            label: 'Maize',
            backgroundColor: "#45c490",
            data: [totalMaizArea],
          }, {
            label: 'Cattail',
            backgroundColor: "#008d93",
            data: [totalCatArea],
          }, {
            label: 'Reed',
            backgroundColor: "#2e5468",
            data: [totalReedArea]
          }]
    })

}, [totalMisArea,totalMaizArea,totalCatArea,totalReedArea]);

    return ( 
    <div className="Chartstyled">
        <Bar data={state}
            options={{
                    title:{
                    display:true,
                    text:'Planted Area',
                    fontSize:20
                    }
            }}
        />
    </div>
     );
}
 
export default Bargraph;