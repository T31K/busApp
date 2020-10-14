
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'react-router-dom';

class Bar extends Component{

   

  render(){
   
    return (
      <div>
      
      <div className="bar">
      <nav>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/help">HELP</Link>
  <div id="indicator"></div>
</nav>
      </div>
</div>
    
    
  )}
}
export default Bar;

