import logo from './logo.svg';
import './App.css';
import  {Map} from "./Map/Map"
import Legend from "./Legend"
import BarChart from './BarChart';
import "leaflet/dist/leaflet.css"
import { Bar } from "react-chartjs-2"
  

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
    position: 'bottom',
   
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ["Clark", "Stickler", "Olmsted", "Hannah", "Henderson", "Jimenez"]



export const data = {
labels,
datasets: [
  {
    label: 'Votes',
    data: ["50", "10","70", "50", "30", "29"],
    backgroundColor: ["red", "blue", "green"]
  }
 
],
};


function App() {
  return (
    <>
   <Map/>
   <Legend/>
   
   <BarChart data={data} options={options}/>
        
   </> 
  );
}

export default App;
