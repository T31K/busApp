import React, {Component} from 'react';
import Draggable from 'react-draggable';
import Navigation from "./Navigation"
import {Rnd} from 'react-rnd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class BusFour extends Component{
  constructor(){
    super()
    this.handleCode = this.handleCode.bind(this)
    this.state = {
      bus: [],
      code : 76071
    }
  
  }
 
  handleCode(e) {
    e.preventDefault()
    this.setState({code: e.target.value});
 }


  render(){
  return(
  <div>
      <div className="card">
        <div className="multi-button">
        <button className="fas fa-heart"></button>
        <button className="fas fa-share-alt"></button>
        <button className="fas fa-trash"></button>
        </div>
      </div>
  </div>
    

    )
  }
}
export default BusFour;

