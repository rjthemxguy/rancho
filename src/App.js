import logo from './logo.svg';
import './App.css';
import  {Map} from "./Map/Map"
import Legend from "./Legend"
import BarChart from './BarChart';
import "leaflet/dist/leaflet.css"
import { Bar } from "react-chartjs-2"
import { useSelector, useDispatch } from 'react-redux';
  
import {
  setData,
  selectCount,
} from "./app/chartSlice"

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







function App() {



  const data = useSelector(selectCount);

  return (
    <>
   <Map></Map>
   <Legend/>
  
   <BarChart data={data} options={options}/>
        
   </> 
  );
}

export default App;
