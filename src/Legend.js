import React from 'react';
import "./legend.css"

const style1 = {
content: "dsf",
backgroundColor:"red", 
left: "0",
top: "0",
width: "20px",
height: "20px",
marginRight: "5"}

const Legend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": 'Peru'}}>41% - 45%</div>
            <div style={{ "--color": 'RoyalBlue' }}>36% - 40%</div>
            <div style={{ "--color": 'YellowGreen' }}>31% - 35%</div>
            <div style={{ "--color": 'red' }}>26% - 30%</div>
            <div style={{ "--color": 'aqua'}}>21% - 25%</div>
            <div style={{ "--color": 'orange' }}>16% - 20%</div>
            <div style={{ "--color": 'green' }}>11% - 15%</div>
            <div style={{ "--color": 'darkgray' }}>6% - 10%</div>
            <div style={{ "--color": 'maroon' }}>0% - 5%</div>
        </div>
    );
}
export default Legend;