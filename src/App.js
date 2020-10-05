import React, {Component} from 'react';
import Draggable from 'react-draggable';
import Navigation from "./Navigation"
import {Rnd} from 'react-rnd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BusOne from "./BusOne"
import BusTwo from "./BusTwo"
import BusThree from "./BusThree"
import BusFour from "./BusFour"

function App(){
  return(
    <div>
    <BusOne/>
    <BusTwo/>
    <BusThree/>
    <BusFour/>
    </div>
  )
}

export default App;

