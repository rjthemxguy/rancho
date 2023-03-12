import "./barChart.css"
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
  } from "chart.js"

  import { Bar } from "react-chartjs-2"
  



  ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
  )

  

const BarChart = ({data, options}) => {
    return (
        <div className="barChart">
            <Bar
        data = {data}
        options = {options}>
       

      </Bar>
        </div>
    );
}
export default BarChart;