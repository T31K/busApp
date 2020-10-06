import React, {Component} from 'react';
import Navigation from "./Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {fetchapi} from "./fetchapi"

class BusOne extends Component{
  constructor(){
    super()
    this.handleCode = this.handleCode.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      bus: [],
      code : 78049,
    }
  
  }
  handleCode(e) {
    e.preventDefault()
    this.setState({code: e.target.value});
 }

    async handleSubmit() {
    try {
      setInterval(async () => {
        const response = await fetchapi(this.state.code)
        this.setState({bus: response.Services})
      }, 30000);
    } catch(e) {
      console.log(e);
    }
    }

  render(){
    
    let d = new Date();
    let time_now = Number(d.toLocaleTimeString().slice(3,5))
    return (
    
      <div>
      <div>
      <div className="card">
      
      <input className="text-center input-custom" type="text"  placeholder="5 DIGIT CODE" value={this.state.code}  onChange={this.handleCode}/>
      <div className="card-bg">

      
      <p></p>

        <div className="multi-button">
        <button className="fas fa-heart" onClick={this.handleSubmit}>S</button>
        <button className="fas fa-share-alt">D</button>
        <button className="fas fa-trash">E</button>
        </div>
      </div>
  </div>

    </div>


</div>
    
  )}
}
export default BusOne;

