import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {fetchapi} from "./fetchapi"
import App from './App';
import AboutPage from "./AboutPage";


class Bar extends Component{
  constructor(){
    super()
   
    }
  
  
  

  render(){
   
    return (
      <div>
      
      <div className="bar">
      <nav>
  <a href="#">HOME</a>
  <a href="#">ABOUT</a>
  <a href="#">CONTACT</a>
  <div id="indicator"></div>
</nav>
      </div>
</div>
    
    
  )}
}
export default Bar;

