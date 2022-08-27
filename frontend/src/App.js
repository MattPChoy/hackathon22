import coffee_top from "./assets/images/coffee-top.png"

import Loading from "./components/Loading"
import Selection from "./components/Selection"
import Join from "./components/Join"
import DataScreen from "./components/Data"

import Button from '@mui/material/Button';
import './App.css';
import React from 'react';

// Loading icon
// function clearCoffee() {
//     document.getElementById("App-logo").style.display="none";
//     document.getElementById("click-here").style.display="block";
// }

// setTimeout(() => {
//     clearCoffee();
// }, 3500)

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <DataScreen />
      </header>
    </div>
  );
}

export default App;
