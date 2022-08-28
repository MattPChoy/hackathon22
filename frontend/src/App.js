import coffee_top from "./assets/images/coffee-top.png"

import Loading from "./components/Loading"
import Selection from "./components/Selection"
import Invite from "./components/Invite"
import Create from "./components/Create"
import Map from "./components/Map"
import MapWindow from "./components/MapWindow"
import Main from "./components/Main"

import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
      <BrowserRouter>
          <div className="App">
              <header className="App-header">
                  <Switch>
                      <Route path="/" component={Main} exact/>
                      <Route path="/select" component={Selection}/>
                      <Route path="/create" component={Create}/>
                      <Route path='/invite' component={Invite}></Route>
                      <Route path='/map' component={Map}></Route>
                  </Switch>
              </header>
          </div>
      </BrowserRouter>
  );
}

export default App;
