import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {fetchapi} from "./fetchapi"
import App from './App';
import About from "./About";
import { Link } from 'react-router-dom';


class Bar extends Component{
  constructor(){
    super()
   
    }
  
  
  

  render(){
   
    return (
      <div>
      
      <div className="bar">
      <nav>
      <a><Link to="/">HOME</Link></a>
      <a><Link to="/about">ABOUT</Link></a>
      <a><Link to="/help">HELP</Link></a>
  <div id="indicator"></div>
</nav>
      </div>
</div>
    
    
  )}
}
export default Bar;

