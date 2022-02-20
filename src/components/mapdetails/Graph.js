import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

var Bargraph = ({totalMisArea,totalMaizArea,totalCatArea,totalReedArea}) => {

const [state,setState] = useState({

    labels:["Mis","Maize","Cattail", "Reed"],
    datasets:[{

        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data:[totalMisArea,totalMaizArea,totalCatArea,totalReedArea]

    }]
})

useEffect(() => {
    setState({
        labels:["Mis","Maize","Cattail", "Reed"],
        datasets:[{
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data:[totalMisArea,totalMaizArea,totalCatArea,totalReedArea]
    
        }]
    })

}, [totalMisArea,totalMaizArea,totalCatArea,totalReedArea]);

    return ( 
<section className="chart mb-4 mt-lg-5">

<div className="Chartstyled">
<Bar data={state}
    options={{
            title:{
              display:true,
              text:'Income , Expenses and Current Balance',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
    }}
 />
</div>

</section>

     );
}
 
export default Bargraph;